const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\DELL\\Desktop\\Cmr gorup.edu.in';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const svgGeneric = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`;

const replacementRegexes = [
    { pattern: /<div class="company-icon">.*?<\/div>/g, repl: `<div class="company-icon">${svgGeneric}</div>` },
    { pattern: /<div class="activity-icon">.*?<\/div>/g, repl: `<div class="activity-icon" style="color:var(--orange)">${svgGeneric}</div>` },
    { pattern: /<span class="ci">.*?<\/span>/g, repl: `<span class="ci">${svgGeneric}</span>` },
    { pattern: /<div class="stat-icon">.*?<\/div>/g, repl: `<div class="stat-icon">${svgGeneric}</div>` },
    { pattern: /<div style="font-size:36px;margin-bottom:16px;">.*?<\/div>/g, repl: `<div style="font-size:36px;margin-bottom:16px;color:var(--orange)">${svgGeneric}</div>` },
    { pattern: /<div class="contact-icon">.*?<\/div>/g, repl: `<div class="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.97-1.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/></svg></div>` }
];

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let original = content;
    
    // Specifically target empty specific tags resulting from emoji stripping
    replacementRegexes.forEach(r => {
        content = content.replace(r.pattern, r.repl);
    });
    
    if (content !== original) {
        fs.writeFileSync(path.join(dir, file), content);
        console.log(`Fixed icons in ${file}`);
    }
});
