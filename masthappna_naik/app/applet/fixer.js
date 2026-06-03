const fs = require('fs');

let html = fs.readFileSync('events.html', 'utf-8');

html = html.replace(/<div onclick="openDetail\('venkatappa-hospital-visit'\)"([^>]+)>/g, '<a href="#venkatappa-hospital-visit"$1>');
html = html.replace(/<div onclick="openDetail\('gita-distribution'\)"([^>]+)>/g, '<a href="#gita-distribution"$1>');
html = html.replace(/<div onclick="openDetail\('gunavanthe'\)"([^>]+)>/g, '<a href="#gunavanthe"$1>');
html = html.replace(/<div onclick="openDetail\('sharadahole'\)"([^>]+)>/g, '<a href="#sharadahole"$1>');
html = html.replace(/<div onclick="openDetail\('alvikodi'\)"([^>]+)>/g, '<a href="#alvikodi"$1>');
html = html.replace(/<div onclick="openDetail\('bhatkal-kudure-birappa'\)"([^>]+)>/g, '<a href="#bhatkal-kudure-birappa"$1>');
html = html.replace(/<div onclick="openDetail\('balkur-jatre'\)"([^>]+)>/g, '<a href="#balkur-jatre"$1>');
html = html.replace(/<div onclick="openDetail\('manki-ganesh'\)"([^>]+)>/g, '<a href="#manki-ganesh"$1>');
html = html.replace(/<div onclick="openDetail\('balkur-shrikanth'\)"([^>]+)>/g, '<a href="#balkur-shrikanth"$1>');
html = html.replace(/<div onclick="openDetail\('bangaramakki'\)"([^>]+)>/g, '<a href="#bangaramakki"$1>');
html = html.replace(/<div onclick="openDetail\('allanki'\)"([^>]+)>/g, '<a href="#allanki"$1>');

// Replace the closing </div> of these specific items with </a>. 
// A fast way to do this is to replace the specific end structure since we know each block ends with 
// </div>\n                </div>\n\n                <!-- Event
// Actually, using specific regex to match the end of each card is safer.
// Since we changed the opening tag to <a>, we can find the matching closing tag.
// But wait, it's easier to just do it via string replacement of the specific chunks.

fs.writeFileSync('events2.html', html);
