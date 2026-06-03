const fs = require('fs');

const targetFile = 'events.html';
console.log('Target file is:', targetFile);

let content = fs.readFileSync(targetFile, 'utf8');

const eventsList = [
    'venkatappa-hospital-visit',
    'gita-distribution',
    'gunavanthe',
    'sharadahole',
    'alvikodi',
    'bhatkal-kudure-birappa',
    'balkur-jatre',
    'manki-ganesh',
    'balkur-shrikanth',
    'bangaramakki',
    'allanki'
];

for (const event of eventsList) {
    const searchString = `<div onclick="openDetail('${event}')"`;
    const replaceString = `<a href="#${event}"`;
    content = content.replace(searchString, replaceString);
}


function customReplacer(match, p1, p2, p3, offset, string) {
    if (!string.substring(Math.max(0, offset - 100), offset).includes('class="relative group"')) return match;

    const baseSrc = p1.replace(/photo[0-9]\.(jpg|jpeg|png)$/, '');
    const extMatch = p1.match(/photo[0-9]\.(jpg|jpeg|png)$/);
    const ext = extMatch ? extMatch[1] : 'jpg';
    
    // Add multiple fallback images so it acts as a slider for every event
    let imagesHtml = '';
    if (p1.includes('photo')) {
        for(let i=1; i<=4; i++) {
           imagesHtml += `
                                    <img src="${baseSrc}photo${i}.${ext}" onerror="this.onerror=null; this.remove();" class="w-full h-96 flex-shrink-0 snap-center object-cover" alt="Event Photo ${i}">`;
        }
    } else {
        imagesHtml = `
                                    <img src="${p1}" class="w-full h-96 flex-shrink-0 snap-center object-cover" alt="${p3}">
                                    <img src="${p1.replace(/\.([^.]+)$/, '2.$1')}" onerror="this.onerror=null; this.remove();" class="w-full h-96 flex-shrink-0 snap-center object-cover" alt="${p3}">`;
    }

    const eventId = "car_" + Math.random().toString(36).substr(2, 6);
    return `
                                <div id="${eventId}" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
${imagesHtml}
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <button onclick="document.getElementById('${eventId}').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all pointer-events-auto">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <button onclick="document.getElementById('${eventId}').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all pointer-events-auto">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>`;
}

content = content.replace(/<img src="([^"]+)" class="([^"]*rounded-3xl[^"]*)" alt="([^"]+)">/g, customReplacer);

content = content.replace(/<i data-lucide="arrow-right" class="w-5 h-5"><\/i>\n                        <\/div>\n                    <\/div>\n                <\/div>/g, 
`<i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </div>
                    </div>
                </a>`);

fs.writeFileSync(targetFile, content);
console.log('Successfully updated!');
