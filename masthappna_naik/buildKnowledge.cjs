const fs = require('fs');

const filesToRead = ['home.html', 'biodata.html', 'timeline.html', 'events.html', 'index.html'];

let allText = "Website Context regarding Mr. Masthappa Naik Balase:\n\n";

for (const file of filesToRead) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    // Basic extraction of English texts to save tokens
    // We can just keep the .en classes, or strip all tags.
    // Strip script and style first
    content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ');
    content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ');
    
    // Strip HTML tags
    let text = content.replace(/<[^>]+>/g, ' ');
    // Remove extra spaces
    text = text.replace(/\s+/g, ' ').trim();
    
    allText += `--- CONTENT FROM ${file} ---\n${text}\n\n`;
  }
}

fs.writeFileSync('website_knowledge.txt', allText);
console.log('Knowledge base built.');
