const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\DELL\\Desktop\\Cmr gorup.edu.in';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html' && f !== 'management.html');

const indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

// Isolate the blocks we want to propagate across all inner pages.
// We remove 'active' from home link so the generic header is unselected.
let newHeader = indexHtml.match(/<header id="header" role="banner">[\s\S]*?<\/header>/)[0];
newHeader = newHeader.replace('class="nav-link active"', 'class="nav-link"');

const newMobileMenu = indexHtml.match(/<nav class="mobile-menu"[^>]*>[\s\S]*?<\/nav>/)[0];
const newFooter = indexHtml.match(/<footer id="footer"[^>]*>[\s\S]*?<\/footer>/)[0];

// Regex for emojis (specifically stripping out presentation forms)
const emojiRegex = /[\u{1F300}-\u{1F5FF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{3030}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{3297}\u{3299}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F3}\u{24C2}\u{23E9}-\u{23EF}\u{25B6}\u{23F8}-\u{23FA}]/gu;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    if (content.match(/<header id="header"/)) {
       content = content.replace(/<header id="header"[^>]*>[\s\S]*?<\/header>/, newHeader);
    }
    
    if (content.match(/<nav class="mobile-menu"/)) {
       content = content.replace(/<nav class="mobile-menu"[^>]*>[\s\S]*?<\/nav>/, newMobileMenu);
    }
    
    if (content.match(/<footer id="footer"/)) {
       content = content.replace(/<footer id="footer"[^>]*>[\s\S]*?<\/footer>/, newFooter);
    }
    
    // Completely remove all emojis from the file
    content = content.replace(emojiRegex, '');
    
    // Ensure favicon is present
    if (!content.includes('favicon.ico')) {
        content = content.replace('</title>', '</title>\n  <link rel="icon" href="assets/images/favicon.ico" />');
    }
    
    fs.writeFileSync(path.join(dir, file), content);
    console.log(`Updated ${file}`);
});
