
// --- Icons (SVG fragments) ---
const ICONS = {
    fileText: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>',
    target: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
    trendingUp: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    creditCard: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>',
    workflow: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg>',
    userPlus: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>',
    share2: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>',
    helpCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    banknote: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>',
    stamp: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M5 22h14"></path><path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11a2.5 2.5 0 0 0-1.77.73L2 17v2h20v-2l-2.73-3.27z"></path><path d="M12 13V2"></path><path d="M10 4h4"></path></svg>',
    trophy: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>',
    shieldCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
    bell: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>',
    pieChart: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10Z"></path></svg>',
    history: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>',
    layoutDashboard: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>',
    treePine: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-2l3-3.3a1 1 0 0 1-.7-1.7h1.4L12 2l3.3 7h1.4a1 1 0 0 1-.7 1.7h-2l3 3.3Z"></path><path d="M12 22v-3"></path></svg>',
    layers: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m2.6 11.08 8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83"></path><path d="m2.6 15.08 8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83"></path></svg>',
    arrowRightCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>',
    fileSearch: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx="11.5" cy="14.5" r="2.5"></circle><path d="M13.3 16.3 15 18"></path></svg>',
    checkCircle2: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>',
    settings: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1-1 1.73l-.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
    table: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M12 3v18"></path><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>',
    barChart2: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
    cpu: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>',
    activity: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
    checkSquare: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>'
};

// --- State ---
let currentLang = 'kn';
let currentPage = 'requirement';

