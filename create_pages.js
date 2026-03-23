const fs = require('fs');
const text = fs.readFileSync('achievements.html', 'utf8');

// 2. placementcontacts.html
let t2 = text.replace(/Achievements \| CMR Group of Institutions – Hyderabad/g, 'Placement Team | CMR Group of Institutions')
             .replace(/Pride of CMR/g, 'Contact Placement')
             .replace(/Our Achievements/g, 'Placement Team')
             .replace('Home</a><span>›</span><span style=\"color:#fff;\">Achievements</span>', 'Home</a><span>›</span><a href=\"placements.html\">Placements</a><span>›</span><span style=\"color:#fff;\">Team</span>');

const contacts_content = `
<section style="background:#fff; padding:60px 0;">
  <div class="container">
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center;" class="fade-up">
      <div>
        <p class="section-label">DEAN TRAINING & PLACEMENTS</p>
        <h2 class="section-title">DR. P. HIMA BINDU <br><span style="font-size:18px; color:var(--text-muted); font-weight:normal;">MBA, B.Ed, M.Phil, PhD (SLET Qualified)</span></h2>
        <div style="margin-top:24px; color:var(--text-muted); font-size:16px; line-height:1.8;">
          <p style="margin-bottom:16px;">She has 18 years of corporate, teaching and research experience. She completed her MBA, B.Ed., M.Phil. and was awarded Ph.D in HRM from Osmania University. She has presented papers in various conferences and published over 15 articles in the area of HRM. She completed her certification in HR Analytics from IIM Rohtak.</p>
          <p>Her vast experience in student management allows her to mentor and manage students. She has handled training of students and worked towards preparing them for industry readiness.</p>
        </div>
        
        <div style="margin-top:32px; background:var(--bg-soft); padding:24px; border-radius:var(--radius-md); border:1px solid var(--border);">
          <h4 style="margin-bottom:16px; font-weight:700; color:var(--navy);">Contact Details</h4>
          <a href="tel:+919248727214" style="display:block; margin-bottom:8px; color:var(--blue); text-decoration:none; font-weight:600;">&#128222; +91 9248727214</a>
          <a href="tel:+919704409222" style="display:block; margin-bottom:8px; color:var(--blue); text-decoration:none; font-weight:600;">&#128222; +91 9704409222</a>
          <a href="mailto:placements@cmrgroup.org" style="display:block; margin-bottom:8px; color:var(--blue); text-decoration:none; font-weight:600;">&#9993; placements@cmrgroup.org</a>
          <a href="mailto:cmrgitpo@gmail.com" style="display:block; color:var(--blue); text-decoration:none; font-weight:600;">&#9993; cmrgitpo@gmail.com</a>
        </div>
      </div>
      <div style="text-align:center;">
        <img src="assets/images/placements6.jpg" style="width:100%; max-width:400px; border-radius:var(--radius-lg); box-shadow:var(--shadow-md); border:1px solid var(--border);" onerror="this.src='assets/images/chairman.png'" alt="Dr. P. Hima Bindu">
      </div>
    </div>
  </div>
</section>
`;
t2 = t2.replace(/<section style=\"background:#fff;\">[\s\S]*?(?=<footer id=\"footer\")/, contacts_content);
fs.writeFileSync('placementcontacts.html', t2, 'utf8');

// 3. rankingsandhighlights.html
let t3 = text.replace(/Achievements \| CMR Group of Institutions – Hyderabad/g, 'Rankings and Highlights | CMR Group of Institutions')
             .replace(/Pride of CMR/g, 'Placement Excellence')
             .replace(/Our Achievements/g, 'Rankings & Highlights')
             .replace('Home</a><span>›</span><span style=\"color:#fff;\">Achievements</span>', 'Home</a><span>›</span><a href=\"placements.html\">Placements</a><span>›</span><span style=\"color:#fff;\">Rankings</span>');

const rankings_content = `
<section style="background:#fff; padding:60px 0;">
  <div class="container">
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:start;" class="fade-up">
      <div>
        <p class="section-label">A Legacy of Excellence</p>
        <h2 class="section-title">Our Distinctions & <br><span>Top Rankings</span></h2>
        <ul style="margin-top:24px; color:var(--text-muted); font-size:15px; line-height:1.8; list-style:none; padding-left:0;">
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--gold); border-radius:0 8px 8px 0; font-weight:600;">RANK BAND 201-250 IN NIRF INDIA RANKINGS FOR 2022 UNDER ENGINEERING CATEGORY</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--blue); border-radius:0 8px 8px 0; font-weight:600;">RANK 72ND IN NIRF INDIA RANKINGS FOR 2022 UNDER PHARMACY CATEGORY</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--gold); border-radius:0 8px 8px 0; font-weight:600;">RANKED UNDER “EXCELLENT BAND” IN ARIIA-2021 AND ACHIEVED ARIIA-2020 ALL INDIA 5TH RANK IN PRIVATE INSTITUTIONS CATEGORY.</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--blue); border-radius:0 8px 8px 0; font-weight:600;">‘AAAA’ IN THE SURVEY OF “CAREER 360 MAGAZINE 2022”</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--gold); border-radius:0 8px 8px 0; font-weight:600;">3RD AMONG OUTSTANDING ENGINEERING COLLEGES OF EXCELLENCE BY “CSR GHRDC SURVEY 2022”</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--blue); border-radius:0 8px 8px 0; font-weight:600;">62ND AMONG INDIA’S TOP 150 ENGINEERING COLLEGES IN 2022 BY “TIMES ENGINEERING 2022”</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--gold); border-radius:0 8px 8px 0; font-weight:600;">77TH AMONG TOP ENGINEERING COLLEGES IN INDIA BY “THE WEEK SURVEY 2021”</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--blue); border-radius:0 8px 8px 0; font-weight:600;">CENTRE OF EXCELLENCE AWARD FROM DIALOGUE INDIA EDITOR’S CHOICE EDUCATION</li>
        </ul>
      </div>
      <div>
        <ul style="color:var(--text-muted); font-size:15px; line-height:1.8; list-style:none; padding-left:0; margin-top:118px;">
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--gold); border-radius:0 8px 8px 0; font-weight:600;">101ST AMONG INDIA’S TOP 238 ENGINEERING COLLEGES</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--blue); border-radius:0 8px 8px 0; font-weight:600;">137TH AMONG INDIA’S TOP 150 ENGINEERING COLLEGES</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--gold); border-radius:0 8px 8px 0; font-weight:600;">PARTNERS IN GROWTH AWARD FROM ICT ACADEMY</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--blue); border-radius:0 8px 8px 0; font-weight:600;">CITD EDUCATION PROMOTION AND DEVELOPMENT AWARD FOR OUTSTANDING ACHIEVEMENT IN TECHNICAL EDUCATION</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--gold); border-radius:0 8px 8px 0; font-weight:600;">BEST COLLEGE IN PLACEMENTS AWARD FROM STUMAGZ</li>
          <li style="margin-bottom:12px; padding:16px; background:var(--bg-soft); border-left:4px solid var(--blue); border-radius:0 8px 8px 0; font-weight:600;">BEST INFRASTRUCTURE AWARD AND BEST SPORTS COLLEGE AWARD FROM STUMAGZ</li>
        </ul>
        <div style="margin-top:24px;">
          <img src="assets/images/placements7.jpg" style="width:100%; border-radius:var(--radius-lg); box-shadow:var(--shadow-md); border:1px solid var(--border);" onerror="this.src='assets/images/coe.jpg'" alt="Rankings and Highlights">
        </div>
      </div>
    </div>
  </div>
</section>
`;
t3 = t3.replace(/<section style=\"background:#fff;\">[\s\S]*?(?=<footer id=\"footer\")/, rankings_content);
fs.writeFileSync('rankingsandhighlights.html', t3, 'utf8');

console.log('Done creating contact and rankings pages');
