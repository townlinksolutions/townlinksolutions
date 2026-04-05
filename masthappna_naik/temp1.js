
        lucide.createIcons();

        let currentLang = 'kn';

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'kn' : 'en';
            document.documentElement.setAttribute('lang', currentLang);
            lucide.createIcons();
        }

        function toggleMobileMenu(open) {
            const menu = document.getElementById('mobile-menu');
            if (open) {
                menu.classList.remove('translate-x-full');
            } else {
                menu.classList.add('translate-x-full');
            }
        }

        function openJoinModal(movementName) {
            const modal = document.getElementById('join-modal');
            const nameEl = document.getElementById('modal-movement-name');
            nameEl.textContent = movementName;
            modal.classList.remove('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'hidden';
            lucide.createIcons();
        }

        function closeJoinModal() {
            const modal = document.getElementById('join-modal');
            modal.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'auto';
            // Reset form
            setTimeout(() => {
                document.getElementById('modal-form').classList.remove('hidden');
                document.getElementById('modal-success').classList.add('hidden');
            }, 500);
        }

        async function handleJoinSubmit(e) {
            e.preventDefault();
            const form = e.target;
            const movement = document.getElementById('modal-movement-name').textContent;
            
            const formData = new FormData(form);
            const name = formData.get('name');
            const age = formData.get('age');
            const place = formData.get('place');
            const gender = formData.get('gender');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const reason = formData.get('reason');

            try {
                await fetch('/api/campaign', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, age, place, gender, phone, email, reason, category: movement })
                });
            } catch (error) {
                console.error('Failed to log join movement to sheets:', error);
            }

            document.getElementById('modal-form').classList.add('hidden');
            document.getElementById('modal-success').classList.remove('hidden');
            lucide.createIcons();
        }

        const details = {
            'hindu-samavesha': {
                en: {
                    title: 'Hindu Samavesha Bhatkal',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-hindu" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/hindu1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Hindu Samavesha 1">
                                    <img src="https://picsum.photos/seed/hindu2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Hindu Samavesha 2">
                                    <img src="https://picsum.photos/seed/hindu3/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Hindu Samavesha 3">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-hindu').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-hindu').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Unity and Cultural Pride</p>
                                <p>On 9th March, Mastappa Naik Balase was invited as the chief guest for the Hindu Samavesha held in Bhatkal. The event saw a massive gathering of people from all walks of life, coming together to celebrate their shared heritage and values.</p>
                                <p>In his address, Mastappa Naik Balase emphasized the importance of community harmony and the role of youth in preserving our cultural identity while striving for modern development.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಹಿಂದೂ ಸಮಾವೇಶ ಭಟ್ಕಳ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-hindu-kn" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/hindu1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Hindu Samavesha 1">
                                    <img src="https://picsum.photos/seed/hindu2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Hindu Samavesha 2">
                                    <img src="https://picsum.photos/seed/hindu3/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Hindu Samavesha 3">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-hindu-kn').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-hindu-kn').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಏಕತೆ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಹೆಮ್ಮೆ</p>
                                <p>ಮಾರ್ಚ್ 9 ರಂದು ಭಟ್ಕಳದಲ್ಲಿ ನಡೆದ ಹಿಂದೂ ಸಮಾವೇಶಕ್ಕೆ ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲಸೆ ಅವರನ್ನು ಮುಖ್ಯ ಅತಿಥಿಯಾಗಿ ಆಹ್ವಾನಿಸಲಾಗಿತ್ತು. ಈ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಎಲ್ಲಾ ವರ್ಗದ ಜನರು ಹೆಚ್ಚಿನ ಸಂಖ್ಯೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ, ತಮ್ಮ ಹಂಚಿಕೆಯ ಪರಂಪರೆ ಮತ್ತು ಮೌಲ್ಯಗಳನ್ನು ಆಚರಿಸಿದರು.</p>
                                <p>ತಮ್ಮ ಭಾಷಣದಲ್ಲಿ, ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲಸೆ ಅವರು ಸಮುದಾಯದ ಸಾಮರಸ್ಯದ ಮಹತ್ವ ಮತ್ತು ಆಧುನಿಕ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಶ್ರಮಿಸುವಾಗ ನಮ್ಮ ಸಾಂಸ್ಕೃತಿಕ ಗುರುತನ್ನು ಉಳಿಸುವಲ್ಲಿ ಯುವಕರ ಪಾತ್ರವನ್ನು ಒತ್ತಿಹೇಳಿದರು.</p>                            </div>
                        </div>
                    `
                }
            },
            'school-visit': {
                en: {
                    title: 'Puneeth Rajkumar Birthday Celebration',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-school" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/school1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="School Visit 1">
                                    <img src="https://picsum.photos/seed/school2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="School Visit 2">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-school').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-school').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Inspiring Young Minds</p>
                                <p>To mark the birthday of the legendary Puneeth Rajkumar, Mastappa Naik Balase visited several local schools. He shared stories of the actor's humility and social work, encouraging students to follow in his footsteps.</p>
                                <p>During the visit, he distributed educational materials and interacted with students about their dreams and aspirations for the future of Uttara Kannada.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಪುನೀತ್ ರಾಜ್‌ಕುಮಾರ್ ಜನ್ಮದಿನಾಚರಣೆ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-school-kn" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/school1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="School Visit 1">
                                    <img src="https://picsum.photos/seed/school2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="School Visit 2">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-school-kn').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-school-kn').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಯುವ ಮನಸ್ಸುಗಳಿಗೆ ಸ್ಫೂರ್ತಿ</p>
                                <p>ಲೆಜೆಂಡರಿ ಪುನೀತ್ ರಾಜ್‌ಕುಮಾರ್ ಅವರ ಜನ್ಮದಿನದ ಅಂಗವಾಗಿ ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲಸೆ ಅವರು ಹಲವಾರು ಸ್ಥಳೀಯ ಶಾಲೆಗಳಿಗೆ ಭೇಟಿ ನೀಡಿದರು. ಅವರು ನಟನ ನಮ್ರತೆ ಮತ್ತು ಸಮಾಜ ಸೇವೆಯ ಕಥೆಗಳನ್ನು ಹಂಚಿಕೊಂಡರು, ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಅವರ ಹಾದಿಯಲ್ಲಿ ನಡೆಯಲು ಪ್ರೋತ್ಸಾಹಿಸಿದರು.</p>                                <p>ಭೇಟಿಯ ಸಮಯದಲ್ಲಿ, ಅವರು ಶೈಕ್ಷಣಿಕ ಸಾಮಗ್ರಿಗಳನ್ನು ವಿತರಿಸಿದರು ಮತ್ತು ಉತ್ತರ ಕನ್ನಡದ ಭವಿಷ್ಯಕ್ಕಾಗಿ ವಿದ್ಯಾರ್ಥಿಗಳ ಕನಸುಗಳು ಮತ್ತು ಆಕಾಂಕ್ಷೆಗಳ ಬಗ್ಗೆ ಸಂವಾದ ನಡೆಸಿದರು.</p>
                            </div>
                        </div>
                    `
                }
            },
            'alvikodi': {
                en: {
                    title: 'Shri Hariseve Program, Alvekodi',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/alvikodi/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Shri Hariseve Program">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Spiritual Celebration at Alvekodi</p>
                                <p>The Shri Hariseve program in Alvekodi, Bhatkal, was a deeply spiritual event filled with devotion and tradition. It was a celebration that brought the community together in prayer and reflection.</p>
                                <p>Mastappa Naik Balase was honored at the event for his selfless service to society. In his address, he expressed his gratitude and reaffirmed his commitment to serving both the divine and the community.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಶ್ರೀ ಹರಿಸೇವೆ ಕಾರ್ಯಕ್ರಮ, ಅಳ್ವೆಕೊಡಿ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/alvikodi/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Shri Hariseve Program">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಅಳ್ವೆಕೊಡಿಯಲ್ಲಿ ಆಧ್ಯಾತ್ಮಿಕ ಸಂಭ್ರಮ</p>
                                <p>ಭಟ್ಕಳ ತಾಲೂಕಿನ ಅಳ್ವೆಕೊಡಿಯಲ್ಲಿ ಭಕ್ತಿ, ಶ್ರದ್ಧೆ ಮತ್ತು ಸಂಪ್ರದಾಯಗಳಿಂದ ತುಂಬಿಕೊಂಡು ಜರುಗಿದ ಶ್ರೀ ಹರಿಸೇವೆ ಕಾರ್ಯಕ್ರಮವು ಭಕ್ತರ ಮನಸ್ಸನ್ನು ಭಕ್ತಿ ಸಾಗರದಲ್ಲಿ ತೇಲಿಸಿತು.</p>
                                <p>ಸಮಾಜ ಸೇವಕರಾದ ಶ್ರೀಯುತ ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲ್ಸೇ ಅವರಿಗೆ ಈ ಪುಣ್ಯ ಕಾರ್ಯದಲ್ಲಿ ಗೌರವಿಸಲಾಯಿತು. ಅವರು ತಮ್ಮ ಸಮಾಜ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸುವುದಾಗಿ ಭರವಸೆ ನೀಡಿದರು.</p>
                            </div>
                        </div>
                    `
                }
            },
            'bhatkal-kudure-birappa': {
                en: {
                    title: '42nd Vardhanti Mahotsava, Bhatkal',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/bhatkal_kudure_birappa/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="42nd Vardhanti Mahotsava">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">42nd Vardhanti Mahotsava</p>
                                <p>The 42nd Vardhanti Mahotsava of Shri Kudurebirappa and Shri Mukhyaprana Hanumanta Temple in Sankadahole, Chautani, Bhatkal, was a grand cultural and spiritual celebration.</p>
                                <p>Mastappa Naik Balase was honored by the temple management committee for his dedication to social service and support for religious activities.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: '42ನೇ ವರ್ಷದ ವರ್ಧಂತಿ ಮಹೋತ್ಸವ, ಭಟ್ಕಳ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/bhatkal_kudure_birappa/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="42nd Vardhanti Mahotsava">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">42ನೇ ವರ್ಷದ ವರ್ಧಂತಿ ಮಹೋತ್ಸವ</p>
                                <p>ಶ್ರೀ ಕುದುರೆಬೀರಪ್ಪ ಹಾಗೂ ಶ್ರೀ ಮುಖ್ಯಪ್ರಾಣ ಹನುಮಂತ ದೇವಸ್ಥಾನ, ಸಂಕದಹೊಳೆ – ಚೌತನಿ ಭಟ್ಕಳದಲ್ಲಿ ನಡೆದ 42ನೇ ವರ್ಷದ ವರ್ಧಂತಿ ಮಹೋತ್ಸವವು ಭಕ್ತಿಭಾವದ ಮಹಾಸಾಗರವಾಗಿತ್ತು.</p>
                                <p>ಈ ಶುಭ ಸಂಧರ್ಭದಲ್ಲಿ ಸಮಾಜ ಸೇವಕರಾದ ಶ್ರೀ ಯುತ ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲ್ಸೇ ಅವರನ್ನು ದೇವಸ್ಥಾನದ ಆಡಳಿತ ಮಂಡಳಿ ಆತ್ಮೀಯವಾಗಿ ಆಮಂತ್ರಿಸಿ ಗೌರವ ಪೂರ್ವಕವಾಗಿ ಸನ್ಮಾನಿಸಿದರು.</p>
                            </div>
                        </div>
                    `
                }
            },
            'balkur-jatre': {
                en: {
                    title: 'Balkur Jatre Drama Support',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/balkur_jatre/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Balkur Jatre Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Supporting Local Drama</p>
                                <p>During the Balkur Jatre, young leader and social worker from Honnavar-Bhatkal, <strong>Shri Masthappa Naik Balse</strong>, supported the drama organized by Mahavishnu and Durgamba Friends Club, Balkur, directed by N.H. Ambiga.</p>
                                <p>He extended his best wishes and provided support through his fans to the local artists.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಬಳಕೂರು ಜಾತ್ರೆ ನಾಟಕಕ್ಕೆ ಬೆಂಬಲ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/balkur_jatre/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Balkur Jatre Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಸ್ಥಳೀಯ ನಾಟಕಕ್ಕೆ ಬೆಂಬಲ</p>
                                <p>ಹೊನ್ನಾವರ ತಾಲೂಕಿನ ಬಳಕೂರು ಜಾತ್ರೆ ದಿನ ಮಹಾವಿಷ್ಣು ಹಾಗೂ ದುರ್ಗಾಂಬ ಗೆಳೆಯರ ಬಳಗ ಬಳಕೂರು ಇವರಿಂದ ಬಳಕೂರಿನ ಎನ್ ಹೆಚ್ ಅಂಬಿಗ ಇವರ ನಿರ್ದೇಶನದಲ್ಲಿ ನಡೆಯುವ ನಾಟಕಕ್ಕೆ ಉದ್ದಿಮೆದಾರರು, ಸಮಾಜದ ಸೇವಕರು ಹೊನ್ನಾವರ ಭಟ್ಕಳ ಕ್ಷೇತ್ರದ ಯುವ ನಾಯಕರು <strong>ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲಸೆರವರು</strong> ತಮ್ಮ ಅಭಿಮಾನಿಗಳ ಮುಖಾಂತರ ದೇಣಿಗೆ ನೀಡಿ ಶುಭಹಾರಹಿಸಲಾಯಿತು.</p>
                            </div>
                        </div>
                    `
                }
            },
            'manki-ganesh': {
                en: {
                    title: 'Honoring Young Poet Ganesh Vasu Naik',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/manki_ganesh/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Ganesh Naik Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Encouraging Young Talent</p>
                                <p>Young entrepreneur and leader <strong>Shri Masthappa Naik Balse</strong> visited the home of Ganesh Vasu Naik in Manki, Honnavar. Ganesh, a young student, has shown remarkable talent in writing poetry and recently published his first book, "Bhava Butti," in Bangalore.</p>
                                <p>Shri Masthappa Naik honored him and wished him continued success in his literary journey.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಕವಿ ಗಣೇಶ್ ವಾಸು ನಾಯ್ಕ ಅವರಿಗೆ ಸನ್ಮಾನ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/manki_ganesh/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Ganesh Naik Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಯುವ ಪ್ರತಿಭೆಗೆ ಪ್ರೋತ್ಸಾಹ</p>
                                <p>ಯಂಗ್ ಒನ್ ಇಂಡಿಯಾ ಕಂಪನಿಯ ಮಾಲೀಕರು, ಉದ್ಯಮಿಗಳು, ಭಟ್ಕಳ ಹೊನ್ನಾವರ ಕ್ಷೇತ್ರದ ಯುವನಾಯಕರು <strong>ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲಸೆಯವರು</strong> ಅತಿ ಚಿಕ್ಕ ವಯಸ್ಸಿನಲ್ಲಿ ತನ್ನದೇ ಆದ ಬರವಣಿಗೆ ಶೈಲಿಯ ಮೂಲಕವಾಗಿ ಕವನಗಳನ್ನು ಬರೆಯುತ್ತಾ ಕಾಲೇಜಿನಲ್ಲಿ ದ್ವಿತೀಯ ಪಿಯುಸಿ ಅಧ್ಯಯನ ಮಾಡುತ್ತಾ ತನ್ನ ಮೊದಲನೇ ಭಾವದ ಬುತ್ತಿ ಕೃತಿಯನ್ನು ಅಕ್ಷರನಾದ ಪ್ರಕಾಶ ಮೂಲಕ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಲೋಕಾರ್ಪಣೆಗೊಳಿಸಿದ ಹೊನ್ನಾವರ ತಾಲೂಕಿನ ಮಂಕಿಯ ಚಿತ್ತಾರ ಗ್ರಾಮದ ಹಡಿಕಲ್ಲಿನ ಗಣೇಶ ವಾಸು ನಾಯ್ಕ ರವರ ಮನೆಗೆ ತಮ್ಮ ಅಭಿಮಾನಿಗಳ ಜೊತೆ ತೆರಳಿ ಗಣೇಶ ನಾಯ್ಕರಿಗೆ ಸನ್ಮಾನಿಸಿ ಶುಭ ಹಾರೈಹಿಸಲಾಯಿತು.</p>
                            </div>
                        </div>
                    `
                }
            },
            'balkur-shrikanth': {
                en: {
                    title: 'Housewarming Ceremony at Balkur',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/balkur_shrikanth/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Shrikanth Naik Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Housewarming Celebration</p>
                                <p>Young leader <strong>Shri Masthappa Naik Balse</strong> attended the housewarming ceremony of Shri Shrikanth Naik in Balkur, Honnavar, and extended his best wishes.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಬಳಕೂರಿನಲ್ಲಿ ಗೃಹಪ್ರವೇಶ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/balkur_shrikanth/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Shrikanth Naik Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಗೃಹಪ್ರವೇಶ ಸಮಾರಂಭ</p>
                                <p>ಉದ್ದಿಮೆದಾರರು, ಸಮಾಜದ ಸೇವಕರು ಹೊನ್ನಾವರ ಭಟ್ಕಳ ಕ್ಷೇತ್ರದ ಯುವ ನಾಯಕರು <strong>ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲಸೆರವರು</strong> ಹೊನ್ನಾವರ ತಾಲೂಕಿನ ಬಳಕೂರು ಗ್ರಾಮದ ಮಣ್ಣಿಗೆಯ ಕಲಾಭಿಮಾನಿ ಶ್ರೀಕಾಂತ ನಾಯ್ಕ ಅವರ ಮನೆಯ ಗೃಹಪ್ರವೇಶಕ್ಕೆ ಹೋಗಿ ಅವರ ಅತಿತ್ಯ ಸ್ವೀಕರಿಸಿ ಶುಭಹಾರಹಿಸಲಾಯಿತು.</p>
                            </div>
                        </div>
                    `
                }
            },
            'bangaramakki': {
                en: {
                    title: 'Western Ghats Conservation Rally, Bangaramakki',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/bangaramakki/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Bangaramakki Event 1">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/bangaramakki/photo2.jpeg" class="w-full rounded-3xl shadow-2xl mt-4" alt="Bangaramakki Event 2">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Western Ghats Conservation Rally</p>
                                <p>A grand rally for the conservation of the Western Ghats was held on 29-03-2026 under the leadership of Shri Maruti Guruji of Shri Kshetra Bangaramakki. The "Sahyadri Knowledge and Conservation Conference" and "Samskriti Kumbha - Malenadu Utsava 2026" were successful in raising awareness about the importance of the Sahyadri range.</p>
                                <p>Social worker <strong>Shri Masthappa Naik Balse</strong> was honored for his immense support, social commitment, and concern for the environment, which were key to the success of this rally.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಪಶ್ಚಿಮ ಘಟ್ಟ ಸಂರಕ್ಷಣಾ ಸಮಾವೇಶ, ಬಂಗಾರಮಕ್ಕಿ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/bangaramakki/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Bangaramakki Event 1">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/bangaramakki/photo2.jpeg" class="w-full rounded-3xl shadow-2xl mt-4" alt="Bangaramakki Event 2">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಪಶ್ಚಿಮ ಘಟ್ಟ ಸಂರಕ್ಷಣಾ ಸಮಾವೇಶ</p>
                                <p>ಶ್ರೀ ಕ್ಷೇತ್ರ ಬಂಗಾರಮಕ್ಕಿ ಸಂಸ್ಥಾನದ ಪೂಜ್ಯ ಶ್ರೀ ಮಾರುತಿ ಗುರೂಜಿ ಅವರ ನೇತೃತ್ವದಲ್ಲಿ 29-03-2026 ರಂದು ಪಶ್ಚಿಮ ಘಟ್ಟದ ಸಂರಕ್ಷಣೆಗಾಗಿ ಭವ್ಯ ಜನಾಂದೋಲನ ನಡೆಯಿತು. “ಸಹ್ಯಾದ್ರಿ ಜ್ಞಾನ ಹಾಗೂ ಸಂರಕ್ಷಣಾ ಸಮಾವೇಶ” ಮತ್ತು “ಸಂಸ್ಕೃತಿ ಕುಂಭ - ಮಲೆನಾಡ ಉತ್ಸವ 2026” ಕಾರ್ಯಕ್ರಮಗಳು ಸಹ್ಯಾದ್ರಿಯ ಮಹತ್ವವನ್ನು ಅರಿವು ಮೂಡಿಸಿ, ಭಕ್ತಿ ಮತ್ತು ಜಾಗೃತಿಯ ಸಮನ್ವಯವಾಗಿ ಯಶಸ್ವಿಯಾಗಿ ನೆರವೇರಿದವು.</p>
                                <p>ಈ ಜನಾಂದೋಲನಕ್ಕೆ ಸಮಾಜ ಸೇವಕರಾದ <strong>ಶ್ರೀ ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲ್ಸೇ</strong> ಅವರ ಅಪಾರ ಬೆಂಬಲ, ಸಾಮಾಜಿಕ ಬದ್ಧತೆ ಮತ್ತು ಪರಿಸರದ ಕಾಳಜಿಯು ಈ ಜನಾಂದೋಲನದ ಯಶಸ್ಸಿಗೆ ಪ್ರಮುಖ ಕಾರಣವಾಯಿತು. ಅವರ ಈ ಅಪಾರವಾದ ಸಹಕಾರವನ್ನು ಮನಗಂಡು, ಗೌರವಪೂರ್ವಕವಾಗಿ ಅವರನ್ನು ಆಹ್ವಾನಿಸಿ, ಸನ್ಮಾನಿಸಲಾಯಿತು.</p>
                            </div>
                        </div>
                    `
                }
            },
            'allanki': {
                en: {
                    title: 'Visiting Accident Victims at Manipal Hospital',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/bangaramakki/allanki.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Allanki Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Providing Solace to Accident Victims</p>
                                <p>Upon learning about a tragic bus accident in Allanki village, Honnavar, social worker <strong>Shri Masthappa Naik Balse</strong> immediately visited Manipal Hospital to meet the injured, including a one-year-old child named Bhumi, and their family.</p>
                                <p>He inquired about their health, offered comfort, and prayed for their speedy recovery.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಅಳ್ಳಂಕಿ ಬಸ್ ಅಪಘಾತದ ಸಂತ್ರಸ್ತರಿಗೆ ಸಾಂತ್ವನ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/bangaramakki/allanki.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Allanki Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಸಂತ್ರಸ್ತರಿಗೆ ಸಾಂತ್ವನ</p>
                                <p>ಹೊನ್ನಾವರ ತಾಲೂಕಿನ ಅಳ್ಳಂಕಿ ಗ್ರಾಮದಲ್ಲಿ ನಡೆದ ಭೀಕರ ಬಸ್ ಅಪಘಾತದಲ್ಲಿ ತೀವ್ರವಾಗಿ ಗಾಯಗೊಂಡ ‘‘ಒಂದು ವರ್ಷದ ಮಗು ಭೂಮಿ’’ ಹಾಗೂ ಅವರ ಕುಟುಂಬದವರನ್ನು ಸಮಾಜ ಸೇವಕರಾದ <strong>ಶ್ರೀಯುತ ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲ್ಸೇ</strong> ಅವರು ಮಣಿಪಾಲ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ ಸಾಂತ್ವನ ನೀಡಿದರು.</p>
                                <p>ಅಪಘಾತದ ಸುದ್ದಿ ತಿಳಿದ ತಕ್ಷಣವೇ ಅವರು ಆಸ್ಪತ್ರೆಗೆ ತೆರಳಿ ಗಾಯಗೊಂಡಿರುವ ಭೂಮಿ ಮತ್ತು ಅವರ ಕುಟುಂಬದವರ ಆರೋಗ್ಯ ವಿಚಾರಿಸಿ ಧೈರ್ಯ ತುಂಬಿದರು. ಈ ದುರ್ಘಟನೆಯಿಂದ ಕುಟುಂಬಕ್ಕೆ ಉಂಟಾದ ನೋವಿನಲ್ಲಿ ಭಾಗಿಯಾಗುತ್ತಾ, ಶೀಘ್ರ ಗುಣಮುಖರಾಗಲೆಂದು ಹಾರೈಸಿದರು.</p>
                            </div>
                        </div>
                    `
                }
            },
            'dance-kolata': {
                en: {
                    title: 'Support for Dance Kolata',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-dance" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/dance1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Dance Kolata 1">
                                    <img src="https://picsum.photos/seed/dance2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Dance Kolata 2">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-dance').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-dance').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Preserving Folk Traditions</p>
                                <p>Masthappa Naik Balse recently visited and supported several Dance Kolata events in the region. Kolata is a traditional folk dance that holds deep cultural significance in our coastal communities.</p>
                                <p>He provided financial assistance to local teams and promised to work towards creating more platforms for folk artists to showcase their talent and keep these traditions alive for future generations.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಡ್ಯಾನ್ಸ್ ಕೋಲಾಟಕ್ಕೆ ಬೆಂಬಲ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-dance-kn" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/dance1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Dance Kolata 1">
                                    <img src="https://picsum.photos/seed/dance2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Dance Kolata 2">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-dance-kn').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-dance-kn').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಜಾನಪದ ಸಂಪ್ರದಾಯಗಳ ಸಂರಕ್ಷಣೆ</p>
                                <p>ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲಸೆ ಅವರು ಇತ್ತೀಚೆಗೆ ಈ ಭಾಗದ ಹಲವಾರು ಡ್ಯಾನ್ಸ್ ಕೋಲಾಟ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ ಬೆಂಬಲ ನೀಡಿದರು. ಕೋಲಾಟವು ಒಂದು ಸಾಂಪ್ರದಾಯಿಕ ಜಾನಪದ ನೃತ್ಯವಾಗಿದ್ದು, ಇದು ನಮ್ಮ ಕರಾವಳಿ ಸಮುದಾಯಗಳಲ್ಲಿ ಆಳವಾದ ಸಾಂಸ್ಕೃತಿಕ ಮಹತ್ವವನ್ನು ಹೊಂದಿದೆ.</p>                                <p>ಅವರು ಸ್ಥಳೀಯ ತಂಡಗಳಿಗೆ ಆರ್ಥಿಕ ನೆರವು ನೀಡಿದರು ಮತ್ತು ಜಾನಪದ ಕಲಾವಿದರು ತಮ್ಮ ಪ್ರತಿಭೆಯನ್ನು ಪ್ರದರ್ಶಿಸಲು ಮತ್ತು ಈ ಸಂಪ್ರದಾಯಗಳನ್ನು ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ಜೀವಂತವಾಗಿರಿಸಲು ಹೆಚ್ಚಿನ ವೇದಿಕೆಗಳನ್ನು ನಿರ್ಮಿಸಲು ಕೆಲಸ ಮಾಡುವುದಾಗಿ ಭರವಸೆ ನೀಡಿದರು.</p>
                            </div>
                        </div>
                    `
                }
            },
            'postcard': {
                en: {
                    title: 'Postcard Campaign',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-postcard" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/post1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Postcard 1">
                                    <img src="https://picsum.photos/seed/post2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Postcard 2">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-postcard').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-postcard').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p>Thousands of postcards were sent to the government highlighting the urgent need for a multi-specialty hospital in Uttara Kannada.</p>
                                <button onclick="openJoinModal('Postcard Campaign')" class="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-orange-700 transition-all mt-8">JOIN THIS MOVEMENT</button>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಪೋಸ್ಟ್‌ಕಾರ್ಡ್ ಅಭಿಯಾನ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-postcard-kn" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/post1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Postcard 1">
                                    <img src="https://picsum.photos/seed/post2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Postcard 2">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-postcard-kn').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-postcard-kn').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p>ಉತ್ತರ ಕನ್ನಡದಲ್ಲಿ ಮಲ್ಟಿ-ಸ್ಪೆಷಾಲಿಟಿ ಆಸ್ಪತ್ರೆಯ ತುರ್ತು ಅಗತ್ಯವನ್ನು ಎತ್ತಿ ತೋರಿಸುವ ಸಾವಿರಾರು ಪೋಸ್ಟ್‌ಕಾರ್ಡ್‌ಗಳನ್ನು ಸರ್ಕಾರಕ್ಕೆ ಕಳುಹಿಸಲಾಗಿದೆ.</p>
                                <button onclick="openJoinModal('ಪೋಸ್ಟ್‌ಕಾರ್ಡ್ ಅಭಿಯಾನ')" class="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-orange-700 transition-all mt-8">ಈ ಚಳುವಳಿಗೆ ಸೇರಿ</button>
                            </div>
                        </div>
                    `
                }
            },
            'youth': {
                en: {
                    title: 'Youth Empowerment Summit',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-youth" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/youth1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Youth 1">
                                    <img src="https://picsum.photos/seed/youth2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Youth 2">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-youth').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-youth').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p>A summit dedicated to providing career guidance and leadership training to the youth of Uttara Kannada.</p>
                                <button onclick="openJoinModal('Youth Empowerment')" class="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-orange-700 transition-all mt-8">JOIN THIS MOVEMENT</button>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಯುವ ಸಬಲೀಕರಣ ಶೃಂಗಸಭೆ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-youth-kn" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/youth1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Youth 1">
                                    <img src="https://picsum.photos/seed/youth2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Youth 2">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-youth-kn').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-youth-kn').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p>ಉತ್ತರ ಕನ್ನಡದ ಯುವಕರಿಗೆ ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ನಾಯಕತ್ವ ತರಬೇತಿಯನ್ನು ನೀಡಲು ಮೀಸಲಾದ ಶೃಂಗಸಭೆ.</p>
                                <button onclick="openJoinModal('ಯುವ ಸಬಲೀಕರಣ')" class="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-orange-700 transition-all mt-8">ಈ ಚಳುವಳಿಗೆ ಸೇರಿ</button>
                            </div>
                        </div>
                    `
                }
            },
            'timeline': {
                en: {
                    title: 'Development Timeline',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-timeline" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/time1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Timeline 1">
                                    <img src="https://picsum.photos/seed/time2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Timeline 2">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-timeline').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-timeline').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p>A comprehensive roadmap for the infrastructure and social development of our district over the next decade.</p>
                                <button onclick="openJoinModal('Development Roadmap')" class="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-orange-700 transition-all mt-8">JOIN THIS MOVEMENT</button>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಅಭಿವೃದ್ಧಿ ಟೈಮ್‌ಲೈನ್',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <div id="carousel-timeline-kn" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-3xl shadow-2xl bg-slate-100 aspect-video">
                                    <img src="https://picsum.photos/seed/time1/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Timeline 1">
                                    <img src="https://picsum.photos/seed/time2/1200/600" class="w-full flex-shrink-0 snap-center object-cover" alt="Timeline 2">
                                </div>
                                <div class="absolute inset-y-0 left-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-timeline-kn').scrollBy({left: -800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                </div>
                                <div class="absolute inset-y-0 right-4 flex items-center">
                                    <button onclick="document.getElementById('carousel-timeline-kn').scrollBy({left: 800, behavior: 'smooth'})" class="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p>ಮುಂದಿನ ದಶಕದಲ್ಲಿ ನಮ್ಮ ಜಿಲ್ಲೆಯ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಸಾಮಾಜಿಕ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಸಮಗ್ರ ಮಾರ್ಗಸೂಚಿ.</p>
                                <button onclick="openJoinModal('ಅಭಿವೃದ್ಧಿ ಮಾರ್ಗಸೂಚಿ')" class="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-orange-700 transition-all mt-8">ಈ ಚಳುವಳಿಗೆ ಸೇರಿ</button>
                            </div>
                        </div>
                    `
                }
            },
            'gunavanthe': {
                en: {
                    title: 'Shri Shambulingeshwara Temple, Gunavante',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/gunavanthe/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Gunavanthe Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Religious Rituals & Celebrations (April 10–18)</p>
                                <p>We invite all devotees to join us for the grand religious rituals and celebrations at Shri Shambulingeshwara Temple, Shri Kshetra Gunavante. This significant event highlights the temple's spiritual importance and promotes community participation.</p>
                                <p>The rituals include <strong>Ashtabandha</strong>, <strong>Brahma Kalasha</strong>, and the grand <strong>Jatra Mahotsava</strong>. We are honored to have the support of Shri Masthappa Naik, Balli, as a well-wisher for these auspicious ceremonies.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಶ್ರೀ ಶಂಭುಲಿಂಗೇಶ್ವರ ದೇವಸ್ಥಾನ, ಶ್ರೀ ಕ್ಷೇತ್ರ ಗುಣವಂತೆ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/gunavanthe/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Gunavanthe Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳು ಮತ್ತು ಸಂಭ್ರಮ (ಏಪ್ರಿಲ್ 10–18)</p>
                                <p>ಶ್ರೀ ಕ್ಷೇತ್ರ ಗುಣವಂತೆಯ ಶ್ರೀ ಶಂಭುಲಿಂಗೇಶ್ವರ ದೇವಸ್ಥಾನದಲ್ಲಿ ನಡೆಯುವ ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳು ಮತ್ತು ಸಂಭ್ರಮಕ್ಕೆ ಎಲ್ಲಾ ಭಕ್ತಾದಿಗಳನ್ನು ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ. ಈ ಕಾರ್ಯಕ್ರಮವು ದೇವಸ್ಥಾನದ ಮಹತ್ವವನ್ನು ಸಾರುತ್ತದೆ ಮತ್ತು ಸಮುದಾಯದ ಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ.</p>
                                <p>ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ <strong>ಅಷ್ಟಬಂಧ</strong>, <strong>ಬ್ರಹ್ಮ ಕಲಶ</strong> ಹಾಗೂ <strong>ಜಾತ್ರಾ ಮಹೋತ್ಸವ</strong> ನಡೆಯಲಿದೆ. ಈ ಪವಿತ್ರ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಶ್ರೀ ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ, ಬಳ್ಳಿ ಅವರು ಶುಭ ಹಾರೈಸಿದ್ದಾರೆ.</p>
                            </div>
                        </div>
                    `
                }
            },
            'sharadahole': {
                en: {
                    title: 'Shri Hanumanta Temple Vardhanti Mahotsava, Sharadahole',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/sharadahole/photo1.jpg" class="w-full rounded-3xl shadow-2xl" alt="Sharadahole Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Vardhanti Mahotsava</p>
                                <p>The Vardhanti Mahotsava at Shri Hanumanta Temple, Sharadahole, Bhatkal, was a grand celebration of devotion and grandeur. The event was graced by the divine presence of the Namdhari Samaj's revered guru, <strong>Brahmaranda Saraswati</strong>, filling the devotees with spiritual energy.</p>
                                <p>The presence of young entrepreneur and social worker <strong>Shri Masthappa Naik Balse</strong> added further splendor to the program. We pray that Lord Hanumanta of Sharadahole blesses Shri Masthappa Naik, who always works for the welfare of society with the mantra "Service is the ultimate religion," with peace and happiness.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಶ್ರೀ ಹನುಮಂತ ದೇವಸ್ಥಾನದ ವರ್ಧಂತಿ ಮಹೋತ್ಸವ, ಸಾರದ ಹೊಳೆ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/sharadahole/photo1.jpg" class="w-full rounded-3xl shadow-2xl" alt="Sharadahole Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ವರ್ಧಂತಿ ಮಹೋತ್ಸವ</p>
                                <p>ಭಟ್ಕಳ ತಾಲೂಕಿನ ಶಿರಾಲಿ ಸಾರದ ಹೊಳೆ ಶ್ರೀ ಹನುಮಂತ ದೇವಸ್ಥಾನದ ವರ್ಧಂತಿ ಮಹೋತ್ಸವವು ಈ ಬಾರಿ ಭಕ್ತಿ, ಭಾವ ಹಾಗೂ ವೈಭವದ ಮಹೋತ್ಸವವಾಗಿ ಮೂಡಿಬಂತು. ನಾಮಧಾರಿ ಸಮಾಜದ ಪೂಜ್ಯ ಗುರುಗಳಾದ <strong>ಬ್ರಹ್ಮಾನಂದ ಸರಸ್ವತಿಗಳ</strong> ದಿವ್ಯ ಸಾನ್ನಿಧ್ಯದಲ್ಲಿ ನಡೆದ ಈ ಪವಿತ್ರ ಕಾರ್ಯಕ್ರಮವು ಭಕ್ತರಲ್ಲಿ ಆಧ್ಯಾತ್ಮಿಕ ಚೈತನ್ಯವನ್ನು ತುಂಬಿದ ಮಹತ್ವದ ಕ್ಷಣವಾಗಿತ್ತು.</p>
                                <p>ಈ ಮಹೋತ್ಸವದಲ್ಲಿ ಯುವ ಉದ್ದಿಮೆದಾರರು, ಹಾಗೂ ಸಮಾಜ ಸೇವಕರಾದ <strong>ಶ್ರೀಯುತ ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲ್ಸೇ</strong> ಅವರ ಉಪಸ್ಥಿತಿ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಮತ್ತಷ್ಟು ಮೆರಗು ತಂದಿತು. ಸಮಾಜದ ಹಿತಕ್ಕಾಗಿ ಸದಾ ಶ್ರಮಿಸುವ ಅವರು ‘‘ಸೇವೆಯೇ ಪರಮಧರ್ಮ’’ ಎನ್ನುವ ಮಂತ್ರದೊಂದಿಗೆ ಮುನ್ನಡೆಯುತ್ತಿರುವ ಶ್ರೀಯುತರಿಗೆ ಸಾರದ ಹೊಳೆ ಹನುಮಂತ ದೇವರು ಸುಖ-ಶಾಂತಿ ನೀಡಲಿ ಎಂದು ಹಾರೈಸೋಣ 🙏</p>
                            </div>
                        </div>
                    `
                }
            },
            'alvikodi': {
                en: {
                    title: 'Shri Hariseve at Alvikodi, Bhatkal',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/alvikodi/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Alvikodi Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Spiritual Celebration</p>
                                <p>The Shri Hariseve program in Alvikodi, Bhatkal, was filled with devotion and tradition, creating a spiritual atmosphere for all devotees. The event was marked by deep contemplation and chanting of the Lord's name.</p>
                                <p>Shri Masthappa Naik Balse was honored for his selfless service to society. Accepting the honor, he stated, "Engaging in divine work and social service is my fortune. The respect given by the family of Alvikodi has further increased my responsibility."</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಶ್ರೀ ಹರಿಸೇವೆ, ಅಳ್ವೆಕೊಡಿ, ಭಟ್ಕಳ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/alvikodi/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Alvikodi Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಆಧ್ಯಾತ್ಮಿಕ ಹಬ್ಬ</p>
                                <p>ಭಟ್ಕಳ ತಾಲೂಕಿನ ಅಳ್ವೆಕೊಡಿಯಲ್ಲಿ ಭಕ್ತಿ, ಶ್ರದ್ಧೆ ಮತ್ತು ಸಂಪ್ರದಾಯಗಳಿಂದ ತುಂಬಿಕೊಂಡು ಜರುಗಿದ ಶ್ರೀ ಹರಿಸೇವೆ ಕಾರ್ಯಕ್ರಮವು ಭಕ್ತರ ಮನಸ್ಸನ್ನು ಭಕ್ತಿ ಸಾಗರದಲ್ಲಿ ತೇಲಿಸಿತು. ದೈವಚಿಂತನೆ, ಹರಿನಾಮ ಸ್ಮರಣೆಯು ಈ ಕಾರ್ಯವನ್ನು ಒಂದು ಆಧ್ಯಾತ್ಮಿಕ ಹಬ್ಬದ ರೂಪಕ್ಕೆ ಏರಿಸಿತು.</p>
                                <p>ಸಮಾಜದ ಶ್ರೇಯೋಭಿವೃದ್ಧಿಗೆ ಮತ್ತು ಹತ್ತಾರು ಜನಪರ ಕಾರ್ಯಗಳಿಗೆ ಸದಾ ಸ್ಪಂದಿಸುವ ನಿಸ್ವಾರ್ಥ ಸೇವೆಯನ್ನು ಗುರುತಿಸಿ, ಈ ಪುಣ್ಯ ಕಾರ್ಯಕ್ಕೆ ಆಹ್ವಾನಿತರಾದ ಸಮಾಜ ಸೇವಕರಾದ <strong>ಶ್ರೀಯುತ ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲ್ಸೇ</strong> ಅವರಿಗೆ ಫಲಪುಷ್ಪ, ಶಾಲು ಹೊದಿಸಿ ಹಾಗೂ ಸ್ಮರಣಿಕೆ ನೀಡಿ ಗೌರವಿಸಲಾಯಿತು.</p>
                                <p>ಸನ್ಮಾನ ಸ್ವೀಕರಿಸಿ ಮಾತನಾಡಿದ <strong>ಶ್ರೀಯುತರು</strong> "ದೇವಕಾರ್ಯ ಮತ್ತು ಸಮಾಜ ಸೇವೆಯಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳುವುದು ನನ್ನ ಭಾಗ್ಯ. ಅಳ್ವೆಕೊಡಿಯ ಈ ಕುಟುಂಬದವರು ನೀಡಿದ ಈ ಗೌರವ ನನ್ನ ಜವಾಬ್ದಾರಿಯನ್ನು ಮತ್ತಷ್ಟು ಹೆಚ್ಚಿಸಿದ್ದಾರೆ." ಆ ಕುಟುಂಬಸ್ಥರಿಗೆ ಶ್ರೀ ಹರಿಯ ಆಶೀರ್ವಾದ ಸದಾ ಇರಲಿ ಎಂದು ಹರಸಿ ಹಾರೈಸಿದರು.</p>
                            </div>
                        </div>
                    `
                }
            },
            'bhatkal-kudure-birappa': {
                en: {
                    title: '42nd Vardhanti Mahotsava, Sankadahole',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/bhatkal_kudure_birappa/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Kudure Birappa Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">42nd Vardhanti Mahotsava</p>
                                <p>The 42nd Vardhanti Mahotsava at Shri Kudure Birappa and Shri Mukhyaprana Hanumanta Temple, Sankadahole, Bhatkal, was a grand celebration of culture and devotion.</p>
                                <p>The temple administration honored <strong>Shri Masthappa Naik Balse</strong> for his dedicated service to society, his concern for social welfare, and his support for religious activities. We pray that the Lord blesses all members of the administration board.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: '42ನೇ ವರ್ಧಂತಿ ಮಹೋತ್ಸವ, ಸಂಕದಹೊಳೆ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/bhatkal_kudure_birappa/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Kudure Birappa Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">42ನೇ ವರ್ಧಂತಿ ಮಹೋತ್ಸವ</p>
                                <p>ಶ್ರೀ ಕುದುರೆಬೀರಪ್ಪ ಹಾಗೂ ಶ್ರೀ ಮುಖ್ಯಪ್ರಾಣ ಹನುಮಂತ ದೇವಸ್ಥಾನ, ಸಂಕದಹೊಳೆ – ಚೌತನಿ ಭಟ್ಕಳದಲ್ಲಿ ನಡೆದ 42ನೇ ವರ್ಷದ ವರ್ಧಂತಿ ಮಹೋತ್ಸವವು ಭಕ್ತಿಭಾವದ ಮಹಾಸಾಗರ, ಸಂಸ್ಕೃತಿಯ ಹಬ್ಬವಾದ ಅಪೂರ್ವ ಕ್ಷಣವಾಗಿತ್ತು.</p>
                                <p>ಈ ಶುಭ ಸಂಧರ್ಭದಲ್ಲಿ ಸಮಾಜ ಸೇವೆಯ ಮೂಲಕ ಜನಮನಗಳಲ್ಲಿ ಅಚ್ಚಳಿಯದ ಗುರುತು ಮೂಡಿಸಿರುವ ಗೌರವಾನ್ವಿತ ಸಮಾಜ ಸೇವಕರಾದ <strong>ಶ್ರೀ ಯುತ ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲ್ಸೇ</strong> ಅವರ ಸೇವಾಮನೋಭಾವ, ಸಮಾಜದ ಹಿತದೃಷ್ಟಿ, ಧಾರ್ಮಿಕ ಕಾರ್ಯಗಳಿಗೆ ನೀಡಿದ ಬೆಂಬಲ ಇವುಗಳನ್ನು ಮನಗಂಡ ದೇವಸ್ಥಾನದ ಆಡಳಿತ ಮಂಡಳಿ ಶ್ರೀಯುತರನ್ನು ಆತ್ಮೀಯವಾಗಿ ಆಮಂತ್ರಿಸಿ ಗೌರವ ಪೂರ್ವಕವಾಗಿ ಸನ್ಮಾನಿಸಿದರು. ಆಡಳಿತ ಮಂಡಳಿಯ ಎಲ್ಲಾ ಸದಸ್ಯರಿಗೆ ಶ್ರೀ ದೇವರು ಸನ್ಮಂಗಳವನ್ನುಂಟು ಮಾಡಲಿ ಎಂದು ಹಾರೈಸೋಣ.</p>
                            </div>
                        </div>
                    `
                }
            },
            'balkur-jatre': {
                en: {
                    title: 'Balkur Jatre Drama Support',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/balkur_jatre/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Balkur Jatre Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">Supporting Local Drama</p>
                                <p>During the Balkur Jatre, young leader and social worker from Honnavar-Bhatkal, <strong>Shri Masthappa Naik Balse</strong>, supported the drama organized by Mahavishnu and Durgamba Friends Club, Balkur, directed by N.H. Ambiga.</p>
                                <p>He extended his best wishes and provided support through his fans to the local artists.</p>
                            </div>
                        </div>
                    `
                },
                kn: {
                    title: 'ಬಳಕೂರು ಜಾತ್ರೆ ನಾಟಕಕ್ಕೆ ಬೆಂಬಲ',
                    content: `
                        <div class="space-y-8">
                            <div class="relative group">
                                <img src="https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/events/balkur_jatre/photo1.jpeg" class="w-full rounded-3xl shadow-2xl" alt="Balkur Jatre Event">
                            </div>
                            <div class="prose prose-xl max-w-none text-slate-600">
                                <p class="text-2xl font-bold text-slate-900">ಸ್ಥಳೀಯ ನಾಟಕಕ್ಕೆ ಬೆಂಬಲ</p>
                                <p>ಹೊನ್ನಾವರ ತಾಲೂಕಿನ ಬಳಕೂರು ಜಾತ್ರೆ ದಿನ ಮಹಾವಿಷ್ಣು ಹಾಗೂ ದುರ್ಗಾಂಬ ಗೆಳೆಯರ ಬಳಗ ಬಳಕೂರು ಇವರಿಂದ ಬಳಕೂರಿನ ಎನ್ ಹೆಚ್ ಅಂಬಿಗ ಇವರ ನಿರ್ದೇಶನದಲ್ಲಿ ನಡೆಯುವ ನಾಟಕಕ್ಕೆ ಉದ್ದಿಮೆದಾರರು, ಸಮಾಜದ ಸೇವಕರು ಹೊನ್ನಾವರ ಭಟ್ಕಳ ಕ್ಷೇತ್ರದ ಯುವ ನಾಯಕರು <strong>ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಬಲಸೆರವರು</strong> ತಮ್ಮ ಅಭಿಮಾನಿಗಳ ಮುಖಾಂತರ ದೇಣಿಗೆ ನೀಡಿ ಶುಭಹಾರಹಿಸಲಾಯಿತು.</p>
                            </div>
                        </div>
                    `
                }
            }
        };

        function openDetail(id) {
            console.log('openDetail called with id:', id);
            if (!details[id]) {
                console.error('Event not found:', id);
                return;
            }
            const content = details[id][currentLang];
            document.getElementById('detailContent').innerHTML = `
                <h2 class="text-5xl font-black text-slate-900 mb-12">${content.title}</h2>
                ${content.content}
            `;
            document.getElementById('detailView').classList.remove('translate-y-full');
            document.body.style.overflow = 'hidden';
            lucide.createIcons();
        }

        function closeDetail() {
            document.getElementById('detailView').classList.add('translate-y-full');
            document.body.style.overflow = 'auto';
        }
    