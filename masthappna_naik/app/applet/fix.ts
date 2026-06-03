import * as fs from 'fs';

let content = fs.readFileSync('events.html', 'utf8');

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

// Now we need to fix the closing div to an a tag
// Since we have nested divs, we can search for `<i data-lucide="arrow-right" class="w-5 h-5"></i>\n                        </div>\n                    </div>\n                </div>`
// and replace the LAST `</div>` with `</a>`
const tailSearch = `<i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </div>
                    </div>
                </div>`;
const tailReplace = `<i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </div>
                    </div>
                </a>`;

// Do a global replace for all instances in the grid
content = content.replaceAll(tailSearch, tailReplace);

// Also convert standard single-image events into sliders
const detailRegex = /<img src="([^"]+)" class="w-full rounded-3xl shadow-2xl"/g;

let match;
while ((match = detailRegex.exec(content)) !== null) {
  const imgSrc = match[1];
  const fullMatch = match[0];
  
  // Create a slider with just this image (so it has the slider format the user wants)
  const sliderHTML = `
                                <div id="carousel-${Math.random().toString(36).substring(7)}" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="${imgSrc}" class="w-full flex-shrink-0 snap-center object-cover" alt="Event Photo">
                                </div>
                                <!-- NOTE: Navigation buttons hidden since there relies on 1 image for now. The structure is here -->`;
  
  // We won't blindly replace all because some already have sliders.
  // Wait, the regex matches `w-full rounded-3xl shadow-2xl` which is exactly the single image format.
  // Actually, wait, replacing single image with a slider may not be requested correctly if they want multiple images.
  // Let's just do it manually for safety.
}

fs.writeFileSync('events.html', content);
console.log('Fixed events.html');
