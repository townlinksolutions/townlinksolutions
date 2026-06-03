const fs = require('fs');

const eventsHtml = fs.readFileSync('events.html', 'utf8');
const detailsStart = eventsHtml.indexOf('const details = {');
const detailsEnd = eventsHtml.indexOf('};', detailsStart) + 2;

if (detailsStart === -1 || detailsEnd === -1) {
    console.error('Could not find details object');
    process.exit(1);
}

const detailsStr = eventsHtml.substring(detailsStart, detailsEnd).trim();
const detailsObjWithPotentiallyTrailingSemi = detailsStr.replace('const details = ', '');
const detailsObjStr = detailsObjWithPotentiallyTrailingSemi.endsWith(';') ? detailsObjWithPotentiallyTrailingSemi.slice(0, -1) : detailsObjWithPotentiallyTrailingSemi;
const details = eval('(' + detailsObjStr + ')');

console.log('=== Checking details keys ===');
for (const id in details) {
    const ev = details[id];
    console.log(`Key: ${id}`);
    if (!ev.en) {
        console.error(`  [ERROR] Missing 'en' for ${id}`);
    } else {
        console.log(`  en title: ${ev.en.title ? ev.en.title.substring(0, 40) : 'MISSING'}`);
    }
    if (!ev.kn) {
        console.error(`  [ERROR] Missing 'kn' for ${id}`);
    } else {
        console.log(`  kn title: ${ev.kn.title ? ev.kn.title.substring(0, 40) : 'MISSING'}`);
    }
}
