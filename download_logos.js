const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'assets', 'images', 'logos');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Using Google's favicon service as fallback - highly accessible
const companies = [
  { name: 'tcs',          url: `https://www.google.com/s2/favicons?domain=tcs.com&sz=128` },
  { name: 'infosys',      url: `https://www.google.com/s2/favicons?domain=infosys.com&sz=128` },
  { name: 'wipro',        url: `https://www.google.com/s2/favicons?domain=wipro.com&sz=128` },
  { name: 'capgemini',    url: `https://www.google.com/s2/favicons?domain=capgemini.com&sz=128` },
  { name: 'hcltech',      url: `https://www.google.com/s2/favicons?domain=hcltech.com&sz=128` },
  { name: 'techmahindra', url: `https://www.google.com/s2/favicons?domain=techmahindra.com&sz=128` },
  { name: 'cognizant',    url: `https://www.google.com/s2/favicons?domain=cognizant.com&sz=128` },
  { name: 'accenture',    url: `https://www.google.com/s2/favicons?domain=accenture.com&sz=128` },
  { name: 'epam',         url: `https://www.google.com/s2/favicons?domain=epam.com&sz=128` },
  { name: 'virtusa',      url: `https://www.google.com/s2/favicons?domain=virtusa.com&sz=128` },
  { name: 'microsoft',    url: `https://www.google.com/s2/favicons?domain=microsoft.com&sz=128` },
  { name: 'amazon',       url: `https://www.google.com/s2/favicons?domain=amazon.com&sz=128` },
  { name: 'ibm',          url: `https://www.google.com/s2/favicons?domain=ibm.com&sz=128` },
  { name: 'zensar',       url: `https://www.google.com/s2/favicons?domain=zensar.com&sz=128` },
  { name: 'mindtree',     url: `https://www.google.com/s2/favicons?domain=mindtree.com&sz=128` },
  { name: 'ust',          url: `https://www.google.com/s2/favicons?domain=ust.com&sz=128` },
  { name: 'unisys',       url: `https://www.google.com/s2/favicons?domain=unisys.com&sz=128` },
  { name: 'mphasis',      url: `https://www.google.com/s2/favicons?domain=mphasis.com&sz=128` },
  { name: 'niit',         url: `https://www.google.com/s2/favicons?domain=niit.com&sz=128` },
  { name: 'persistent',   url: `https://www.google.com/s2/favicons?domain=persistent.com&sz=128` },
  { name: 'lnt',          url: `https://www.google.com/s2/favicons?domain=larsentoubro.com&sz=128` },
  { name: 'bel',          url: `https://www.google.com/s2/favicons?domain=bel-india.in&sz=128` },
  { name: 'tatamotors',   url: `https://www.google.com/s2/favicons?domain=tatamotors.com&sz=128` },
  { name: 'sunpharma',    url: `https://www.google.com/s2/favicons?domain=sunpharma.com&sz=128` },
  { name: 'drreddys',     url: `https://www.google.com/s2/favicons?domain=drreddys.com&sz=128` },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close(); fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close(); fs.unlinkSync(dest);
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', err => { try { file.close(); fs.unlinkSync(dest); } catch(e) {} reject(err); });
  });
}

async function run() {
  let ok = 0, fail = 0;
  for (const c of companies) {
    const dest = path.join(outDir, `${c.name}.png`);
    try {
      await download(c.url, dest);
      const size = fs.statSync(dest).size;
      console.log(`✓ ${c.name} (${size} bytes)`);
      ok++;
    } catch (e) {
      console.log(`✗ ${c.name}: ${e.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} saved, ${fail} failed`);
}

run();