// --- Data ---
const getUnderstandSections = (lang) => {
    const isEn = lang === 'en';
    return [
        {
            id: "overview",
            title: isEn ? "Business Overview" : "ವ್ಯವಹಾರದ ಅವಲೋಕನ",
            icon: ICONS.fileText,
            content: `
                <div class="space-y-6">
                    <p class="text-slate-600 leading-relaxed font-medium">
                        ${isEn ? "The Aryan Finance BRD explains a complete subscription and lottery business management system in which three main people are involved: Admin, Retailer, and Customer." : "Aryan Finance BRD ಒಂದು ಸಂಪೂರ್ಣ subscription ಮತ್ತು lottery ವ್ಯವಹಾರ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಯನ್ನು ವಿವರಿಸುತ್ತದೆ, ಇದರಲ್ಲಿ ಮೂರು ಮುಖ್ಯ ವ್ಯಕ್ತಿಗಳು ಭಾಗಿಯಾಗಿದ್ದಾರೆ: Admin, Retailer ಮತ್ತು Customer."}
                    </p>
                    <div class="p-6 bg-blue-50 border border-blue-100 italic text-sm text-[#1E3A8A]">
                        ${isEn ? "The purpose of this system is to replace manual work like notebooks, paper records, Excel tracking, phone-based follow-ups, and manual calculations with a centralized digital web application." : "ಈ ವ್ಯವಸ್ಥೆಯ ಉದ್ದೇಶವು ನೋಟ್‌ಬುಕ್‌ಗಳು, ಪೇಪರ್ ದಾಖಲೆಗಳು, Excel tracking, ಫೋನ್-ಆಧಾರಿತ follow-ups ಮತ್ತು ಹಸ್ತಚಾಲಿತ ಲೆಕ್ಕಾಚಾರಗಳಂತಹ ಹಸ್ತಚಾಲಿತ ಕೆಲಸಗಳನ್ನು ಕೇಂದ್ರೀಕೃತ ಡಿಜಿಟಲ್ web application ನೊಂದಿಗೆ ಬದಲಾಯಿಸುವುದಾಗಿದೆ."}
                    </div>
                </div>
            `
        },
        {
            id: "u1",
            title: isEn ? "1. What Is This Business?" : "1. ಈ ವ್ಯವಹಾರ ಎಂದರೇನು?",
            icon: ICONS.target,
            content: `
                <div class="space-y-8">
                    <p class="font-bold text-[#1E3A8A] text-lg uppercase tracking-tight">${isEn ? "This is a subscription-based financial and lottery business." : "ಇದು subscription ಆಧಾರಿತ ಹಣಕಾಸು ಮತ್ತು lottery ವ್ಯವಹಾರವಾಗಿದೆ."}</p>
                    
                    <div class="space-y-4">
                        <p class="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">${isEn ? "Simple Workflow" : "ಸರಳ ಕಾರ್ಯಾಚರಣೆಯ ಹರಿವು"}</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${(isEn ? [
                                "Customers join the scheme by taking a card.",
                                "Every month, the customer pays ₹1000 installment.",
                                "The scheme runs for 12 months.",
                                "Every month, lottery winners are selected.",
                                "If a customer wins: Their card closes, they stop paying installments.",
                                "If customer does not win within 12 months: The company gives a maturity benefit/prize, and the card closes automatically."
                            ] : [
                                "Customer ಗಳು card ತೆಗೆದುಕೊಳ್ಳುವ ಮೂಲಕ ಯೋಜನೆಯನ್ನು ಸೇರುತ್ತಾರೆ.",
                                "ಪ್ರತಿ ತಿಂಗಳು, Customer ₹1000 installment ಪಾವತಿಸುತ್ತಾರೆ.",
                                "ಯೋಜನೆಯು 12 ತಿಂಗಳುಗಳವರೆಗೆ ನಡೆಯುತ್ತದೆ.",
                                "ಪ್ರತಿ ತಿಂಗಳು, lottery ವಿಜೇತರನ್ನು ಆಯ್ಕೆ ಮಾಡಲಾಗುತ್ತದೆ.",
                                "ಗೆದ್ದರೆ: ಅವರ card ಮುಕ್ತಾಯವಾಗುತ್ತದೆ ಮತ್ತು ಕಂತು ಪಾವತಿ ನಿಲ್ಲುತ್ತದೆ.",
                                "ಗೆಲ್ಲದಿದ್ದರೆ: 12 ತಿಂಗಳ ನಂತರ ಕಂಪನಿಯು maturity benefit ನೀಡುತ್ತದೆ ಮತ್ತು card ಮುಕ್ತಾಯಗೊಳ್ಳುತ್ತದೆ."
                            ]).map(it => `
                                <div class="p-4 bg-white border border-slate-100 flex items-start gap-3 shadow-sm">
                                    <div class="w-1 h-6 bg-[#0ea5e9] shrink-0"></div>
                                    <p class="text-xs text-slate-600 font-bold leading-relaxed">${it}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="p-8 bg-slate-900 text-white space-y-4 rounded-sm">
                        <h4 class="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9]">${isEn ? "Main usage of this system" : "ವ್ಯವಸ್ಥೆಯ ಮುಖ್ಯ ಬಳಕೆ"}</h4>
                        <div class="flex flex-wrap gap-4 underline decoration-[#0ea5e9] decoration-2 underline-offset-4">
                            ${(isEn ? ["Manage customers", "Manage cards", "Track monthly payments", "Run lottery operations", "Manage referrals", "Track retailer performance"] : ["ಗ್ರಾಹಕರ ನಿರ್ವಹಣೆ", "ಕಾರ್ಡ್‌ಗಳ ನಿರ್ವಹಣೆ", "ಮಾಸಿಕ ಪಾವತಿಗಳ ಟ್ರ್ಯಾಕಿಂಗ್", "ಲಾಟರಿ ಕಾರ್ಯಾಚರಣೆಗಳು", "ರೆಫರಲ್‌ಗಳ ನಿರ್ವಹಣೆ", "ರಿಟೇಲರ್ ಪ್ರದರ್ಶನ ಟ್ರ್ಯಾಕಿಂಗ್"]).map(it => `
                                <span class="text-xs font-black uppercase tracking-tighter">${it}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "u2",
            title: isEn ? "2. Why Is This System Needed?" : "2. ಈ ವ್ಯವಸ್ಥೆಯ ಅಗತ್ಯವೇಕೆ?",
            icon: ICONS.trendingUp,
            content: `
                <div class="space-y-6">
                    <p class="text-slate-600 font-medium">${isEn ? "Without software, this business becomes very difficult to manage because:" : "ಸಾಫ್ಟ್‌ವೇರ್ ಇಲ್ಲದೆ, ಈ ವ್ಯವಹಾರವನ್ನು ನಿರ್ವಹಿಸುವುದು ತುಂಬಾ ಕಷ್ಟಕರವಾಗುತ್ತದೆ ಏಕೆಂದರೆ:"}</p>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        ${(isEn ? [
                            "Thousands of customers may join", "Many retailers sell cards", "Payments need tracking", "Referral commissions calculation",
                            "Lottery winner management", "Duplicate records possibility", "Manual calculation mistakes", "Paper receipts can get lost"
                        ] : [
                            "ಸಾವಿರಾರು ಗ್ರಾಹಕರು ಸೇರಬಹುದು", "ಅನೇಕ ರಿಟೇಲರ್‌ಗಳು ಕಾರ್ಡ್ ಮಾರುತ್ತಾರೆ", "ಪಾವತಿಗಳ ಟ್ರ್ಯಾಕಿಂಗ್ ಅಗತ್ಯ", "ರೆಫರಲ್ ಕಮಿಷನ್ ಲೆಕ್ಕಾಚಾರ",
                            "ಲಾಟರಿ ವಿಜೇತರ ನಿರ್ವಹಣೆ", "ನಕಲಿ ದಾಖಲೆಗಳ ಸಾಧ್ಯತೆ", "ಹಸ್ತಚಾಲಿತ ಲೆಕ್ಕಾಚಾರದ ತಪ್ಪುಗಳು", "ರಶೀದಿ ಕಳೆದುಹೋಗಬಹುದು"
                        ]).map(it => `
                            <div class="p-3 bg-slate-50 border border-slate-100 text-center space-y-2">
                                <div class="w-1.5 h-1.5 bg-red-400 mx-auto"></div>
                                <p class="text-[9px] font-black uppercase leading-tight text-slate-500">${it}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `
        },
        {
            id: "u3",
            title: isEn ? "3. Who Uses This System?" : "3. ಈ ವ್ಯವಸ್ಥೆಯನ್ನು ಯಾರು ಬಳಸುತ್ತಾರೆ?",
            icon: ICONS.users,
            content: `
                <div class="space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                        <div class="p-6 bg-white space-y-4">
                            <h5 class="text-sm font-black uppercase text-[#1E3A8A]">${isEn ? "A. Admin" : "A. ಅಡ್ಮಿನ್"}</h5>
                            <p class="text-xs text-slate-500 leading-relaxed">${isEn ? "Admin is the owner or company management with full control." : "ಅಡ್ಮಿನ್ ಮಾಲೀಕರು ಅಥವಾ ಕಂಪನಿಯ ನಿರ್ವಹಣೆಯಾಗಿದ್ದು, ಪೂರ್ಣ ನಿಯಂತ್ರಣ ಹೊಂದಿರುತ್ತಾರೆ."}</p>
                            <div class="space-y-1">
                                ${(isEn ? ["Add retailers", "Generate cards", "Approve payments", "Conduct lottery"] : ["ರಿಟೇಲರ್‌ಗಳನ್ನು ಸೇರಿಸಿ", "ಕಾರ್ಡ್‌ಗಳನ್ನು ರಚಿಸಿ", "ಪಾವತಿಗಳನ್ನು ಅನುಮೋದಿಸಿ", "ಲಾಟರಿ ನಡೆಸಿ"]).map(it => `
                                    <div class="text-[9px] font-black uppercase text-slate-400">• ${it}</div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="p-6 bg-white space-y-4">
                            <h5 class="text-sm font-black uppercase text-[#1E3A8A]">${isEn ? "B. Retailer" : "B. ರಿಟೇಲರ್"}</h5>
                            <p class="text-xs text-slate-500 leading-relaxed">${isEn ? "Retailers are business partners or agents who grow the business." : "ರಿಟೇಲರ್‌ಗಳು ವ್ಯವಹಾರದ ಪಾಲುದಾರರು ಅಥವಾ ಏಜೆಂಟ್‌ಗಳಾಗಿದ್ದು, ವ್ಯವಹಾರವನ್ನು ಬೆಳೆಸುತ್ತಾರೆ."}</p>
                            <div class="space-y-1">
                                ${(isEn ? ["Selling cards", "Registering customers", "Collecting payments"] : ["ಕಾರ್ಡ್ ಮಾರಾಟ", "ಗ್ರಾಹಕರ ನೋಂದಣಿ", "ಪಾವತಿಗಳನ್ನು ಸಂಗ್ರಹಿಸುವುದು"]).map(it => `
                                    <div class="text-[9px] font-black uppercase text-slate-400">• ${it}</div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="p-6 bg-white space-y-4">
                            <h5 class="text-sm font-black uppercase text-[#1E3A8A]">${isEn ? "C. Customer" : "C. ಗ್ರಾಹಕ"}</h5>
                            <p class="text-xs text-slate-500 leading-relaxed">${isEn ? "Customers join the scheme to participate in lottery and earn payouts." : "ಗ್ರಾಹಕರು ಲಾಟರಿಯಲ್ಲಿ ಭಾಗವಹಿಸಲು ಮತ್ತು ಗಳಿಕೆಗಾಗಿ ಯೋಜನೆಯನ್ನು ಸೇರುತ್ತಾರೆ."}</p>
                            <div class="space-y-1">
                                ${(isEn ? ["Buy cards", "Pay installments", "Refer others", "Earn commission"] : ["ಕಾರ್ಡ್ ಖರೀದಿಸಿ", "ಕಂತು ಪಾವತಿಸಿ", "ಇತರರನ್ನು ರೆಫರ್ ಮಾಡಿ", "ಕಮಿಷನ್ ಗಳಿಸಿ"]).map(it => `
                                    <div class="text-[9px] font-black uppercase text-slate-400">• ${it}</div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "u4",
            title: isEn ? "4. What Is a Card?" : "4. ಕಾರ್ಡ್ ಎಂದರೇನು?",
            icon: ICONS.creditCard,
            content: `
                <div class="space-y-6">
                    <p class="text-slate-600 font-medium">${isEn ? "Card is the core concept of this business. Every customer joins using a unique card number (e.g., ARY1001)." : "ಕಾರ್ಡ್ ಈ ವ್ಯವಹಾರದ ಮುಖ್ಯ ಪರಿಕಲ್ಪನೆಯಾಗಿದೆ. ಪ್ರತಿಯೊಬ್ಬ ಗ್ರಾಹಕರು ವಿಶಿಷ್ಟ ಕಾರ್ಡ್ ಸಂಖ್ಯೆಯನ್ನು (ಉದಾಹರಣೆಗೆ, ARY1001) ಬಳಸಿ ಸೇರುತ್ತಾರೆ."}</p>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${(isEn ? ["One Subscription", "One Lottery Spot", "One Payment Cycle", "One Referral ID"] : ["ಒಂದು ಚಂದಾದಾರಿಕೆ", "ಒಂದು ಲಾಟರಿ ಸ್ಥಾನ", "ಒಂದು ಪಾವತಿ ಚಕ್ರ", "ಒಂದು ರೆಫರಲ್ ಐಡಿ"]).map(it => `
                            <div class="p-4 bg-slate-50 border border-slate-200 text-center space-y-2">
                                <div class="w-2 h-2 bg-[#0ea5e9] mx-auto rounded-full"></div>
                                <p class="text-[10px] font-black uppercase text-[#1E3A8A]">${it}</p>
                            </div>
                        `).join('')}
                    </div>
                    <p class="text-xs italic text-slate-400">${isEn ? "* A single customer can own multiple cards." : "* ಒಬ್ಬ ಗ್ರಾಹಕರು ಅನೇಕ ಕಾರ್ಡ್‌ಗಳನ್ನು ಹೊಂದಿರಬಹುದು."}</p>
                </div>
            `
        },
        {
            id: "u5",
            title: isEn ? "5. How Card Distribution Works" : "5. ಕಾರ್ಡ್ ವಿತರಣೆ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?",
            icon: ICONS.workflow,
            content: `
                <div class="space-y-6">
                    <div class="flex flex-col md:flex-row gap-8 items-center py-6">
                        <div class="p-4 bg-[#1E3A8A] text-white text-center w-40 shrink-0">
                            <p class="text-[10px] font-black uppercase">${isEn ? "Step 01" : "ಹಂತ 01"}</p>
                            <p class="text-xs font-bold mt-1">${isEn ? "Admin Creates Bulk Cards" : "ಅಡ್ಮಿನ್ ಬೃಹತ್ ಕಾರ್ಡ್‌ಗಳನ್ನು ರಚಿಸುತ್ತಾರೆ"}</p>
                        </div>
                        <div class="hidden md:block w-8 h-px bg-slate-300"></div>
                        <div class="p-4 bg-white border border-slate-200 text-center w-40 shrink-0">
                            <p class="text-[10px] font-black uppercase text-slate-400">${isEn ? "Step 02" : "ಹಂತ 02"}</p>
                            <p class="text-xs font-bold mt-1 text-slate-600">${isEn ? "Distribute to Retailers" : "ರಿಟೇಲರ್‌ಗಳಿಗೆ ವಿತರಿಸಲಾಗುತ್ತದೆ"}</p>
                        </div>
                        <div class="hidden md:block w-8 h-px bg-slate-300"></div>
                        <div class="p-4 bg-white border border-slate-200 text-center w-40 shrink-0">
                            <p class="text-[10px] font-black uppercase text-slate-400">${isEn ? "Step 03" : "ಹಂತ 03"}</p>
                            <p class="text-xs font-bold mt-1 text-slate-600">${isEn ? "Retailers Sell to Customers" : "ರಿಟೇಲರ್‌ಗಳು ಗ್ರಾಹಕರಿಗೆ ಮಾರುತ್ತಾರೆ"}</p>
                        </div>
                    </div>
                    <div class="p-6 bg-slate-50 border-l-4 border-[#0ea5e9]">
                        <p class="text-sm font-medium text-slate-600 leading-relaxed">
                            ${isEn ? "Admin can also directly assign cards to customers (Office walk-in, VIP customers) without any retailer involvement to maintain centralized control." : "ಅಡ್ಮಿನ್ ಯಾವುದೇ ರಿಟೇಲರ್ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆಯಿಲ್ಲದೆ ನೇರವಾಗಿ ಗ್ರಾಹಕರಿಗೆ (Office walk-in, VIP ಗ್ರಾಹಕರು) ಕಾರ್ಡ್‌ಗಳನ್ನು ನಿಯೋಜಿಸಬಹುದು."}
                        </p>
                    </div>
                </div>
            `
        },
        {
            id: "u6",
            title: isEn ? "6. Card Status Meaning" : "6. ಕಾರ್ಡ್ ಸ್ಥಿತಿಯ ಅರ್ಥ",
            icon: ICONS.activity,
            content: `
                <div class="space-y-6">
                    <p class="text-slate-600 font-medium">${isEn ? "Each card has a lifecycle represented by its status:" : "ಪ್ರತಿ ಕಾರ್ಡ್ ಅದರ ಸ್ಥಿತಿಯಿಂದ ಪ್ರತಿನಿಧಿಸುವ ಜೀವನಚಕ್ರವನ್ನು ಹೊಂದಿದೆ:"}</p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                        ${[
                            { s: "Available", e: "Card is unused and ready for assignment.", k: "ಕಾರ್ಡ್ ಬಳಕೆಯಾಗದೆ ಹಂಚಿಕೆಗೆ ಸಿದ್ಧವಾಗಿದೆ." },
                            { s: "Reserved", e: "Card is temporarily locked during registration.", k: "ನೋಂದಣಿ ಸಮಯದಲ್ಲಿ ಕಾರ್ಡ್ ತಾತ್ಕಾಲಿಕವಾಗಿ ಲಾಕ್ ಆಗಿದೆ." },
                            { s: "Assigned", e: "Card is linked to a customer.", k: "ಕಾರ್ಡ್ ಗ್ರಾಹಕರಿಗೆ ಲಿಂಕ್ ಆಗಿದೆ." },
                            { s: "Active", e: "Customer is actively paying installments.", k: "ಗ್ರಾಹಕರು ಸಕ್ರಿಯವಾಗಿ ಕಂತುಗಳನ್ನು ಪಾವತಿಸುತ್ತಿದ್ದಾರೆ." },
                            { s: "Closed", e: "Customer won lottery or manually closed.", k: "ಗ್ರಾಹಕರು ಲಾಟರಿ ಗೆದ್ದಿದ್ದಾರೆ ಅಥವಾ ಹಸ್ತಚಾಲಿತವಾಗಿ ಮುಚ್ಚಲಾಗಿದೆ." },
                            { s: "Matured", e: "12 months completed successfully.", k: "12 ತಿಂಗಳುಗಳು ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿವೆ." }
                        ].map(it => `
                            <div class="p-4 bg-white border border-slate-200">
                                <h6 class="text-[10px] font-black uppercase text-[#1E3A8A] border-b pb-1 mb-2">${isEn ? it.s : it.s}</h6>
                                <p class="text-[9px] font-bold text-slate-500 leading-tight uppercase font-mono">${isEn ? it.e : it.k}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `
        },
        {
            id: "u7",
            title: isEn ? "7. How Customer Registration Works" : "7. ಗ್ರಾಹಕರ ನೋಂದಣಿ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?",
            icon: ICONS.userPlus,
            content: `
                <div class="space-y-6">
                    <p class="text-sm font-bold text-slate-600">${isEn ? "Admin or Retailers can register customers by collecting details and verifying OTP." : "ವಿವರಗಳನ್ನು ಸಂಗ್ರಹಿಸುವ ಮೂಲಕ ಮತ್ತು OTP ಪರಿಶೀಲಿಸುವ ಮೂಲಕ ಅಡ್ಮಿನ್ ಅಥವಾ ರಿಟೇಲರ್‌ಗಳು ಗ್ರಾಹಕರನ್ನು ನೋಂದಾಯಿಸಬಹುದು."}</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-4">
                            <h5 class="text-[10px] font-black uppercase tracking-widest text-slate-400">${isEn ? "Collected Information" : "ಸಂಗ್ರಹಿಸಿದ ಮಾಹಿತಿ"}</h5>
                            <div class="flex flex-wrap gap-2">
                                ${(isEn ? ["Name", "Phone", "Email", "Aadhaar", "Address", "DOB", "Gender", "Nominee"] : ["ಹೆಸರು", "ಫೋನ್", "ಇಮೇಲ್", "ಆಧಾರ್", "ವಿಳಾಸ", "DOB", "ಲಿಂಗ", "ನಾಮಿನಿ"]).map(it => `
                                    <span class="px-3 py-1 bg-slate-100 text-[9px] font-black uppercase text-slate-500 rounded-full">${it}</span>
                                `).join('')}
                            </div>
                        </div>
                        <div class="space-y-4">
                            <h5 class="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9]">${isEn ? "System Actions" : "ವ್ಯವಸ್ಥೆಯ ಕ್ರಮಗಳು"}</h5>
                            <ul class="text-xs font-medium text-slate-600 space-y-2">
                                <li>• ${isEn ? "OTP Verification" : "OTP ಪರಿಶೀಲನೆ"}</li>
                                <li>• ${isEn ? "Duplicate Entry Check" : "ನಕಲಿ ನಮೂದು ಪರಿಶೀಲನೆ"}</li>
                                <li>• ${isEn ? "Credential Generation" : "ಲಾಗಿನ್ ವಿವರಗಳ ರಚನೆ"}</li>
                                <li>• ${isEn ? "Card Assignment" : "ಕಾರ್ಡ್ ನಿಯೋಜನೆ"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "u8",
            title: isEn ? "8. What Is the Referral System?" : "8. ರೆಫರಲ್ ವ್ಯವಸ್ಥೆ ಎಂದರೇನು?",
            icon: ICONS.share2,
            content: `
                <div class="space-y-6">
                    <div class="p-8 bg-[#1E3A8A] text-white rounded-sm">
                        <p class="text-lg font-black uppercase italic tracking-tighter">${isEn ? "Referrals are NOT Customer-based. They are CARD-based." : "ರೆಫರಲ್‌ಗಳು ಗ್ರಾಹಕ-ಆಧಾರಿತವಲ್ಲ. ಅವು ಕಾರ್ಡ್-ಆಧಾರಿತವಾಗಿವೆ."}</p>
                    </div>
                    <div class="p-6 bg-slate-50 border border-slate-200">
                        <p class="text-sm font-medium text-slate-600 leading-relaxed">
                            ${isEn ? "Ravi joins the scheme. He refers Suresh. Ravi earns commission. But in this system, EACH CARD acts as an independent referral identity." : "ರವಿ ಯೋಜನೆಯನ್ನು ಸೇರುತ್ತಾನೆ. ಅವನು ಸುರೇಶನನ್ನು ರೆಫರ್ ಮಾಡುತ್ತಾನೆ. ರವಿ ಕಮಿಷನ್ ಗಳಿಸುತ್ತಾನೆ. ಆದರೆ ಈ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ, ಪ್ರತಿ ಕಾರ್ಡ್ ಸ್ವತಂತ್ರ ರೆಫರಲ್ ಗುರುತಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ."}
                        </p>
                    </div>
                </div>
            `
        },
        {
            id: "u9",
            title: isEn ? "9. Card-Based Referral Logic" : "9. ಕಾರ್ಡ್-ಆಧಾರಿತ ರೆಫರಲ್ ಲಾಜಿಕ್",
            icon: ICONS.layers,
            content: `
                <div class="space-y-6">
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="p-6 border-2 border-slate-900 grow">
                            <h5 class="text-[10px] font-black uppercase mb-4">${isEn ? "One Customer (Multiple Cards)" : "ಒಬ್ಬ ಗ್ರಾಹಕ (ಹಲವು ಕಾರ್ಡ್‌ಗಳು)"}</h5>
                            <div class="space-y-2">
                                <div class="p-3 bg-slate-100 text-[10px] font-black uppercase text-[#1E3A8A]">ARY1001 -> Refers A</div>
                                <div class="p-3 bg-slate-100 text-[10px] font-black uppercase text-[#1E3A8A]">ARY2001 -> Refers B</div>
                                <div class="p-3 bg-slate-100 text-[10px] font-black uppercase text-[#1E3A8A]">ARY3001 -> Refers C</div>
                            </div>
                        </div>
                        <div class="p-6 bg-blue-50 border border-blue-100 shrink-0 md:w-64 flex items-center">
                            <p class="text-xs font-bold text-[#1E3A8A] leading-relaxed italic">
                                ${isEn ? "One customer can create multiple referral chains using different cards." : "ಒಬ್ಬ ಗ್ರಾಹಕರು ವಿವಿಧ ಕಾರ್ಡ್‌ಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಅನೇಕ ರೆಫರಲ್ ಸರಪಳಿಗಳನ್ನು ರಚಿಸಬಹುದು."}
                            </p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "u10",
            title: isEn ? "10. Why Card-Based Referral Is Important" : "10. ಕಾರ್ಡ್-ಆಧಾರಿತ ರೆಫರಲ್ ಏಕೆ ಮುಖ್ಯ?",
            icon: ICONS.checkSquare,
            content: `
                <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
                    ${(isEn ? ["Better Tracking", "Transparent Earnings", "Easy Calculation", "Accurate Mapping"] : ["ಉತ್ತಮ ಟ್ರ್ಯಾಕಿಂಗ್", "ಪಾರದರ್ಶಕ ಗಳಿಕೆಗಳು", "ಸುಲಭ ಲೆಕ್ಕಾಚಾರ", "ನಿಖರವಾದ ಮ್ಯಾಪಿಂಗ್"]).map(it => `
                        <div class="p-6 bg-white text-center space-y-2">
                            <div class="w-1.5 h-1.5 bg-green-500 mx-auto"></div>
                            <p class="text-[9px] font-black uppercase text-slate-500 tracking-tighter">${it}</p>
                        </div>
                    `).join('')}
                </div>
            `
        },
        {
            id: "u11",
            title: isEn ? "11. Referral Commission Structure" : "11. ರೆಫರಲ್ ಕಮಿಷನ್ ರಚನೆ",
            icon: ICONS.trendingUp,
            content: `
                <div class="space-y-6">
                    <p class="text-sm font-bold text-slate-600">${isEn ? "There are two levels of referral commission to encourage growth." : "ಬೆಳವಣಿಗೆಯನ್ನು ಉತ್ತೇಜಿಸಲು ರೆಫರಲ್ ಕಮಿಷನ್‌ನ ಎರಡು ಹಂತಗಳಿವೆ."}</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-5 border-2 border-slate-100 bg-white space-y-4">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A] border-b pb-1">${isEn ? "Level 1: Direct Referral" : "ಹಂತ 1: ನೇರ ರೆಫರಲ್"}</h5>
                            <div class="space-y-2">
                                <div class="flex justify-between text-[10px] font-bold">
                                    <span class="text-slate-400 uppercase">${isEn ? "Month 01" : "ತಿಂಗಳು 01"}</span>
                                    <span class="text-green-600 font-black">₹350</span>
                                </div>
                                <div class="flex justify-between text-[10px] font-bold">
                                    <span class="text-slate-400 uppercase">${isEn ? "Month 02 - 12" : "ತಿಂಗಳು 02 - 12"}</span>
                                    <span class="text-green-600 font-black">₹75 / Month</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-5 border-2 border-slate-100 bg-white space-y-4">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A] border-b pb-1">${isEn ? "Level 2: Indirect Referral" : "ಹಂತ 2: ಪರೋಕ್ಷ ರೆಫರಲ್"}</h5>
                            <div class="space-y-2">
                                <p class="text-[9px] text-slate-500 italic uppercase">${isEn ? "When your level 1 referral refers someone else." : "ನಿಮ್ಮ ಹಂತ 1 ರೆಫರಲ್ ಬೇರೆಯವರನ್ನು ರೆಫರ್ ಮಾಡಿದಾಗ."}</p>
                                <div class="flex justify-between text-[10px] font-bold pt-2 border-t border-slate-50">
                                    <span class="text-slate-400 uppercase">${isEn ? "Flat Monthly Payout" : "ಸ್ಥಿರ ಮಾಸಿಕ ಪಾವತಿ"}</span>
                                    <span class="text-green-600 font-black">₹25 / Month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "u12",
            title: isEn ? "12. Payment Management" : "12. ಪಾವತಿ ನಿರ್ವಹಣೆ",
            icon: ICONS.banknote,
            content: `
                <div class="space-y-6">
                    <div class="p-8 bg-slate-900 text-white flex flex-col md:flex-row items-center gap-8">
                        <div class="text-center md:text-left space-y-2 grow">
                            <h5 class="text-3xl font-black uppercase tracking-tighter">₹1000 / ${isEn ? "Month" : "ತಿಂಗಳು"}</h5>
                            <p class="text-xs font-bold text-blue-400 uppercase tracking-widest">${isEn ? "Standard Installment Amount" : "ಮಾನದಂಡದ ಕಂತಿನ ಮೊತ್ತ"}</p>
                        </div>
                        <div class="p-6 bg-white/10 border border-white/20 grow">
                            <p class="text-xs font-medium leading-relaxed">
                                ${isEn ? 
                                    "Payments can be entered by both Retailers and Admins to provide flexibility for customers who pay at the office or to agents." : 
                                    "ಕಛೇರಿಯಲ್ಲಿ ಅಥವಾ ಏಜೆಂಟ್‌ಗಳಿಗೆ ಪಾವತಿಸುವ ಗ್ರಾಹಕರಿಗೆ ನಮ್ಯತೆಯನ್ನು ನೀಡಲು ರಿಟೇಲರ್‌ಗಳು ಮತ್ತು ಅಡ್ಮಿನ್‌ಗಳು ಇಬ್ಬರೂ ಪಾವತಿಗಳನ್ನು ದಾಖಲಿಸಬಹುದು."}
                            </p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "u13",
            title: isEn ? "13. Payment Workflow" : "13. ಪಾವತಿ ಕೆಲಸದ ಹರಿವು",
            icon: ICONS.workflow,
            content: `
                <div class="space-y-8">
                    <div class="space-y-4">
                        <h5 class="text-[10px] font-black uppercase text-slate-400 tracking-widest">${isEn ? "Scenario A: Retailer Collects" : "ಸನ್ನಿವೇಶ A: ರಿಟೇಲರ್ ಸಂಗ್ರಹಿಸಿದಾಗ"}</h5>
                        <div class="flex flex-wrap gap-2">
                            ${(isEn ? ["Collection", "Entry", "Admin Verify", "Receipt", "Commission"] : ["ಸಂಗ್ರಹಣೆ", "ನಮೂದು", "ಅಡ್ಮಿನ್ ಪರಿಶೀಲನೆ", "ರಸೀದಿ", "ಕಮಿಷನ್"]).map((it, idx) => `
                                <div class="flex items-center gap-2">
                                    <span class="px-3 py-2 bg-slate-100 text-[9px] font-black uppercase text-slate-600">${idx+1}. ${it}</span>
                                    ${idx < 4 ? '<span class="text-slate-300">→</span>' : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h5 class="text-[10px] font-black uppercase text-slate-400 tracking-widest">${isEn ? "Scenario B: Admin Collects" : "ಸನ್ನಿವೇಶ B: ಅಡ್ಮಿನ್ ಸಂಗ್ರಹಿಸಿದಾಗ"}</h5>
                        <div class="flex flex-wrap gap-2">
                            ${(isEn ? ["Collection", "Direct Entry", "Receipt", "Commission"] : ["ಸಂಗ್ರಹಣೆ", "ನೇರ ನಮೂದು", "ರಸೀದಿ", "ಕಮಿಷನ್"]).map((it, idx) => `
                                <div class="flex items-center gap-2">
                                    <span class="px-3 py-2 bg-blue-50 text-[9px] font-black uppercase text-[#1E3A8A] border border-blue-100 font-mono">${idx+1}. ${it}</span>
                                    ${idx < 3 ? '<span class="text-blue-200">→</span>' : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "u14",
            title: isEn ? "14. Stored Payment Info" : "14. ಸಂಗ್ರಹಿಸಿದ ಪಾವತಿ ಮಾಹಿತಿ",
            icon: ICONS.fileSearch,
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
                    <div class="p-6 bg-white space-y-4">
                        <h5 class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Basic Details" : "ಮೂಲ ವಿವರಗಳು"}</h5>
                        <ul class="text-[9px] font-bold text-slate-500 space-y-1 uppercase">
                            <li>• ${isEn ? "Payment Date" : "ಪಾವತಿ ದಿನಾಂಕ"}</li>
                            <li>• ${isEn ? "Amount (₹1000)" : "ಮೊತ್ತ (₹1000)"}</li>
                            <li>• ${isEn ? "Installment Month" : "ಕಂತಿನ ತಿಂಗಳು"}</li>
                            <li>• ${isEn ? "Payment Mode" : "ಪಾವತಿ ವಿಧಾನ"}</li>
                        </ul>
                    </div>
                    <div class="p-6 bg-white space-y-4">
                        <h5 class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Tracking Details" : "ಟ್ರ್ಯಾಕಿಂಗ್ ವಿವರಗಳು"}</h5>
                        <ul class="text-[9px] font-bold text-slate-500 space-y-1 uppercase">
                            <li>• ${isEn ? "Transaction ID" : "ವಹಿವಾಟು ಐಡಿ"}</li>
                            <li>• ${isEn ? "Receipt Upload" : "ರಸೀದಿ ಅಪ್‌ಲೋಡ್"}</li>
                            <li>• ${isEn ? "Remarks/Notes" : "ಟಿಪ್ಪಣಿಗಳು"}</li>
                            <li>• ${isEn ? "User who entered" : "ನಮೂದಿಸಿದ ಬಳಕೆದಾರ"}</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            id: "u15",
            title: isEn ? "15. Why Payment Approval?" : "15. ಪಾವತಿ ಅನುಮೋದನೆ ಏಕೆ?",
            icon: ICONS.shieldCheck,
            content: `
                <div class="space-y-6">
                    <p class="text-sm font-bold text-slate-600 leading-relaxed">${isEn ? "Admin verification ensures the integrity of the entire financial ecosystem." : "ಅಡ್ಮಿನ್ ಪರಿಶೀಲನೆಯು ಇಡೀ ಹಣಕಾಸು ವ್ಯವಸ್ಥೆಯ ಸಮಗ್ರತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ."}</p>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${(isEn ? ["Prevent Fake Entries", "Avoid Mistakes", "Maintain Trust", "Accurate Commission"] : ["ಹೋಗಲಾಡಿಸಿ ನಕಲಿ ಪಾವತಿ", "ತಪ್ಪುಗಳನ್ನು ತಪ್ಪಿಸಿ", "ನಂಬಿಕೆ ಉಳಿಸಿ", "ನಿಖರವಾದ ಕಮಿಷನ್"]).map(it => `
                            <div class="p-5 bg-slate-50 border border-slate-100 flex flex-col items-center gap-3">
                                <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span class="text-[9px] font-black uppercase text-center text-slate-500 leading-tight">${it}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `
        },
        {
            id: "u16",
            title: isEn ? "16. Lottery Management" : "16. ಲಾಟರಿ ನಿರ್ವಹಣೆ",
            icon: ICONS.trophy,
            content: `
                <div class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-6 bg-white border border-slate-200 space-y-4">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A] border-b pb-1">${isEn ? "If Customer Wins" : "ಗ್ರಾಹಕರು ಗೆದ್ದರೆ"}</h5>
                            <ul class="text-xs font-bold text-slate-600 space-y-2">
                                <li class="flex items-center gap-2"><div class="w-1 h-1 bg-blue-500"></div> ${isEn ? "Card Closes Instantly" : "ಕಾರ್ಡ್ ತಕ್ಷಣ ಮುಚ್ಚಲ್ಪಡುತ್ತದೆ"}</li>
                                <li class="flex items-center gap-2"><div class="w-1 h-1 bg-blue-500"></div> ${isEn ? "Future Payments Stop" : "ಮುಂದಿನ ಪಾವತಿಗಳು ನಿಲ್ಲುತ್ತವೆ"}</li>
                                <li class="flex items-center gap-2"><div class="w-1 h-1 bg-blue-500"></div> ${isEn ? "Prize Record Created" : "ಬಹುಮಾನ ದಾಖಲೆ ರಚಿಸಲಾಗಿದೆ"}</li>
                            </ul>
                        </div>
                        <div class="p-6 bg-white border border-slate-200 space-y-4">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A] border-b pb-1">${isEn ? "If No Win (12 Months)" : "ಗೆಲ್ಲದಿದ್ದರೆ (12 ತಿಂಗಳು)"}</h5>
                            <ul class="text-xs font-bold text-slate-600 space-y-2">
                                <li class="flex items-center gap-2"><div class="w-1 h-1 bg-amber-500"></div> ${isEn ? "Maturity Benefit Given" : "ಮೆಚ್ಯೂರಿಟಿ ಬೆನಿಫಿಟ್ ನೀಡಲಾಗುತ್ತದೆ"}</li>
                                <li class="flex items-center gap-2"><div class="w-1 h-1 bg-amber-500"></div> ${isEn ? "Card Closes Automatically" : "ಕಾರ್ಡ್ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮುಚ್ಚಲ್ಪಡುತ್ತದೆ"}</li>
                                <li class="flex items-center gap-2"><div class="w-1 h-1 bg-amber-500"></div> ${isEn ? "Cycle Completes" : "ಚಕ್ರ ಪೂರ್ಣಗೊಳ್ಳುತ್ತದೆ"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "u17",
            title: isEn ? "17. Retailer Tracking" : "17. ರಿಟೇಲರ್ ಟ್ರ್ಯಾಕಿಂಗ್",
            icon: ICONS.barChart2,
            content: `
                <div class="space-y-6">
                    <p class="text-slate-600 font-medium">${isEn ? "The system tracks deep metrics for every business partner:" : "ಸಿಸ್ಟಮ್ ಪ್ರತಿ ವ್ಯವಹಾರ ಪಾಲುದಾರರಿಗಾಗಿ ಆಳವಾದ ಮೆಟ್ರಿಕ್‌ಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ:"}</p>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
                        ${(isEn ? ["Onboarded Customers", "Cards Sold", "Total Collections", "Active Customers", "Business Contribution"] : ["ನೋಂದಾಯಿತ ಗ್ರಾಹಕರು", "ಮಾರಾಟವಾದ ಕಾರ್ಡ್‌ಗಳು", "ಒಟ್ಟು ಸಂಗ್ರಹಣೆ", "ಸಕ್ರಿಯ ಗ್ರಾಹಕರು", "ವ್ಯವಹಾರ ಕೊಡುಗೆ"]).map(it => `
                            <div class="p-4 bg-white text-center space-y-2">
                                <p class="text-[8px] font-black uppercase text-slate-400 leading-tight">${it}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `
        },
        {
            id: "u18",
            title: isEn ? "18. Retailer Incentive System" : "18. ರಿಟೇಲರ್ ಇನ್ಸೆಂಟಿವ್ ವ್ಯವಸ್ಥೆ",
            icon: ICONS.banknote,
            content: `
                <div class="space-y-4">
                    <div class="p-6 bg-slate-50 border-l-4 border-slate-900">
                        <p class="text-sm font-bold text-slate-700">${isEn ? "Retailers do NOT automatically receive lottery benefits or referral commissions." : "ರಿಟೇಲರ್‌ಗಳು ಲಾಟರಿ ಪ್ರಯೋಜನಗಳನ್ನು ಅಥವಾ ರೆಫರಲ್ ಕಮಿಷನ್‌ಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪಡೆಯುವುದಿಲ್ಲ."}</p>
                    </div>
                    <p class="text-xs text-slate-500">${isEn ? "Admin decides incentives manually based on performance benchmarks like collection efficiency and sales volume." : "ಕಲೆಕ್ಷನ್ ದಕ್ಷತೆ ಮತ್ತು ಮಾರಾಟದ ಪ್ರಮಾಣದಂತಹ ಕಾರ್ಯಕ್ಷಮತೆಯ ಮಾನದಂಡಗಳ ಆಧಾರದ ಮೇಲೆ ಅಡ್ಮಿನ್ ಇನ್ಸೆಂಟಿವ್ ಅನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ ನಿರ್ಧರಿಸುತ್ತಾರೆ."}</p>
                </div>
            `
        },
        {
            id: "u19",
            title: isEn ? "19. Customer Dashboard" : "19. ಗ್ರಾಹಕರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
            icon: ICONS.layoutDashboard,
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-6 bg-white border border-slate-200 space-y-4">
                        <h5 class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Transparency Features" : "ಪಾರದರ್ಶಕತೆಯ ವೈಶಿಷ್ಟ್ಯಗಳು"}</h5>
                        <ul class="text-xs font-bold text-slate-600 space-y-2">
                            <li>• ${isEn ? "View Active Cards & Status" : "ಸಕ್ರಿಯ ಕಾರ್ಡ್‌ಗಳು ಮತ್ತು ಸ್ಥಿತಿ"}</li>
                            <li>• ${isEn ? "Check Due Payments" : "ಬಾಕಿ ಪಾವತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ"}</li>
                            <li>• ${isEn ? "View Payment History" : "ಪಾವತಿ ಇತಿಹಾಸ ವೀಕ್ಷಿಸಿ"}</li>
                        </ul>
                    </div>
                    <div class="p-6 bg-white border border-slate-200 space-y-4">
                        <h5 class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Earnings & Records" : "ಗಳಿಕೆ ಮತ್ತು ದಾಖಲೆಗಳು"}</h5>
                        <ul class="text-xs font-bold text-slate-600 space-y-2">
                            <li>• ${isEn ? "Track Referral Earnings" : "ರೆಫರಲ್ ಗಳಿಕೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ"}</li>
                            <li>• ${isEn ? "View Lottery Status" : "ಲಾಟರಿ ಸ್ಥಿತಿ ವೀಕ್ಷಿಸಿ"}</li>
                            <li>• ${isEn ? "Download Digital Receipts" : "ಡಿಜಿಟಲ್ ರಸೀದಿಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"}</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            id: "u20",
            title: isEn ? "20. Referral Tree Visualization" : "20. ರೆಫರಲ್ ಟ್ರೀ ದೃಶ್ಯೀಕರಣ",
            icon: ICONS.treePine,
            content: `
                <div class="space-y-6">
                    <p class="text-sm font-medium text-slate-600 leading-relaxed">
                        ${isEn ? "The system provides a visual hierarchy to understand the network structure and relationships." : "ನೆಟ್‌ವರ್ಕ್ ರಚನೆ ಮತ್ತು ಸಂಬಂಧಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಿಸ್ಟಮ್ ದೃಶ್ಯ ಶ್ರೇಣಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ."}
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="px-6 py-4 bg-slate-900 text-white rounded-sm">
                            <h5 class="text-[9px] font-black uppercase text-blue-400 mb-1">${isEn ? "Admin View" : "ಅಡ್ಮಿನ್ ವ್ಯೂ"}</h5>
                            <p class="text-xs font-bold">${isEn ? "Access to entire network hierarchy" : "ಸಂಪೂರ್ಣ ನೆಟ್‌ವರ್ಕ್ ಶ್ರೇಣಿಗೆ ಪ್ರವೇಶ"}</p>
                        </div>
                        <div class="px-6 py-4 bg-slate-900 text-white rounded-sm">
                            <h5 class="text-[9px] font-black uppercase text-blue-400 mb-1">${isEn ? "Customer View" : "ಗ್ರಾಹಕರ ವ್ಯೂ"}</h5>
                            <p class="text-xs font-bold">${isEn ? "Access to own referral chain & downline" : "ತಮ್ಮದೇ ಆದ ರೆಫರಲ್ ಚೈನ್ ಮತ್ತು ಡೌನ್‌ಲೈನ್‌ಗೆ ಪ್ರವೇಶ"}</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "u21",
            title: isEn ? "21. Notifications System" : "21. ಅಧಿಸೂಚನೆ ವ್ಯವಸ್ಥೆ",
            icon: ICONS.bell,
            content: `
                <div class="space-y-6">
                    <p class="text-sm font-medium text-slate-600 leading-relaxed">${isEn ? "The system automatically sends automated alerts via SMS, Email, and In-App channels." : "ಸಿಸ್ಟಮ್ ಸ್ವಯಂಚಾಲಿತವಾಗಿ SMS, ಇಮೇಲ್ ಮತ್ತು ಇನ್-ಆಪ್ ಚಾನೆಲ್‌ಗಳ ಮೂಲಕ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಕಳುಹಿಸುತ್ತದೆ."}</p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                        ${(isEn ? ["Payment Reminders", "Lottery Results", "Earnings Updates", "Approval Alerts", "Password Resets"] : ["ಪಾವತಿ ಜ್ಞಾಪನೆಗಳು", "ಲಾಟರಿ ಫಲಿತಾಂಶಗಳು", "ಗಳಿಕೆ ನವೀಕರಣಗಳು", "ಅನುಮೋದನೆ ಎಚ್ಚರಿಕೆಗಳು", "ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಕೆ"]).map(it => `
                            <div class="p-3 bg-slate-50 border border-slate-100 text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
                                <div class="w-1 h-1 bg-blue-400"></div>
                                ${it}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `
        },
        {
            id: "u22",
            title: isEn ? "22. Digital Receipts" : "22. ಡಿಜಿಟಲ್ ರಸೀದಿಗಳು",
            icon: ICONS.stamp,
            content: `
                <div class="space-y-6">
                    <div class="p-6 bg-slate-50 border-l-4 border-slate-900">
                        <p class="text-sm font-bold text-slate-700">${isEn ? "After payment approval, a digital receipt is generated and stored securely in the system." : "ಪಾವತಿ ಅನುಮೋದನೆಯ ನಂತರ, ಡಿಜಿಟಲ್ ರಸೀದಿ ರಚನೆಯಾಗುತ್ತದೆ ಮತ್ತು ಸಿಸ್ಟಮ್‌ನಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ."}</p>
                    </div>
                    <div class="flex gap-4">
                        <div class="p-4 bg-white border border-slate-200 grow text-center">
                            <span class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Download Support" : "ಡೌನ್‌ಲೋಡ್ ಬೆಂಬಲ"}</span>
                        </div>
                        <div class="p-4 bg-white border border-slate-200 grow text-center">
                            <span class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "No More Paper" : "ಹೆಚ್ಚಿನ ಕಾಗದದ ಅಗತ್ಯವಿಲ್ಲ"}</span>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "u23",
            title: isEn ? "23. Reports & Analytics" : "23. ವರದಿಗಳು ಮತ್ತು ಅನಾಲಿಟಿಕ್ಸ್",
            icon: ICONS.barChart2,
            content: `
                <div class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="p-4 border border-slate-200 space-y-3">
                            <h6 class="text-[10px] font-black uppercase text-slate-400">${isEn ? "Admin" : "ಅಡ್ಮಿನ್"}</h6>
                            <p class="text-[9px] font-bold text-slate-600 uppercase">${isEn ? "Revenue, Collections, Lottery, Referrals, Performance" : "ಆದಾಯ, ಸಂಗ್ರಹಣೆ, ಲಾಟರಿ, ರೆಫರಲ್‌ಗಳು, ಪ್ರದರ್ಶನ"}</p>
                        </div>
                        <div class="p-4 border border-slate-200 space-y-3">
                            <h6 class="text-[10px] font-black uppercase text-slate-400">${isEn ? "Retailer" : "ರಿಟೇಲರ್"}</h6>
                            <p class="text-[9px] font-bold text-slate-600 uppercase">${isEn ? "Sales & Collection Reports" : "ಮಾರಾಟ ಮತ್ತು ಸಂಗ್ರಹಣೆ ವರದಿಗಳು"}</p>
                        </div>
                        <div class="p-4 border border-slate-200 space-y-3">
                            <h6 class="text-[10px] font-black uppercase text-slate-400">${isEn ? "Customer" : "ಗ್ರಾಹಕ"}</h6>
                            <p class="text-[9px] font-bold text-slate-600 uppercase">${isEn ? "Payment & Earnings Reports" : "ಪಾವತಿ ಮತ್ತು ಗಳಿಕೆ ವರದಿಗಳು"}</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "u24",
            title: isEn ? "24. Security Features" : "24. ಭದ್ರತಾ ವೈಶಿಷ್ಟ್ಯಗಳು",
            icon: ICONS.shieldCheck,
            content: `
                <div class="space-y-3">
                    ${(isEn ? ["Secure Login", "OTP Verification", "Role-Based Access", "Aadhaar Protection", "Activity Tracking"] : ["ಸುರಕ್ಷಿತ ಲಾಗಿನ್", "OTP ಪರಿಶೀಲನೆ", "ಪಾತ್ರ-ಆಧಾರಿತ ಪ್ರವೇಶ", "ಆಧಾರ್ ರಕ್ಷಣೆ", "ಚಟುವಟಿಕೆ ಟ್ರ್ಯಾಕಿಂಗ್"]).map(it => `
                        <div class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 font-mono text-[9px] font-black uppercase text-slate-500">
                            <div class="w-1.5 h-1.5 bg-green-500"></div>
                            ${it}
                        </div>
                    `).join('')}
                </div>
            `
        },
        {
            id: "u25",
            title: isEn ? "25. Overall Purpose" : "25. ಒಟ್ಟಾರೆ ಉದ್ದೇಶ",
            icon: ICONS.checkCircle2,
            content: `
                <div class="p-10 bg-[#1E3A8A] text-white space-y-6 text-center">
                    <h4 class="text-2xl font-black uppercase italic tracking-tighter">${isEn ? "Digital Backbone of Aryan Finance" : "ಆರ್ಯನ್ ಫೈನಾನ್ಸ್‌ನ ಡಿಜಿಟಲ್ ಬೆನ್ನೆಲುಬು"}</h4>
                    <div class="flex flex-wrap justify-center gap-2">
                        ${(isEn ? ["Scalability", "Transparency", "Centralized Monitoring", "Manual Work Reduction"] : ["ಸ್ಕೇಲೆಬಿಲಿಟಿ", "ಪಾರದರ್ಶಕತೆ", "ಕೇಂದ್ರೀಕೃತ ಮೇಲ್ವಿಚಾರಣೆ", "ಹಸ್ತಚಾಲಿತ ಕೆಲಸದ ಕಡಿತ"]).map(it => `
                            <span class="px-3 py-1 bg-white/10 border border-white/20 text-[9px] font-black uppercase">${it}</span>
                        `).join('')}
                    </div>
                </div>
            `
        }
    ];
};

const getBrdSections = (lang) => {
    const isEn = lang === 'en';
    return [
        {
            id: "doc-info",
            title: isEn ? "Document Information" : "ದಾಖಲೆ ಮಾಹಿತಿ",
            icon: ICONS.fileText,
            content: `
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-xs">
                        <thead>
                            <tr class="bg-slate-100 uppercase tracking-widest text-[10px] font-black text-slate-500">
                                <th class="p-3 text-left border border-slate-200">${isEn ? "Item" : "ಅಂಶ"}</th>
                                <th class="p-3 text-left border border-slate-200">${isEn ? "Details" : "ವಿವರಗಳು"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${[
                                { k: isEn ? "Project Name" : "ಯೋಜನೆಯ ಹೆಸರು", v: "Aryan Finance Web Application" },
                                { k: isEn ? "Document Type" : "ದಾಖಲೆ ಪ್ರಕಾರ", v: "Business Requirements Document (BRD)" },
                                { k: isEn ? "Version" : "ಆವೃತ್ತಿ", v: "2.1" },
                                { k: isEn ? "Prepared For" : "ಇವರಿಗಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ", v: "Aryan Finance" },
                                { k: isEn ? "Platform Type" : "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಪ್ರಕಾರ", v: "Web Application" },
                                { k: isEn ? "Target Users" : "ಗುರಿ ಬಳಕೆದಾರರು", v: "Admin, Retailers, Customers" }
                            ].map(row => `
                                <tr class="hover:bg-slate-50 transition-colors">
                                    <td class="p-3 border border-slate-200 font-bold text-slate-600">${row.k}</td>
                                    <td class="p-3 border border-slate-200 font-mono text-[#1E3A8A]">${row.v}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            id: "exec-summary",
            title: isEn ? "1. Executive Summary" : "1. ಕಾರ್ಯನಿರ್ವಾಹಕ ಸಾರಾಂಶ",
            icon: ICONS.target,
            content: `
                <div class="space-y-6">
                    <p class="text-slate-600 leading-relaxed font-medium">
                        ${isEn ? 
                            "Aryan Finance is a subscription-based financial management and lottery platform where customers subscribe using membership cards and pay monthly installments to participate in a lottery and reward system." :
                            "ಆರ್ಯನ್ ಫೈನಾನ್ಸ್ ಚಂದಾದಾರಿಕೆ ಆಧಾರಿತ ಹಣಕಾಸು ನಿರ್ವಹಣೆ ಮತ್ತು ಲಾಟರಿ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಆಗಿದ್ದು, ಇಲ್ಲಿ ಗ್ರಾಹಕರು ಸದಸ್ಯತ್ವ ಕಾರ್ಡ್‌ಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಚಂದಾದಾರರಾಗುತ್ತಾರೆ ಮತ್ತು ಲಾಟರಿ ಹಾಗೂ ಬಹುಮಾನ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಭಾಗವಹಿಸಲು ಮಾಸಿಕ ಕಂತುಗಳನ್ನು ಪಾವತಿಸುತ್ತಾರೆ."}
                    </p>
                    <div class="p-6 bg-slate-50 border border-slate-100">
                        <h4 class="text-[10px] font-black text-[#1E3A8A] uppercase tracking-widest mb-4">${isEn ? "The platform is designed to manage:" : "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಅನ್ನು ಇವುಗಳನ್ನು ನಿರ್ವಹಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ:"}</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            ${(isEn ? [
                                "Customer onboarding", "Retailer operations", "Card inventory distribution",
                                "Monthly installment collections", "Referral earnings", "Lottery processing",
                                "Withdrawal management", "Notifications and digital receipts"
                            ] : [
                                "ಗ್ರಾಹಕರ ನೋಂದಣಿ", "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳ ಕಾರ್ಯಾಚರಣೆಗಳು", "ಕಾರ್ಡ್ ದಾಸ್ತಾನು ವಿತರಣೆ",
                                "ಮಾಸಿಕ ಕಂತು ಸಂಗ್ರಹಣೆಗಳು", "ರೆಫರಲ್ ಗಳಿಕೆಗಳು", "ಲಾಟರಿ ಪ್ರಕ್ರಿಯೆ",
                                "ಹಿಂಪಡೆಯುವಿಕೆ ನಿರ್ವಹಣೆ", "ಅಧಿಸೂಚನೆಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ರಸೀದಿಗಳು"
                            ]).map(it => `
                                <div class="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-tight">
                                    <div class="w-1.5 h-1.5 bg-[#0ea5e9]"></div>
                                    ${it}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "business-objectives",
            title: isEn ? "2. Business Objectives" : "2. ವ್ಯವಹಾರ ಉದ್ದೇಶಗಳು",
            icon: ICONS.trendingUp,
            content: `
                <div class="space-y-4">
                    <ul class="space-y-3">
                        ${(isEn ? [
                            "Digitize subscription and lottery operations",
                            "Simplify customer onboarding",
                            "Streamline retailer-based sales management",
                            "Automate referral commission tracking",
                            "Improve transparency in collections and payouts",
                            "Reduce manual paperwork and errors",
                            "Centralize monitoring and reporting",
                            "Provide better operational control for Admin"
                        ] : [
                            "ಚಂದಾದಾರಿಕೆ ಮತ್ತು ಲಾಟರಿ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಡಿಜಿಟಲೀಕರಣಗೊಳಿಸುವುದು",
                            "ಗ್ರಾಹಕರ ನೋಂದಣಿಯನ್ನು ಸರಳಗೊಳಿಸುವುದು",
                            "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಆಧಾರಿತ ಮಾರಾಟ ನಿರ್ವಹಣೆಯನ್ನು ಸುಗಮಗೊಳಿಸುವುದು",
                            "ರೆಫರಲ್ ಕಮಿಷನ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಅನ್ನು ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸುವುದು",
                            "ಸಂಗ್ರಹಣೆ ಮತ್ತು ಪಾವತಿಗಳಲ್ಲಿ ಪಾರದರ್ಶಕತೆಯನ್ನು ಸುಧಾರಿಸುವುದು",
                            "ಹಸ್ತಚಾಲಿತ ದಾಖಲೆ ಕೆಲಸ ಮತ್ತು ತಪ್ಪುಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು",
                            "ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ವರದಿಯನ್ನು ಕೇಂದ್ರೀಕೃತಗೊಳಿಸುವುದು",
                            "ಅಡ್ಮಿನ್ ತಂಡಕ್ಕೆ ಉತ್ತಮ ಕಾರ್ಯಾಚರಣೆಯ ನಿಯಂತ್ರಣ ಒದಗಿಸುವುದು"
                        ]).map(it => `
                            <li class="flex items-start gap-3 p-4 bg-white border border-slate-200">
                                <div class="shrink-0 mt-1">${ICONS.checkCircle2}</div>
                                <span class="text-sm font-medium text-slate-700">${it}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `
        },
        {
            id: "project-scope",
            title: isEn ? "3. Project Scope" : "3. ಪ್ರಾಜೆಕ್ಟ್ ವ್ಯಾಪ್ತಿ",
            icon: ICONS.workflow,
            content: `
                <div class="space-y-8">
                    <div class="space-y-4">
                        <h4 class="text-xs font-black uppercase tracking-widest text-[#0ea5e9]">3.1 In Scope</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                            <div class="p-6 bg-white space-y-3">
                                <h5 class="text-[10px] font-black text-[#1E3A8A] uppercase underline">${isEn ? "Admin Operations" : "ಅಡ್ಮಿನ್ ಕಾರ್ಯಾಚರಣೆಗಳು"}</h5>
                                <p class="text-[10px] text-slate-500 leading-tight">${isEn ? "Customer/Retailer management, Card generation, Lottery, Payouts, Reports." : "ಗ್ರಾಹಕ/ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ನಿರ್ವಹಣೆ, ಕಾರ್ಡ್ ಜನರೇಟ್ ಮಾಡುವುದು, ಲಾಟರಿ, ಪಾವತಿಗಳು, ವರದಿಗಳು."}</p>
                            </div>
                            <div class="p-6 bg-white space-y-3">
                                <h5 class="text-[10px] font-black text-[#1E3A8A] uppercase underline">${isEn ? "Retailer Operations" : "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಕಾರ್ಯಾಚರಣೆಗಳು"}</h5>
                                <p class="text-[10px] text-slate-500 leading-tight">${isEn ? "Customer onboarding, Card assignment, Payment entry, Inventory tracking." : "ಗ್ರಾಹಕರ ನೋಂದಣಿ, ಕಾರ್ಡ್ ಹಂಚಿಕೆ, ಪಾವತಿ ಪ್ರವೇಶ, ಇನ್ವೆಂಟರಿ ಟ್ರ್ಯಾಕಿಂಗ್."}</p>
                            </div>
                            <div class="p-6 bg-white space-y-3">
                                <h5 class="text-[10px] font-black text-[#1E3A8A] uppercase underline">${isEn ? "Customer Operations" : "ಗ್ರಾಹಕ ಕಾರ್ಯಾಚರಣೆಗಳು"}</h5>
                                <p class="text-[10px] text-slate-500 leading-tight">${isEn ? "Login tracking, Referral earnings, Receipt downloads, Referral tree." : "ಲಾಗಿನ್ ಟ್ರ್ಯಾಕಿಂಗ್, ರೆಫರಲ್ ಗಳಿಕೆಗಳು, ರಸೀದಿ ಡೌನ್‌ಲೋಡ್, ರೆಫರಲ್ ಟ್ರೀ."}</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 bg-red-50 border border-red-100">
                        <h4 class="text-xs font-black uppercase tracking-widest text-red-600 mb-2">3.2 Out of Scope</h4>
                        <p class="text-xs text-red-800">${isEn ? "Mobile applications, Online payment gateway, International operations, AI systems." : "ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು, ಆನ್‌ಲೈನ್ ಪಾವತಿ ಗೇಟ್‌ವೇ, ಅಂತರರಾಷ್ಟ್ರೀಯ ಕಾರ್ಯಾಚರಣೆಗಳು, AI ವ್ಯವಸ್ಥೆಗಳು."}</p>
                    </div>
                </div>
            `
        },
        {
            id: "user-roles",
            title: isEn ? "4. User Roles & Access Control" : "4. ಬಳಕೆದಾರರ ಪಾತ್ರಗಳು ಮತ್ತು ಪ್ರವೇಶ ನಿಯಂತ್ರಣ",
            icon: ICONS.users,
            content: `
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-xs">
                        <thead>
                            <tr class="bg-[#1E3A8A] text-white uppercase tracking-widest text-[8px] font-black">
                                <th class="p-3 text-left border border-blue-900">${isEn ? "Role" : "ಪಾತ್ರ"}</th>
                                <th class="p-3 text-left border border-blue-900">${isEn ? "Description" : "ವಿವರಣೆ"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${[
                                { r: isEn ? "Admin" : "ಅಡ್ಮಿನ್", d: isEn ? "Full access and control over the system" : "ಸಿಸ್ಟಂನ ಮೇಲೆ ಸಂಪೂರ್ಣ ಪ್ರವೇಶ ಮತ್ತು ನಿಯಂತ್ರಣ" },
                                { r: isEn ? "Retailer" : "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ", d: isEn ? "Limited operational access for onboarding and card sales" : "ನೋಂದಣಿ ಮತ್ತು ಕಾರ್ಡ್ ಮಾರಾಟಕ್ಕಾಗಿ ಸೀಮಿತ ಕಾರ್ಯಾಚರಣೆಯ ಪ್ರವೇಶ" },
                                { r: isEn ? "Customer" : "ಗ್ರಾಹಕ", d: isEn ? "Self-service access for subscriptions and earnings" : "ಚಂದಾದಾರಿಕೆಗಳು ಮತ್ತು ಗಳಿಕೆಗಾಗಿ ಸ್ವಯಂ-ಸೇವೆ ಪ್ರವೇಶ" }
                            ].map(row => `
                                <tr>
                                    <td class="p-3 border border-slate-200 font-black text-[#1E3A8A]">${row.r}</td>
                                    <td class="p-3 border border-slate-200 text-slate-500">${row.d}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            id: "functional-admin",
            title: isEn ? "5.1 Admin Module" : "5.1 ಅಡ್ಮಿನ್ ಮಾಡ್ಯೂಲ್",
            icon: ICONS.settings,
            content: `
                <div class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-5 border border-slate-200 space-y-3">
                            <h4 class="text-xs font-black uppercase text-[#1E3A8A]">5.1.1 Dashboard</h4>
                            <p class="text-[10px] text-slate-500">${isEn ? "Total Metrics: Customers, Retailers, Active/Closed/Matured Cards, Collections, Payouts." : "ಒಟ್ಟು ಮೆಟ್ರಿಕ್‌ಗಳು: ಗ್ರಾಹಕರು, ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು, ಸಕ್ರಿಯ/ಮುಚ್ಚಿದ ಕಾರ್ಡ್‌ಗಳು, ಸಂಗ್ರಹಣೆಗಳು, ಪಾವತಿಗಳು."}</p>
                        </div>
                        <div class="p-5 border border-slate-200 space-y-3">
                            <h4 class="text-xs font-black uppercase text-[#1E3A8A]">5.1.2 Retailer Management</h4>
                            <p class="text-[10px] text-slate-500">${isEn ? "Add/Edit/Activate/Deactivate retailers, Reset credentials, SMS/Email notifications." : "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳನ್ನು ಸೇರಿಸುವುದು/ಎಡಿಟ್ ಮಾಡುವುದು/ಸಕ್ರಿಯಗೊಳಿಸುವುದು/ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುವುದು, ಕ್ರೆಡೆನ್ಶಿಯಲ್‌ಗಳನ್ನು ಮರುಹೊಂದಿಸುವುದು."}</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "referral-system",
            title: isEn ? "5.1.6 Referral System" : "5.1.6 ರೆಫರಲ್ ವ್ಯವಸ್ಥೆ",
            icon: ICONS.share2,
            content: `
                <div class="p-8 bg-white border border-slate-200 space-y-6">
                    <p class="text-sm font-bold text-[#1E3A8A]">${isEn ? "Every card acts as an independent referral identity." : "ಪ್ರತಿ ಕಾರ್ಡ್ ಸ್ವತಂತ್ರ ರೆಫರಲ್ ಐಡೆಂಟಿಟಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ."}</p>
                    <div class="p-4 bg-slate-50 text-[10px] space-y-2 border-l-2 border-[#1E3A8A]">
                        <p><strong>${isEn ? "Level 1 (Direct):" : "ಹಂತ 1 (ನೇರ):"}</strong> ${isEn ? "₹350 (Month 1), ₹75 (Month 2-12)" : "₹350 (ತಿಂಗಳು 1), ₹75 (ತಿಂಗಳು 2-12)"}</p>
                        <p><strong>${isEn ? "Level 2 (Indirect):" : "ಹಂತ 2 (ಪರೋಕ್ಷ):"}</strong> ${isEn ? "₹25/month" : "₹25/ತಿಂಗಳಿಗೆ"}</p>
                    </div>
                </div>
            `
        },
        {
            id: "lottery-mgmt",
            title: isEn ? "5.1.7 Lottery Management" : "5.1.7 ಲಾಟರಿ ನಿರ್ವಹಣೆ",
            icon: ICONS.trophy,
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-3">
                        <h4 class="text-xs font-black uppercase tracking-widest text-[#1E3A8A]">${isEn ? "Rules" : "ನಿಯಮಗಳು"}</h4>
                        <p class="text-xs leading-relaxed text-slate-600">${isEn ? "₹1000/month installment for 12 months. Early winner closes card; no more installments." : "12 ತಿಂಗಳವರೆಗೆ ಪ್ರತಿ ತಿಂಗಳಿಗೆ ₹1000 ಕಂತು. ಲಾಟರಿ ಗೆದ್ದರೆ ಕಾರ್ಡ್ ಮುಚ್ಚಲ್ಪಡುತ್ತದೆ; ಹೆಚ್ಚಿನ ಕಂತುಗಳಿಲ್ಲ."}</p>
                    </div>
                    <div class="p-5 bg-[#1E3A8A] text-white">
                        <h4 class="text-[10px] font-black uppercase mb-3 text-blue-400">${isEn ? "Actions" : "ಕ್ರಮಗಳು"}</h4>
                        <p class="text-[10px] leading-tight">${isEn ? "Conduct monthly draws, Declare winners, Publish results, Manage winner prize records." : "ಮಾಸಿಕ ಡ್ರಾ ನಡೆಸುವುದು, ವಿಜೇತರನ್ನು ಘೋಷಿಸುವುದು, ಫಲಿತಾಂಶಗಳನ್ನು ಪ್ರಕಟಿಸುವುದು."}</p>
                    </div>
                </div>
            `
        },
        {
            id: "payment-mgmt",
            title: isEn ? "5.1.8 Payment Management" : "5.1.8 ಪಾವತಿ ನಿರ್ವಹಣೆ",
            icon: ICONS.banknote,
            content: `
                <div class="space-y-4">
                    <p class="text-xs text-slate-500">${isEn ? "All payment records should be maintained centrally in the system." : "ಎಲ್ಲಾ ಪಾವತಿ ದಾಖಲೆಗಳನ್ನು ಸಿಸ್ಟಂನಲ್ಲಿ ಕೇಂದ್ರೀಕೃತವಾಗಿ ನಿರ್ವಹಿಸಬೇಕು."}</p>
                    <div class="p-6 bg-slate-50 rounded-sm border border-slate-100">
                        <h5 class="text-[10px] font-black mb-3 uppercase tracking-widest text-[#1E3A8A]">${isEn ? "Payment Workflow" : "ಪಾವತಿ ಕೆಲಸದ ಹರಿವು"}</h5>
                        <ul class="space-y-2 text-[10px]">
                            <li class="flex items-center gap-2">
                                <div class="w-1 h-1 bg-[#1E3A8A]"></div>
                                ${isEn ? "Retailer collects payment" : "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಪಾವತಿ ಸಂಗ್ರಹಿಸುತ್ತಾರೆ"}
                            </li>
                            <li class="flex items-center gap-2">
                                <div class="w-1 h-1 bg-[#1E3A8A]"></div>
                                ${isEn ? "Retailer enters payment details" : "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಪಾವತಿ ವಿವರಗಳನ್ನು ನಮೂದಿಸುತ್ತಾರೆ"}
                            </li>
                            <li class="flex items-center gap-2">
                                <div class="w-1 h-1 bg-[#1E3A8A]"></div>
                                ${isEn ? "Admin verifies and approves" : "ಅಡ್ಮಿನ್ ಪರಿಶೀಲಿಸಿ ಅನುಮೋದಿಸುತ್ತಾರೆ"}
                            </li>
                            <li class="flex items-center gap-2">
                                <div class="w-1 h-1 bg-[#1E3A8A]"></div>
                                ${isEn ? "Receipt generated and commission calculated" : "ರಸೀದಿ ಜನರೇಟ್ ಆಗುತ್ತದೆ ಮತ್ತು ಕಮಿಷನ್ ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ"}
                            </li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            id: "functional-retailer",
            title: isEn ? "5.2 Retailer Module" : "5.2 ರಿಟೇಲರ್ ಮಾಡ್ಯೂಲ್",
            icon: ICONS.users,
            content: `
                <div class="space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 bg-white border border-slate-200 space-y-4">
                            <h4 class="text-xs font-black uppercase text-[#1E3A8A] border-b pb-2">5.2.1 Retailer Dashboard</h4>
                            <p class="text-[10px] text-slate-500 uppercase font-bold">${isEn ? "View summary of assignments and collections." : "ವಾಣಿಜ್ಯ ಚಟುವಟಿಕೆಗಳ ಸಾರಾಂಶ ವೀಕ್ಷಿಸಿ."}</p>
                            <div class="grid grid-cols-2 gap-2">
                                ${(isEn ? 
                                    ["Assigned Cards", "Sold Cards", "Unsold Cards", "Monthly Collections", "Pending Collections", "Customer Stats", "Performance Summary"] :
                                    ["ಹಂಚಿಕೆಯಾದ ಕಾರ್ಡ್‌ಗಳು", "ಮಾರಾಟವಾದ ಕಾರ್ಡ್‌ಗಳು", "ಮಾರಾಟವಾಗದ ಕಾರ್ಡ್‌ಗಳು", "ಮಾಸಿಕ ಸಂಗ್ರಹಣೆ", "ಬಾಕಿ ಸಂಗ್ರಹಣೆ", "ಗ್ರಾಹಕ ಅಂಕಿಅಂಶ", "ಪ್ರದರ್ಶನ ಸಾರಾಂಶ"]
                                ).map(it => `<div class="p-2 bg-slate-50 text-[8px] font-black border border-slate-100">${it}</div>`).join('')}
                            </div>
                        </div>
                        <div class="p-6 bg-slate-50 border border-slate-200 space-y-4">
                            <h4 class="text-xs font-black uppercase text-[#1E3A8A] border-b border-[#1E3A8A] pb-2">5.2.2 Customer Tracking</h4>
                            <p class="text-[10px] text-slate-600 leading-relaxed italic">
                                ${isEn ? "Automatic linkage of Retailer ID with customer profile, assigned card, and collection records." : "ಗ್ರಾಹಕರ ವ್ಯಕ್ತಿಚಿತ್ರ, ಹಂಚಿಕೆಯಾದ ಕಾರ್ಡ್ ಮತ್ತು ಸಂಗ್ರಹಣೆ ದಾಖಲೆಗಳೊಂದಿಗೆ ರಿಟೇಲರ್ ಐಡಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಲಿಂಕ್ ಆಗುತ್ತದೆ."}
                            </p>
                            <table class="w-full text-[8px] font-bold border-collapse">
                                <tr class="bg-slate-200 uppercase"><th class="p-1 border border-white">Field</th><th class="p-1 border border-white">Description</th></tr>
                                <tr><td class="p-1 border border-white uppercase">${isEn ? "Onboarded By" : "ನೋಂದಾಯಿಸಿದವರು"}</td><td class="p-1 border border-white text-blue-600">Retailer ID</td></tr>
                                <tr><td class="p-1 border border-white uppercase">${isEn ? "Assigned Card" : "ಹಂಚಿಕೆಯಾದ ಕಾರ್ಡ್"}</td><td class="p-1 border border-white text-blue-600">Locked to Customer</td></tr>
                            </table>
                        </div>
                    </div>

                    <div class="p-8 border-4 border-[#1E3A8A] space-y-6">
                        <h4 class="text-sm font-black uppercase tracking-widest text-[#1E3A8A]">5.2.3 Retailer Performance & Incentives</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="space-y-4">
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">${isEn ? "Tracking Metrics" : "ಟ್ರ್ಯಾಕಿಂಗ್ ಮೆಟ್ರಿಕ್‌ಗಳು"}</p>
                                <ul class="space-y-1 text-[10px] font-bold uppercase text-slate-600">
                                    ${(isEn ? 
                                        ["Total Customers Added", "Total Cards Sold", "Monthly Collections", "Payment Approval Rate", "Customer Retention"] :
                                        ["ಒಟ್ಟು ಸೇರಿಸಿದ ಗ್ರಾಹಕರು", "ಮಾರಾಟವಾದ ಕಾರ್ಡ್‌ಗಳು", "ಮಾಸಿಕ ಸಂಗ್ರಹಣೆ", "ಪಾವತಿ ಅನುಮೋದನೆ ದರ", "ಗ್ರಾಹಕ ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ"]
                                    ).map(it => `<li class="flex items-center gap-2"><div class="w-1 h-1 bg-[#0ea5e9]"></div>${it}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="p-6 bg-[#1E3A8A] text-white space-y-4">
                                <h5 class="text-[10px] font-black uppercase text-blue-300">5.2.4 Incentive Rules</h5>
                                <p class="text-[10px] leading-tight font-medium opacity-80">
                                    ${isEn ? "NO Referral Commission. NO Lottery Prizes. Manual incentives based on sales, collection efficiency, and active customer base." : "ರೆಫರಲ್ ಕಮಿಷನ್ ಇಲ್ಲ. ಲಾಟರಿ ಬಹುಮಾನಗಳಿಲ್ಲ. ಮಾರಾಟ ಮತ್ತು ಸಂಗ್ರಹಣಾ ದಕ್ಷತೆಯ ಮೇಲೆ ಹಸ್ತಚಾಲಿತ ಪ್ರೋತ್ಸಾಹಕಗಳು."}
                                </p>
                                <div class="p-2 border border-blue-400 text-[8px] font-black uppercase">
                                    ${isEn ? "Admin Controls: View Reports, Approve Bonuses, Track History" : "ಅಡ್ಮಿನ್ ನಿಯಂತ್ರಣಗಳು: ವರದಿ ವೀಕ್ಷಣೆ, ಬೋನಸ್ ಅನುಮೋದನೆ, ಇತಿಹಾಸ ಟ್ರ್ಯಾಕಿಂಗ್"}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-6 bg-white border border-slate-200">
                            <h4 class="text-xs font-black uppercase text-[#1E3A8A] mb-4">5.2.5 Payment Entry</h4>
                            <p class="text-[10px] text-slate-500 mb-4">${isEn ? "Retailers submit collection details and upload proofs for Admin approval." : "ರಿಟೇಲರ್‌ಗಳು ಸಂಗ್ರಹಣೆ ವಿವರಗಳನ್ನು ಸಲ್ಲಿಸಿ ಪುರಾವೆಗಳನ್ನು ಅಡ್ಮಿನ್ ಅನುಮೋದನೆಗೆ ಅಪ್‌ಲೋಡ್ ಮಾಡುತ್ತಾರೆ."}</p>
                            <div class="flex gap-2">
                                <span class="px-2 py-1 bg-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-400">Entry</span>
                                <span class="px-2 py-1 bg-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-400">Upload</span>
                                <span class="px-2 py-1 bg-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-400">Verify</span>
                            </div>
                        </div>
                        <div class="p-6 bg-white border border-slate-200">
                            <h4 class="text-xs font-black uppercase text-[#1E3A8A] mb-4">5.2.6 Withdrawal Requests</h4>
                            <p class="text-[10px] text-slate-500 mb-4">${isEn ? "Retailers can request payout of their incentives and track status." : "ರಿಟೇಲರ್‌ಗಳು ತಮ್ಮ ಇನ್ಸೆಂಟಿವ್‌ಗಳಿಗಾಗಿ ವಿನಂತಿ ಸಲ್ಲಿಸಬಹುದು ಮತ್ತು ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಬಹುದು."}</p>
                            <div class="flex gap-2">
                                <span class="px-2 py-1 bg-green-50 text-green-600 text-[8px] font-black uppercase tracking-widest italic">Submit Request</span>
                                <span class="px-2 py-1 bg-green-50 text-green-600 text-[8px] font-black uppercase tracking-widest italic">View History</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "functional-customer",
            title: isEn ? "5.3 Customer Module" : "5.3 ಗ್ರಾಹಕ ಮಾಡ್ಯೂಲ್",
            icon: ICONS.layoutDashboard,
            content: `
                <div class="space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 bg-[#1E3A8A] text-white space-y-4 shadow-xl">
                            <h4 class="text-xs font-black uppercase text-blue-300 border-b border-blue-800 pb-2">5.3.1 Customer Dashboard</h4>
                            <div class="grid grid-cols-2 gap-4">
                                ${(isEn ? 
                                    ["Active Cards", "Due Payments", "Payment History", "Referral Earnings", "Lottery Status", "Wallet Balance"] :
                                    ["ಸಕ್ರಿಯ ಕಾರ್ಡ್‌ಗಳು", "ಬಾಕಿ ಪಾವತಿ", "ಪಾವತಿ ಇತಿಹಾಸ", "ರೆಫರಲ್ ಗಳಿಕೆಗಳು", "ಲಾಟರಿ ಸ್ಥಿತಿ", "ವಾಲೆಟ್ ಬ್ಯಾಲೆನ್ಸ್"]
                                ).map(it => `
                                    <div class="space-y-1">
                                        <div class="text-[8px] font-black uppercase tracking-widest opacity-50">${it}</div>
                                        <div class="w-full h-1 bg-blue-800"></div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="p-6 bg-white border border-slate-200 space-y-4">
                            <h4 class="text-xs font-black uppercase text-[#1E3A8A] border-b pb-2">5.3.2 Card Management</h4>
                            <p class="text-[10px] text-slate-500 leading-tight">
                                ${isEn ? "Track individual card progress, maturity dates, and installment status." : "ವೈಯಕ್ತಿಕ ಕಾರ್ಡ್ ಪ್ರಗತಿ, ಮೆಚ್ಯೂರಿಟಿ ದಿನಾಂಕಗಳು ಮತ್ತು ಕಂತು ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ."}
                            </p>
                            <div class="p-4 bg-slate-50 border border-slate-100 flex items-center justify-between">
                                <span class="text-[10px] font-black uppercase text-slate-400">Maturity Info</span>
                                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <h4 class="text-xs font-black uppercase text-[#1E3A8A] tracking-widest pl-4 border-l-4 border-[#0ea5e9]">5.3.3 Referral Tracking (Detailed)</h4>
                        <div class="bg-white border border-slate-200 overflow-hidden">
                            <div class="p-4 bg-slate-50 border-b border-slate-200">
                                <p class="text-[10px] font-bold text-slate-600">${isEn ? "Customers track earnings and downline specifically linked to each card." : "ಗ್ರಾಹಕರು ಪ್ರತಿ ಕಾರ್ಡ್‌ಗೆ ಲಿಂಕ್ ಮಾಡಲಾದ ಗಳಿಕೆ ಮತ್ತು ಡೌನ್‌ಲೈನ್‌ಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಾರೆ."}</p>
                            </div>
                            <div class="overflow-x-auto">
                                <table class="w-full text-xs text-left">
                                    <thead class="bg-slate-100 text-[9px] font-black uppercase text-slate-400">
                                        <tr>
                                            <th class="p-3">${isEn ? "Referring Card" : "ರೆಫರಲ್ ಕಾರ್ಡ್"}</th>
                                            <th class="p-3">${isEn ? "Referred Customer" : "ರೆಫರ್ ಆದ ಗ್ರಾಹಕ"}</th>
                                            <th class="p-3">${isEn ? "Earnings" : "ಗಳಿಕೆ"}</th>
                                            <th class="p-3">${isEn ? "Status" : "ಸ್ಥಿತಿ"}</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-[10px] font-bold text-slate-600">
                                        <tr class="border-t border-slate-50">
                                            <td class="p-3 font-mono">ARY1001</td>
                                            <td class="p-3 uppercase">Ravi Kumar</td>
                                            <td class="p-3 text-green-600">₹825</td>
                                            <td class="p-3 text-blue-500">ACTIVE</td>
                                        </tr>
                                        <tr class="border-t border-slate-50">
                                            <td class="p-3 font-mono">ARY2001</td>
                                            <td class="p-3 uppercase">Suresh</td>
                                            <td class="p-3 text-green-600">₹450</td>
                                            <td class="p-3 text-blue-500">ACTIVE</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="p-6 bg-slate-50 border border-slate-200">
                        <h4 class="text-xs font-black uppercase text-[#1E3A8A] mb-4">5.3.4 Receipt Downloads</h4>
                        <div class="flex items-center gap-6">
                            <div class="p-4 bg-white border border-slate-100 shadow-sm grow">
                                <p class="text-[10px] font-bold text-slate-500 leading-relaxed uppercase">
                                    ${isEn ? "Self-service portal to download official receipts and view complete digital payment history." : "ಅಧಿಕೃತ ರಸೀದಿಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಮತ್ತು ಸಂಪೂರ್ಣ ಡಿಜಿಟಲ್ ಪಾವತಿ ಇತಿಹಾಸವನ್ನು ವೀಕ್ಷಿಸಲು ಸ್ವಯಂ-ಸೇವಾ ಪೋರ್ಟಲ್."}
                                </p>
                            </div>
                            <div class="w-12 h-12 bg-[#1E3A8A] flex items-center justify-center text-white shrink-0">
                                ${ICONS.stamp}
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "referral-tree",
            title: isEn ? "6. Referral Tree Visualization" : "6. ರೆಫರಲ್ ಟ್ರೀ ದೃಶ್ಯೀಕರಣ",
            icon: ICONS.pieChart,
            content: `
                <div class="space-y-6">
                    <p class="text-[10px] text-slate-500 uppercase tracking-widest font-black text-center mb-10">${isEn ? "Graphical Network Visibility Across Ranks" : "ಹಂತಗಳಾದ್ಯಂತ ಗ್ರಾಫಿಕಲ್ ನೆಟ್‌ವರ್ಕ್ ಗೋಚರತೆ"}</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                        <div class="p-6 bg-white space-y-4">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A] underline">${isEn ? "Admin View" : "ಅಡ್ಮಿನ್ ವ್ಯೂ"}</h5>
                            <ul class="text-[9px] font-bold text-slate-500 space-y-2 uppercase leading-tight">
                                <li>- Full hierarchy</li>
                                <li>- Relationship Maps</li>
                                <li>- Card Payout Summaries</li>
                            </ul>
                        </div>
                        <div class="p-6 bg-white space-y-4">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A] underline">${isEn ? "Retailer View" : "ರಿಟೇಲರ್ ವ್ಯೂ"}</h5>
                            <ul class="text-[9px] font-bold text-slate-500 space-y-2 uppercase leading-tight">
                                <li>- Customer Network</li>
                                <li>- Activity Summaries</li>
                                <li>- Collection Stats</li>
                            </ul>
                        </div>
                        <div class="p-6 bg-white space-y-4">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A] underline">${isEn ? "Customer View" : "ಗ್ರಾಹಕ ವ್ಯೂ"}</h5>
                            <ul class="text-[9px] font-bold text-slate-500 space-y-2 uppercase leading-tight">
                                <li>- Personal Network</li>
                                <li>- Referral Earnings</li>
                                <li>- Card-Based Downline</li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-8 border-2 border-slate-100 bg-slate-50/50 text-center space-y-4">
                        <h5 class="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9]">${isEn ? "Visual Features" : "ದೃಶ್ಯ ವೈಶಿಷ್ಟ್ಯಗಳು"}</h5>
                        <div class="flex justify-center gap-4 flex-wrap">
                            ${(isEn ? 
                                ["Hierarchical nodes", "Card Mapping", "Active/Closed status", "Purity of structure"] :
                                ["ಕ್ರಮಾನುಗತ ನೋಡ್‌ಗಳು", "ಕಾರ್ಡ್ ಮ್ಯಾಪಿಂಗ್", "ಸಕ್ರಿಯ/ಮುಚ್ಚಿದ ಸ್ಥಿತಿ", "ರಚನೆಯ ನಿಖರತೆ"]
                            ).map(it => `<span class="px-3 py-1 bg-white border border-slate-200 text-[8px] font-black uppercase tracking-tighter text-slate-400">${it}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "notif-system",
            title: isEn ? "7. Notifications System" : "7. ಅಧಿಸೂಚನೆ ವ್ಯವಸ್ಥೆ",
            icon: ICONS.bell,
            content: `
                <div class="space-y-6">
                    <p class="text-sm font-bold text-slate-600">${isEn ? "The platform should support automated notifications via SMS, Email, and In-app channels." : "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ SMS, ಇಮೇಲ್ ಮತ್ತು ಇನ್-ಆಪ್ ಚಾನೆಲ್‌ಗಳ ಮೂಲಕ ಸ್ವಯಂಚಾಲಿತ ಅಧಿಸೂಚನೆಗಳನ್ನು ಬೆಂಬಲಿಸಬೇಕು."}</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="p-4 bg-white border border-slate-200 space-y-3">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A] border-b pb-1">${isEn ? "Customer Notifs" : "ಗ್ರಾಹಕ ಅಧಿಸೂಚನೆಗಳು"}</h5>
                            <ul class="text-[9px] font-bold text-slate-500 space-y-1 uppercase">
                                <li>• ${isEn ? "Payment Reminders" : "ಪಾವತಿ ಜ್ಞಾಪನೆಗಳು"}</li>
                                <li>• ${isEn ? "Payment Approvals" : "ಪಾವತಿ ಅನುಮೋದನೆಗಳು"}</li>
                                <li>• ${isEn ? "Lottery Results" : "ಲಾಟರಿ ಫಲಿತಾಂಶಗಳು"}</li>
                                <li>• ${isEn ? "Referral Earnings" : "ರೆಫರಲ್ ಗಳಿಕೆಗಳು"}</li>
                                <li>• ${isEn ? "Password Alerts" : "ಪಾಸ್‌ವರ್ಡ್ ಎಚ್ಚರಿಕೆಗಳು"}</li>
                            </ul>
                        </div>
                        <div class="p-4 bg-white border border-slate-200 space-y-3">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A] border-b pb-1">${isEn ? "Retailer Notifs" : "ರಿಟೇಲರ್ ಅಧಿಸೂಚನೆಗಳು"}</h5>
                            <ul class="text-[9px] font-bold text-slate-500 space-y-1 uppercase">
                                <li>• ${isEn ? "Card Allocations" : "ಕಾರ್ಡ್ ಹಂಚಿಕೆಗಳು"}</li>
                                <li>• ${isEn ? "Collection Alerts" : "ಸಂಗ್ರಹಣೆ ಎಚ್ಚರಿಕೆಗಳು"}</li>
                                <li>• ${isEn ? "Incentive Status" : "ಇನ್ಸೆಂಟಿವ್ ಸ್ಥಿತಿ"}</li>
                            </ul>
                        </div>
                        <div class="p-4 bg-white border border-slate-200 space-y-3">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A] border-b pb-1">${isEn ? "Admin Notifs" : "ಅಡ್ಮಿನ್ ಅಧಿಸೂಚನೆಗಳು"}</h5>
                            <ul class="text-[9px] font-bold text-slate-500 space-y-1 uppercase">
                                <li>• ${isEn ? "Pending Approvals" : "ಬಾಕಿ ಅನುಮೋದನೆಗಳು"}</li>
                                <li>• ${isEn ? "Withdraw Requests" : "ಹಿಂಪಡೆಯುವಿಕೆ ವಿನಂತಿಗಳು"}</li>
                                <li>• ${isEn ? "Failed Payments" : "ವಿಫಲ ಪಾವತಿಗಳು"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "receipt-system",
            title: isEn ? "8. Digital Receipt System" : "8. ಡಿಜಿಟಲ್ ರಸೀದಿ ವ್ಯವಸ್ಥೆ",
            icon: ICONS.stamp,
            content: `
                <div class="space-y-6">
                    <div class="p-6 bg-slate-50 border border-slate-200">
                        <h5 class="text-[10px] font-black uppercase text-[#1E3A8A] mb-4">${isEn ? "Receipt Information" : "ರಸೀದಿ ಮಾಹಿತಿ"}</h5>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            ${(isEn ? ["Receipt No", "Customer Name", "Card Number", "Amount", "Date", "Payment Mode", "Trans ID", "Status"] : ["ರಸೀದಿ ಸಂಖ್ಯೆ", "ಗ್ರಾಹಕರ ಹೆಸರು", "ಕಾರ್ಡ್ ಸಂಖ್ಯೆ", "ಮೊತ್ತ", "ದಿನಾಂಕ", "ಪಾವತಿ ವಿಧಾನ", "ಟ್ರಾನ್ಸಾಕ್ಷನ್ ಐಡಿ", "ಸ್ಥಿತಿ"]).map(it => `
                                <div class="flex items-center gap-2 text-[9px] font-black uppercase text-slate-400">
                                    <div class="w-1 h-1 bg-blue-300"></div>
                                    ${it}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="p-4 border border-slate-200 bg-white grow text-center">
                            <span class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Printable Format" : "ಮುದ್ರಿಸಬಹುದಾದ ಫಾರ್ಮ್ಯಾಟ್"}</span>
                        </div>
                        <div class="p-4 border border-slate-200 bg-white grow text-center">
                            <span class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Download Support" : "ಡೌನ್‌ಲೋಡ್ ಬೆಂಬಲ"}</span>
                        </div>
                        <div class="p-4 border border-slate-200 bg-white grow text-center">
                            <span class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Digital Storage" : "ಡಿಜಿಟಲ್ ಸಂಗ್ರಹಣೆ"}</span>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "security",
            title: isEn ? "9. Security Requirements" : "9. ಭದ್ರತಾ ಅವಶ್ಯಕಗಳು",
            icon: ICONS.shieldCheck,
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-5 border border-slate-200 space-y-4">
                        <h5 class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Access Control" : "ಪ್ರವೇಶ ನಿಯಂತ್ರಣ"}</h5>
                        <ul class="text-xs font-medium text-slate-600 space-y-2">
                            <li>• ${isEn ? "Secure encrypted login access" : "ಸುರಕ್ಷಿತ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಲಾಗಿನ್ ಪ್ರವೇಶ"}</li>
                            <li>• ${isEn ? "OTP verification for sensitive operations" : "ಸೂಕ್ಷ್ಮ ಕಾರ್ಯಾಚರಣೆಗಳಿಗಾಗಿ OTP ಪರಿಶೀಲನೆ"}</li>
                            <li>• ${isEn ? "Strict Role-Based Access Control (RBAC)" : "ಕಟ್ಟುನಿಟ್ಟಾದ ಪಾತ್ರ ಆಧಾರಿತ ಪ್ರವೇಶ ನಿಯಂತ್ರಣ"}</li>
                        </ul>
                    </div>
                    <div class="p-5 border border-slate-200 space-y-4">
                        <h5 class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Data & Ops" : "ಡೇಟಾ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ"}</h5>
                        <ul class="text-xs font-medium text-slate-600 space-y-2">
                            <li>• ${isEn ? "Secure handling of PII data" : "PII ಡೇಟಾದ ಸುರಕ್ಷಿತ ನಿರ್ವಹಣೆ"}</li>
                            <li>• ${isEn ? "Comprehensive session management" : "ಸಮಗ್ರ ಸೆಷನ್ ನಿರ್ವಹಣೆ"}</li>
                            <li>• ${isEn ? "Audit logs for all major activities" : "ಎಲ್ಲಾ ಪ್ರಮುಖ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಆಡಿಟ್ ಲಾಗ್‌ಗಳು"}</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            id: "reports",
            title: isEn ? "10. Reports & Analytics" : "10. ವರದಿಗಳು ಮತ್ತು ಅನಾಲಿಟಿಕ್ಸ್",
            icon: ICONS.barChart2,
            content: `
                <div class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                        <div class="p-6 bg-white space-y-4">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Admin Reports" : "ಅಡ್ಮಿನ್ ವರದಿಗಳು"}</h5>
                            <ul class="text-[9px] font-bold text-slate-500 space-y-1 uppercase">
                                <li>- ${isEn ? "Revenue & Collection Summaries" : "ಆದಾಯ ಮತ್ತು ಸಂಗ್ರಹಣೆ ಸಾರಾಂಶಗಳು"}</li>
                                <li>- ${isEn ? "Lottery Winner Lists" : "ಲಾಟರಿ ವಿಜೇತರ ಪಟ್ಟಿಗಳು"}</li>
                                <li>- ${isEn ? "Referral Payout Reports" : "ರೆಫರಲ್ ಪಾವತಿ ವರದಿಗಳು"}</li>
                                <li>- ${isEn ? "Retailer Performance" : "ರಿಟೇಲರ್ ಕಾರ್ಯಕ್ಷಮತೆ"}</li>
                            </ul>
                        </div>
                        <div class="p-6 bg-white space-y-4">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Retailer Reports" : "ರಿಟೇಲರ್ ವರದಿಗಳು"}</h5>
                            <ul class="text-[9px] font-bold text-slate-500 space-y-1 uppercase">
                                <li>- ${isEn ? "Sales & Collection Stats" : "ಮಾರಾಟ ಮತ್ತು ಸಂಗ್ರಹಣೆ ಅಂಕಿಅಂಶ"}</li>
                                <li>- ${isEn ? "Onboarding Reports" : "ನೋಂದಣಿ ವರದಿಗಳು"}</li>
                                <li>- ${isEn ? "Incentive Summaries" : "ಇನ್ಸೆಂಟಿವ್ ಸಾರಾಂಶಗಳು"}</li>
                            </ul>
                        </div>
                        <div class="p-6 bg-white space-y-4">
                            <h5 class="text-[10px] font-black uppercase text-[#1E3A8A]">${isEn ? "Customer Reports" : "ಗ್ರಾಹಕ ವರದಿಗಳು"}</h5>
                            <ul class="text-[9px] font-bold text-slate-500 space-y-1 uppercase">
                                <li>- ${isEn ? "Payment History" : "ಪಾವತಿ ಇತಿಹಾಸ"}</li>
                                <li>- ${isEn ? "Earnings Statements" : "ಗಳಿಕೆ ಹೇಳಿಕೆಗಳು"}</li>
                                <li>- ${isEn ? "Card Status Tracking" : "ಕಾರ್ಡ್ ಸ್ಥಿತಿ ಟ್ರ್ಯಾಕಿಂಗ್"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: "non-functional",
            title: isEn ? "11. Non-Functional Requirements" : "11. ಕ್ರಿಯಾತ್ಮಕವಲ್ಲದ ಅವಶ್ಯಕತೆಗಳು",
            icon: ICONS.workflow,
            content: `
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-[10px]">
                        <thead>
                            <tr class="bg-slate-50 text-slate-400 font-black uppercase tracking-widest">
                                <th class="p-4 text-left border border-slate-200">${isEn ? "Requirement" : "ಅವಶ್ಯಕತೆ"}</th>
                                <th class="p-4 text-left border border-slate-200">${isEn ? "Description" : "ವಿವರಣೆ"}</th>
                            </tr>
                        </thead>
                        <tbody class="font-bold text-slate-600">
                            <tr><td class="p-4 border border-slate-200">Performance</td><td class="p-4 border border-slate-200">${isEn ? "Support high user concurrent volume" : "ಹೆಚ್ಚಿನ ಬಳಕೆದಾರರ ಪ್ರಮಾಣವನ್ನು ಬೆಂಬಲಿಸುವುದು"}</td></tr>
                            <tr><td class="p-4 border border-slate-200">Scalability</td><td class="p-4 border border-slate-200">${isEn ? "Easily expandable for future features" : "ಭವಿಷ್ಯದ ವೈಶಿಷ್ಟ್ಯಗಳಿಗಾಗಿ ಸುಲಭವಾಗಿ ವಿಸ್ತರಿಸಬಹುದು"}</td></tr>
                            <tr><td class="p-4 border border-slate-200">Availability</td><td class="p-4 border border-slate-200">${isEn ? "99.9% uptime for core operations" : "ಕೋರ್ ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಹೆಚ್ಚಿನ ಲಭ್ಯತೆ"}</td></tr>
                            <tr><td class="p-4 border border-slate-200">Usability</td><td class="p-4 border border-slate-200">${isEn ? "User-friendly responsive interface" : "ಬಳಕೆದಾರ ಸ್ನೇಹಿ ರೆಸ್ಪಾನ್ಸಿವ್ ಇಂಟರ್ಫೇಸ್"}</td></tr>
                            <tr><td class="p-4 border border-slate-200">Reliability</td><td class="p-4 border border-slate-200">${isEn ? "Accurate tracking of all financial data" : "ಎಲ್ಲಾ ಹಣಕಾಸಿನ ಡೇಟಾದ ನಿಖರವಾದ ಟ್ರ್ಯಾಕಿಂಗ್"}</td></tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            id: "future",
            title: isEn ? "12. Future Enhancements" : "12. ಭವಿಷ್ಯದ ಸುಧಾರಣೆಗಳು",
            icon: ICONS.cpu,
            content: `
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${(isEn ? 
                        ["Mobile Applications", "Payment Integrations", "WhatsApp Notifications", "QR-Code Payments", "Multi-Language Support", "Advanced Dashboards"] :
                        ["ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು", "ಪಾವತಿ ಏಕೀಕರಣಗಳು", "WhatsApp ಅಧಿಸೂಚನೆಗಳು", "QR-ಕೋಡ್ ಪಾವತಿಗಳು", "ಬಹು-ಭಾಷಾ ಬೆಂಬಲ", "ಸುಧಾರಿತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಳು"]
                    ).map(it => `
                        <div class="p-4 bg-slate-50 border border-slate-100 flex items-center justify-center text-center">
                            <span class="text-[9px] font-black uppercase text-[#1E3A8A]">${it}</span>
                        </div>
                    `).join('')}
                </div>
            `
        },
        {
            id: "assumptions",
            title: isEn ? "13. Assumptions & Dependencies" : "13. ಊಹೆಗಳು ಮತ್ತು ಅವಲಂಬನೆಗಳು",
            icon: ICONS.helpCircle,
            content: `
                <div class="p-6 bg-amber-50 border border-amber-100 space-y-4">
                    <ul class="text-xs font-medium text-amber-900 space-y-2">
                        <li>• ${isEn ? "SMS and Email services will be available" : "SMS ಮತ್ತು ಇಮೇಲ್ ಸೇವೆಗಳು ಲಭ್ಯವಿರುತ್ತವೆ"}</li>
                        <li>• ${isEn ? "Internet connectivity is required for all users" : "ಎಲ್ಲಾ ಬಳಕೆದಾರರಿಗೆ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕದ ಅಗತ್ಯವಿದೆ"}</li>
                        <li>• ${isEn ? "Valid mobile numbers are required for OTPs" : "OTPಗಳಿಗಾಗಿ ಮಾನ್ಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗಳ ಅಗತ್ಯವಿದೆ"}</li>
                        <li>• ${isEn ? "Admin team manages all lottery operations" : "ಅಡ್ಮಿನ್ ತಂಡವು ಎಲ್ಲಾ ಲಾಟರಿ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ"}</li>
                    </ul>
                </div>
            `
        },
        {
            id: "conclusion",
            title: isEn ? "14. Conclusion" : "14. ತೀರ್ಮಾನ",
            icon: ICONS.checkCircle2,
            content: `
                <div class="p-12 bg-[#1E3A8A] text-white text-center space-y-8">
                    <h3 class="text-3xl font-black uppercase tracking-tighter">${isEn ? "Modernizing Aryan Finance" : "ಆರ್ಯನ್ ಫೈನಾನ್ಸ್ ಡಿಜಿಟಲೀಕರಣ"}</h3>
                    <p class="text-xs text-blue-200 tracking-widest uppercase max-w-2xl mx-auto leading-relaxed">
                        ${isEn ? 
                            "The Aryan Finance Web Application simplifies onboarding, distribution, collections, and lottery management through a secure and user-friendly digital platform for Admins, Retailers, and Customers." :
                            "ಆರ್ಯನ್ ಫೈನಾನ್ಸ್ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್ ಅಡ್ಮಿನ್, ರಿಟೇಲರ್ ಮತ್ತು ಗ್ರಾಹಕರಿಗಾಗಿ ಸುರಕ್ಷಿತ ಮತ್ತು ಬಳಕೆದಾರ ಸ್ನೇಹಿ ವೇದಿಕೆಯ ಮೂಲಕ ನೋಂದಣಿ, ವಿತರಣೆ, ಸಂಗ್ರಹಣೆ ಮತ್ತು ಲಾಟರಿ ನಿರ್ವಹಣೆಯನ್ನು ಸರಳಗೊಳಿಸುತ್ತದೆ."}
                    </p>
                    <div class="flex justify-center gap-6 opacity-30">
                        <div class="h-px w-20 bg-white my-auto"></div>
                        <span class="text-[8px] font-black uppercase tracking-[0.5em]">${isEn ? "End of Document" : "ದಾಖಲೆಯ ಅಂತ್ಯ"}</span>
                        <div class="h-px w-20 bg-white my-auto"></div>
                    </div>
                </div>
            `
        }
    ];
};

const getSpecSections = () => {
    return [
        {
            id: "doc-info",
            title: "Document Information",
            icon: ICONS.fileText,
            content: `
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-xs">
                        <thead>
                            <tr class="bg-slate-100 uppercase tracking-widest text-[10px] font-black text-slate-500">
                                <th class="p-3 text-left border border-slate-200">Item</th>
                                <th class="p-3 text-left border border-slate-200">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${[
                                { k: "Project Name", v: "Aryan Finance Web Application" },
                                { k: "Document Type", v: "Business Requirements Document (BRD)" },
                                { k: "Version", v: "2.1" },
                                { k: "Target Users", v: "Admin, Retailers, Customers" }
                            ].map(row => `
                                <tr class="hover:bg-slate-50 transition-colors">
                                    <td class="p-3 border border-slate-200 font-bold text-slate-600">${row.k}</td>
                                    <td class="p-3 border border-slate-200 font-mono text-[#1E3A8A]">${row.v}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            id: "exec-summary",
            title: "1. Executive Summary",
            icon: ICONS.target,
            content: `
                <div class="space-y-6">
                    <p class="text-slate-600 leading-relaxed italic border-l-4 border-[#0ea5e9] pl-6 py-2">
                        Aryan Finance is a subscription-based financial management and lottery platform where customers subscribe using membership cards and pay monthly installments to participate in a lottery and reward system.
                    </p>
                </div>
            `
        },
        {
            id: "admin-module",
            title: "5.1 Admin Module",
            icon: ICONS.settings,
            content: `
                <div class="space-y-12">
                    <div class="p-8 bg-[#1E3A8A] text-white space-y-6 shadow-2xl">
                        <h4 class="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-blue-300">
                            ${ICONS.layoutDashboard}
                            5.1.1 Dashboard Metrics
                        </h4>
                    </div>
                </div>
            `
        },
        {
            id: "conclusion",
            title: "14. Conclusion",
            icon: ICONS.checkCircle2,
            content: `
                <div class="p-12 bg-[#1E3A8A] text-white space-y-8 text-center">
                    <h4 class="text-3xl font-black uppercase tracking-tighter">Solidifying the Backbone</h4>
                </div>
            `
        }
    ];
};

// --- DOM Elements ---
const contentContainer = document.getElementById('content-sections');
const desktopNav = document.getElementById('desktop-nav');
const mobileNav = document.getElementById('mobile-nav');
const langToggle = document.getElementById('lang-toggle');
const printBtn = document.getElementById('print-btn');
const headerPageTitle = document.getElementById('header-page-title');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const confidentialText = document.getElementById('confidential-text');
const mobileMenuOpen = document.getElementById('mobile-menu-open');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileSidebar = document.getElementById('mobile-sidebar');
const mobileSidebarContent = document.getElementById('mobile-sidebar-content');

// --- Functions ---
function render() {
    const isEn = currentLang === 'en';
    const sections = currentPage === 'requirement' ? getBrdSections(currentLang) : getUnderstandSections(currentLang);
    
    // Update Header/Hero UI
    if (currentPage === 'requirement') {
        headerPageTitle.textContent = isEn ? 'Business Requirement Doc' : 'ವ್ಯವಹಾರ ಅವಶ್ಯಕತೆಗಳ ದಾಖಲೆ';
        heroTitle.innerHTML = isEn ? 'Business <br /> Requirements' : 'ವ್ಯವಹಾರ <br /> ಅವಶ್ಯಕತೆಗಳು';
        heroDesc.innerHTML = isEn ? 'Detailed breakdown of system modules, operations, and business rules.' : 'ಸಿಸ್ಟಮ್ ಮಾಡ್ಯೂಲ್‌ಗಳು, ಕಾರ್ಯಾಚರಣೆಗಳು ಮತ್ತು ವ್ಯವಹಾರ ನಿಯಮಗಳ ವಿವರವಾದ ವಿವರಣೆ.';
        confidentialText.textContent = isEn ? 'Internal Business Document • Confidential' : 'ಆಂತರಿಕ ವ್ಯವಹಾರ ದಾಖಲೆ • ಗೌಪ್ಯ';
    } else {
        headerPageTitle.textContent = isEn ? 'Understand the Business' : 'ವ್ಯವಹಾರವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ';
        heroTitle.innerHTML = isEn ? 'Understand <br /> the Business' : 'ವ್ಯವಹಾರವನ್ನು <br /> ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ';
        heroDesc.innerHTML = isEn ? 'A foundational overview of how Aryan Finance operates.' : 'ಆರ್ಯನ್ ಫೈನಾನ್ಸ್ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದರ ಮೂಲಭೂತ ಅವಲೋಕನ.';
        confidentialText.textContent = isEn ? 'Strategic Overview • Confidential' : 'ಕಾರ್ಯತಂತ್ರದ ಅವಲೋಕನ • ಗೌಪ್ಯ';
    }

    // Update Top Navigation Labels
    const topBrd = document.getElementById('top-nav-brd');
    const topUnderstand = document.getElementById('top-nav-understand');
    if (topBrd) topBrd.textContent = isEn ? '1. Business Requirement' : '1. ವ್ಯವಹಾರ ಅವಶ್ಯಕತೆ';
    if (topUnderstand) topUnderstand.textContent = isEn ? '2. Understand Business' : '2. ವ್ಯವಹಾರವನ್ನು ಅರ್ಥಮಾಡಿ';

    // Render Content
    contentContainer.innerHTML = sections.map((s, index) => `
        <section id="${s.id}" class="animate-fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="flex items-center gap-4 mb-10">
                <div class="w-12 h-12 bg-slate-50 flex items-center justify-center text-[#1E3A8A] border border-slate-100">
                    ${s.icon}
                </div>
                <h2 class="text-2xl font-black text-[#1E3A8A] uppercase tracking-tighter">${s.title}</h2>
            </div>
            <div class="brd-content">
                ${s.content}
            </div>
        </section>
    `).join('');

    // Render Navs
    const navHtml = sections.map(s => `
        <a href="#${s.id}" class="group flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-50 hover:text-[#1E3A8A] transition-all rounded-sm">
            <div class="w-2 h-2 rounded-full border border-slate-200 group-hover:border-[#0ea5e9] group-hover:bg-[#0ea5e9] transition-all"></div>
            <span class="text-[9px] font-black uppercase tracking-widest truncate grow">
                ${s.title}
            </span>
        </a>
    `).join('');
    
    desktopNav.innerHTML = navHtml;
    mobileNav.innerHTML = navHtml;

    // Update Global Navigation States (Top Buttons & Sidebar Buttons)
    document.querySelectorAll('[data-page]').forEach(btn => {
        const page = btn.dataset.page;
        const isActive = page === currentPage;
        
        if (isActive) {
            btn.classList.remove('bg-white', 'text-slate-400', 'border-slate-100');
            btn.classList.add('bg-[#1E3A8A]', 'text-white', 'shadow-lg', 'border-[#1E3A8A]');
        } else {
            btn.classList.add('bg-white', 'text-slate-400', 'border-slate-100');
            btn.classList.remove('bg-[#1E3A8A]', 'text-white', 'shadow-lg', 'border-[#1E3A8A]');
        }
    });

    // Update Language Button
    if (langToggle) {
        langToggle.textContent = currentLang === 'en' ? 'Language: EN' : 'ಭಾಷೆ: KN';
        if (currentLang === 'en') {
            langToggle.classList.add('bg-amber-50', 'text-amber-600', 'border-amber-200');
            langToggle.classList.remove('bg-amber-600', 'text-white', 'border-amber-600');
        } else {
            langToggle.classList.remove('bg-amber-50', 'text-amber-600', 'border-amber-200');
            langToggle.classList.add('bg-amber-600', 'text-white', 'border-amber-600');
        }
    }

    // Re-attach scroll listeners
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    window.scrollTo({
                        top: targetEl.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    closeMobileMenu();
                }
            }
        });
    });
}

function closeMobileMenu() {
    if (!mobileSidebarContent || !mobileSidebar) return;
    mobileSidebarContent.classList.add('-translate-x-full');
    mobileSidebar.classList.remove('opacity-100');
    mobileSidebar.classList.add('opacity-0');
    setTimeout(() => {
        mobileSidebar.classList.add('pointer-events-none');
    }, 300);
}

function openMobileMenu() {
    if (!mobileSidebar) return;
    mobileSidebar.classList.remove('pointer-events-none');
    mobileSidebar.classList.remove('opacity-0');
    mobileSidebar.classList.add('opacity-100');
    mobileSidebarContent.classList.remove('-translate-x-full');
}

// --- Event Listeners ---
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'kn' : 'en';
    render();
});

printBtn.addEventListener('click', () => {
    window.print();
});

document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const page = e.currentTarget.dataset.page;
        currentPage = page;
        render();
        closeMobileMenu();
    });
});

mobileMenuOpen.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileSidebar.addEventListener('click', (e) => {
    if (e.target === mobileSidebar) closeMobileMenu();
});

// --- Init ---
render();
