const newsItems = [
  {
    id: 1,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news1.jpg",
    titleEn: "Masthappa Naik Leads Social Reform Initiative",
    titleKn: "ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರಿಂದ ಸಾಮಾಜಿಕ ಸುಧಾರಣಾ ಉಪಕ್ರಮ",
    shortDescEn: "A major step towards community development in Bhatkal.",
    shortDescKn: "ಭಟ್ಕಳದಲ್ಲಿ ಸಮುದಾಯ ಅಭಿವೃದ್ಧಿಯತ್ತ ಒಂದು ಪ್ರಮುಖ ಹೆಜ್ಜೆ.",
    contentEn: "Masthappa Naik has launched a new initiative aimed at providing better educational facilities for underprivileged children in the region. The project focuses on digital literacy and skill development.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರು ಈ ಪ್ರದೇಶದ ಹಿಂದುಳಿದ ಮಕ್ಕಳಿಗೆ ಉತ್ತಮ ಶಿಕ್ಷಣ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸುವ ಉದ್ದೇಶದಿಂದ ಹೊಸ ಉಪಕ್ರಮವನ್ನು ಪ್ರಾರಂಭಿಸಿದ್ದಾರೆ. ಈ ಯೋಜನೆಯು ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ ಮತ್ತು ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿಯ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಿದೆ.",
    category: "Youth Lead"
  },
  {
    id: 2,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news2.jpg",
    titleEn: "Business Excellence Award for Masthappa Naik",
    titleKn: "ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರಿಗೆ ವ್ಯಾಪಾರ ಶ್ರೇಷ್ಠತೆ ಪ್ರಶಸ್ತಿ",
    shortDescEn: "Recognizing his contributions to the local economy.",
    shortDescKn: "ಸ್ಥಳೀಯ ಆರ್ಥಿಕತೆಗೆ ಅವರ ಕೊಡುಗೆಯನ್ನು ಗುರುತಿಸಿ.",
    contentEn: "Masthappa Naik was honored with the Business Excellence Award for his innovative approach to sustainable business practices and his role in creating local employment opportunities.",
    contentKn: "ಸುಸ್ಥಿರ ವ್ಯಾಪಾರ ಪದ್ಧತಿಗಳಿಗೆ ಅವರ ನವೀನ ವಿಧಾನ ಮತ್ತು ಸ್ಥಳೀಯ ಉದ್ಯೋಗಾವಕಾಶಗಳನ್ನು ಸೃಷ್ಟಿಸುವಲ್ಲಿ ಅವರ ಪಾತ್ರಕ್ಕಾಗಿ ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರಿಗೆ ವ್ಯಾಪಾರ ಶ್ರೇಷ್ಠತೆ ಪ್ರಶಸ್ತಿಯನ್ನು ನೀಡಿ ಗೌರವಿಸಲಾಯಿತು.",
    category: "Organizational Growth"
  },
  {
    id: 3,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news3.jpg",
    titleEn: "Healthcare Camp Organized in Rural Areas",
    titleKn: "ಗ್ರಾಮೀಣ ಭಾಗದಲ್ಲಿ ಆರೋಗ್ಯ ಶಿಬಿರ ಆಯೋಜನೆ",
    shortDescEn: "Providing free medical checkups to hundreds of villagers.",
    shortDescKn: "ನೂರಾರು ಗ್ರಾಮಸ್ಥರಿಗೆ ಉಚಿತ ವೈದ್ಯಕೀಯ ತಪಾಸಣೆ.",
    contentEn: "Under the leadership of Masthappa Naik, a comprehensive healthcare camp was organized, providing free consultations and medicines to the rural population of Uttara Kannada.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರ ನೇತೃತ್ವದಲ್ಲಿ ಸಮಗ್ರ ಆರೋಗ್ಯ ಶಿಬಿರವನ್ನು ಆಯೋಜಿಸಲಾಗಿದ್ದು, ಉತ್ತರ ಕನ್ನಡದ ಗ್ರಾಮೀಣ ಜನರಿಗೆ ಉಚಿತ ಸಮಾಲೋಚನೆ ಮತ್ತು ಔಷಧಿಗಳನ್ನು ನೀಡಲಾಯಿತು.",
    category: "Cultural & Community Events"
  },
  {
    id: 4,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news4.jpg",
    titleEn: "Environmental Conservation Drive Gains Momentum",
    titleKn: "ಪರಿಸರ ಸಂರಕ್ಷಣಾ ಅಭಿಯಾನಕ್ಕೆ ವೇಗ",
    shortDescEn: "Masthappa Naik joins hands with local youth for a greener future.",
    shortDescKn: "ಹಸಿರು ಭವಿಷ್ಯಕ್ಕಾಗಿ ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಸ್ಥಳೀಯ ಯುವಕರೊಂದಿಗೆ ಕೈಜೋಡಿಸಿದ್ದಾರೆ.",
    contentEn: "A massive tree-planting drive was initiated by Masthappa Naik to combat deforestation and promote environmental awareness among the younger generation.",
    contentKn: "ಅರಣ್ಯನಾಶದ ವಿರುದ್ಧ ಹೋರಾಡಲು ಮತ್ತು ಯುವ ಪೀಳಿಗೆಯಲ್ಲಿ ಪರಿಸರ ಜಾಗೃತಿ ಮೂಡಿಸಲು ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರು ಬೃಹತ್ ವೃಕ್ಷಾರೋಪಣ ಅಭಿಯಾನವನ್ನು ಪ್ರಾರಂಭಿಸಿದರು.",
    category: "Sharavathi Project & Environmental Movement"
  },
  {
    id: 5,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news5.jpg",
    titleEn: "Empowering Women Through Self-Help Groups",
    titleKn: "ಸ್ವಸಹಾಯ ಸಂಘಗಳ ಮೂಲಕ ಮಹಿಳಾ ಸಬಲೀಕರಣ",
    shortDescEn: "Masthappa Naik supports financial independence for women.",
    shortDescKn: "ಮಹಿಳೆಯರ ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯಕ್ಕೆ ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಬೆಂಬಲ.",
    contentEn: "Masthappa Naik has been instrumental in setting up several women's self-help groups, providing them with the necessary training and resources to start their own small businesses.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರು ಹಲವಾರು ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘಗಳನ್ನು ಸ್ಥಾಪಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದ್ದಾರೆ, ಅವರಿಗೆ ತಮ್ಮದೇ ಆದ ಸಣ್ಣ ಉದ್ಯಮಗಳನ್ನು ಪ್ರಾರಂಭಿಸಲು ಅಗತ್ಯವಾದ ತರಬೇತಿ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳನ್ನು ಒದಗಿಸಿದ್ದಾರೆ.",
    category: "Cultural & Community Events"
  },
  {
    id: 6,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news6.jpg",
    titleEn: "Youth Leadership Summit in Bhatkal",
    titleKn: "ಭಟ್ಕಳದಲ್ಲಿ ಯುವ ನಾಯಕತ್ವ ಶೃಂಗಸಭೆ",
    shortDescEn: "Inspiring the next generation of leaders.",
    shortDescKn: "ಮುಂದಿನ ಪೀಳಿಗೆಯ ನಾಯಕರನ್ನು ಪ್ರೇರೇಪಿಸುವುದು.",
    contentEn: "Masthappa Naik addressed a gathering of young leaders, emphasizing the importance of integrity, hard work, and community service in building a better society.",
    contentKn: "ಉತ್ತಮ ಸಮಾಜವನ್ನು ನಿರ್ಮಿಸುವಲ್ಲಿ ಪ್ರಾಮಾಣಿಕತೆ, ಕಠಿಣ परिश्रम ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಯ ಪ್ರಾಮುಖ್ಯತೆಯನ್ನು ಒತ್ತಿಹೇಳುತ್ತಾ ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರು ಯುವ ನಾಯಕರ ಸಭೆಯನ್ನು ಉದ್ದೇಶಿಸಿ ಮಾತನಾಡಿದರು.",
    category: "Youth Lead"
  },
  {
    id: 7,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news7.jpg",
    titleEn: "Infrastructure Projects Fast-Tracked",
    titleKn: "ಮೂಲಸೌಕರ್ಯ ಯೋಜನೆಗಳಿಗೆ ವೇಗ",
    shortDescEn: "Improving connectivity and basic amenities in the region.",
    shortDescKn: "ಈ ಪ್ರದೇಶದಲ್ಲಿ ಸಂಪರ್ಕ ಮತ್ತು ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳ ಸುಧಾರಣೆ.",
    contentEn: "Several key infrastructure projects, including road repairs and water supply systems, have been fast-tracked under the guidance of Masthappa Naik.",
    contentKn: "ರಸ್ತೆ ದುರಸ್ತಿ ಮತ್ತು ನೀರು ಸರಬರಾಜು ವ್ಯವಸ್ಥೆ ಸೇರಿದಂತೆ ಹಲವಾರು ಪ್ರಮುಖ ಮೂಲಸೌಕರ್ಯ ಯೋಜನೆಗಳನ್ನು ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ವೇಗಗೊಳಿಸಲಾಗಿದೆ.",
    category: "Administrative Engagement"
  },
  {
    id: 8,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news8.jpg",
    titleEn: "Cultural Heritage Festival a Grand Success",
    titleKn: "ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯ ಉತ್ಸವ ಭವ್ಯ ಯಶಸ್ಸು",
    shortDescEn: "Celebrating the rich traditions of Uttara Kannada.",
    shortDescKn: "ಉತ್ತರ ಕನ್ನಡದ ಶ್ರೀಮಂತ ಸಂಪ್ರದಾಯಗಳ ಆಚರಣೆ.",
    contentEn: "The annual cultural festival, supported by Masthappa Naik, saw a massive turnout, showcasing the diverse art forms and traditions of the local community.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಬೆಂಬಲಿತ ವಾರ್ಷಿಕ ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವವು ಭಾರಿ ಜನಸಂದಣಿಯನ್ನು ಕಂಡಿತು, ಸ್ಥಳೀಯ ಸಮುದಾಯದ ವೈವಿಧ್ಯಮಯ ಕಲಾ ಪ್ರಕಾರಗಳು ಮತ್ತು ಸಂಪ್ರದಾಯಗಳನ್ನು ಪ್ರದರ್ಶಿಸಿತು.",
    category: "Cultural & Community Events"
  },
  {
    id: 9,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news9.jpg",
    titleEn: "Educational Scholarships Distributed",
    titleKn: "ಶೈಕ್ಷಣಿಕ ವಿದ್ಯಾರ್ಥಿವೇತನ ವಿತರಣೆ",
    shortDescEn: "Helping bright students achieve their dreams.",
    shortDescKn: "ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳು ತಮ್ಮ ಕನಸುಗಳನ್ನು ನನಸಾಗಿಸಲು ಸಹಾಯ ಮಾಡುವುದು.",
    contentEn: "Masthappa Naik distributed scholarships to meritorious students from economically weaker sections, encouraging them to pursue higher education.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರು ಆರ್ಥಿಕವಾಗಿ ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿದ್ಯಾರ್ಥಿವೇತನವನ್ನು ವಿತರಿಸಿದರು, ಉನ್ನತ ಶಿಕ್ಷಣವನ್ನು ಪಡೆಯಲು ಅವರನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಿದರು.",
    category: "Youth Lead"
  },
  {
    id: 10,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news10.jpg",
    titleEn: "Sports Meet for Rural Youth",
    titleKn: "ಗ್ರಾಮೀಣ ಯುವಕರಿಗಾಗಿ ಕ್ರೀಡಾಕೂಟ",
    shortDescEn: "Promoting physical fitness and sportsmanship.",
    shortDescKn: "ದೈಹಿಕ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಕ್ರೀಡಾ ಮನೋಭಾವವನ್ನು ಉತ್ತೇಜಿಸುವುದು.",
    contentEn: "A district-level sports meet was organized by Masthappa Naik, providing a platform for rural youth to showcase their athletic talents.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರು ಜಿಲ್ಲಾ ಮಟ್ಟದ ಕ್ರೀಡಾಕೂಟವನ್ನು ಆಯೋಜಿಸಿದ್ದರು, ಗ್ರಾಮೀಣ ಯುವಕರಿಗೆ ತಮ್ಮ ಅಥ್ಲೆಟಿಕ್ ಪ್ರತಿಭೆಯನ್ನು ಪ್ರದರ್ಶಿಸಲು ವೇದಿಕೆಯನ್ನು ಒದಗಿಸಿದರು.",
    category: "Youth Lead"
  },
  {
    id: 11,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news11.jpg",
    titleEn: "Farmers' Training Workshop",
    titleKn: "ರೈತರಿಗಾಗಿ ತರಬೇತಿ ಕಾರ್ಯಾಗಾರ",
    shortDescEn: "Introducing modern agricultural techniques.",
    shortDescKn: "ಆಧುನಿಕ ಕೃಷಿ ತಂತ್ರಗಳ ಪರಿಚಯ.",
    contentEn: "Masthappa Naik organized a workshop for local farmers, introducing them to modern farming techniques and sustainable agricultural practices.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರು ಸ್ಥಳೀಯ ರೈತರಿಗಾಗಿ ಕಾರ್ಯಾಗಾರವನ್ನು ಆಯೋಜಿಸಿದರು, ಅವರಿಗೆ ಆಧುನಿಕ ಕೃಷಿ ತಂತ್ರಗಳು ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿ ಪದ್ಧತಿಗಳನ್ನು ಪರಿಚಯಿಸಿದರು.",
    category: "Administrative Engagement"
  },
  {
    id: 12,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news12.jpg",
    titleEn: "Community Hall Inaugurated",
    titleKn: "ಸಮುದಾಯ ಭವನ ಉದ್ಘಾಟನೆ",
    shortDescEn: "A new space for social gatherings and events.",
    shortDescKn: "ಸಾಮಾಜಿಕ ಕೂಟಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳಿಗಾಗಿ ಹೊಸ ಸ್ಥಳ.",
    contentEn: "A newly constructed community hall was inaugurated by Masthappa Naik, providing a much-needed space for local events and social gatherings.",
    contentKn: "ಹೊಸದಾಗಿ ನಿರ್ಮಿಸಲಾದ ಸಮುದಾಯ ಭವನವನ್ನು ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಉದ್ಘಾಟಿಸಿದರು, ಸ್ಥಳೀಯ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಾಮಾಜಿಕ ಕೂಟಗಳಿಗೆ ಅಗತ್ಯವಾದ ಸ್ಥಳವನ್ನು ಒದಗಿಸಿದರು.",
    category: "Organizational Growth"
  },
  {
    id: 13,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news13.jpg",
    titleEn: "Digital Literacy Program for Seniors",
    titleKn: "ಹಿರಿಯರಿಗಾಗಿ ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತಾ ಕಾರ್ಯಕ್ರಮ",
    shortDescEn: "Bridging the digital divide across generations.",
    shortDescKn: "ಪೀಳಿಗೆಗಳ ನಡುವಿನ ಡಿಜಿಟಲ್ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು.",
    contentEn: "Masthappa Naik launched a digital literacy program specifically for senior citizens, helping them stay connected in the modern world.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ಹಿರಿಯ ನಾಗರಿಕರಿಗಾಗಿ ವಿಶೇಷವಾಗಿ ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತಾ ಕಾರ್ಯಕ್ರಮವನ್ನು ಪ್ರಾರಂಭಿಸಿದರು, ಆಧುನಿಕ ಜಗತ್ತಿನಲ್ಲಿ ಅವರು ಸಂಪರ್ಕದಲ್ಲಿರಲು ಸಹಾಯ ಮಾಡಿದರು.",
    category: "Cultural & Community Events"
  },
  {
    id: 14,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news14.jpg",
    titleEn: "Cleanliness Drive in Public Spaces",
    titleKn: "ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳಲ್ಲಿ ಸ್ವಚ್ಛತಾ ಅಭಿಯಾನ",
    shortDescEn: "Masthappa Naik leads by example in Swachh Bharat initiative.",
    shortDescKn: "ಸ್ವಚ್ಛ ಭಾರತ ಉಪಕ್ರಮದಲ್ಲಿ ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಮಾದರಿಯಾಗಿದ್ದಾರೆ.",
    contentEn: "A major cleanliness drive was conducted in public parks and markets, led by Masthappa Naik and supported by local volunteers.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರ ನೇತೃತ್ವದಲ್ಲಿ ಮತ್ತು ಸ್ಥಳೀಯ ಸ್ವಯಂಸೇವಕರ ಬೆಂಬಲದೊಂದಿಗೆ ಸಾರ್ವಜನಿಕ ಉದ್ಯಾನವನಗಳು ಮತ್ತು ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ಪ್ರಮುಖ ಸ್ವಚ್ಛತಾ ಅಭಿಯಾನವನ್ನು ನಡೆಸಲಾಯಿತು.",
    category: "Mass Movements / Padayatra / Public Rallies"
  },
  {
    id: 15,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news15.jpg",
    titleEn: "Support for Local Artisans",
    titleKn: "ಸ್ಥಳೀಯ ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ಬೆಂಬಲ",
    shortDescEn: "Promoting traditional crafts and livelihoods.",
    shortDescKn: "ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆ ಮತ್ತು ಜೀವನೋಪಾಯವನ್ನು ಉತ್ತೇಜಿಸುವುದು.",
    contentEn: "Masthappa Naik has initiated a program to support local artisans by providing them with better market access and financial assistance.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ಸ್ಥಳೀಯ ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ಉತ್ತಮ ಮಾರುಕಟ್ಟೆ ಪ್ರವೇಶ ಮತ್ತು ಆರ್ಥಿಕ ನೆರವು ನೀಡುವ ಮೂಲಕ ಅವರನ್ನು ಬೆಂಬಲಿಸುವ ಕಾರ್ಯಕ್ರಮವನ್ನು ಪ್ರಾರಂಭಿಸಿದ್ದಾರೆ.",
    category: "Cultural & Community Events"
  },
  {
    id: 16,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news16.jpg",
    titleEn: "Youth Skill Development Center Opened",
    titleKn: "ಯುವ ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿ ಕೇಂದ್ರ ಆರಂಭ",
    shortDescEn: "Enhancing employability for local youth.",
    shortDescKn: "ಸ್ಥಳೀಯ ಯುವಕರಿಗೆ ಉದ್ಯೋಗಾವಕಾಶಗಳನ್ನು ಹೆಚ್ಚಿಸುವುದು.",
    contentEn: "A new skill development center was opened by Masthappa Naik, offering vocational training in various fields to enhance the employability of local youth.",
    contentKn: "ಸ್ಥಳೀಯ ಯುವಕರ ಉದ್ಯೋಗಾವಕಾಶಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ವಿವಿಧ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ವೃತ್ತಿಪರ ತರಬೇತಿಯನ್ನು ನೀಡುವ ಹೊಸ ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿ ಕೇಂದ್ರವನ್ನು ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಉದ್ಘಾಟಿಸಿದರು.",
    category: "Youth Lead"
  },
  {
    id: 17,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news17.jpg",
    titleEn: "Relief Work During Natural Calamities",
    titleKn: "ನೈಸರ್ಗಿಕ ವಿಕೋಪದ ಸಮಯದಲ್ಲಿ ಪರಿಹಾರ ಕಾರ್ಯ",
    shortDescEn: "Masthappa Naik at the forefront of disaster management.",
    shortDescKn: "ವಿಪತ್ತು ನಿರ್ವಹಣೆಯಲ್ಲಿ ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಮುಂಚೂಣಿಯಲ್ಲಿದ್ದಾರೆ.",
    contentEn: "Masthappa Naik personally oversaw relief operations during the recent floods, ensuring that essential supplies reached the affected families promptly.",
    contentKn: "ಇತ್ತೀಚಿನ ಪ್ರವಾಹದ ಸಮಯದಲ್ಲಿ ಮಾಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರು ವೈಯಕ್ತಿಕವಾಗಿ ಪರಿಹಾರ ಕಾರ್ಯಾಚರಣೆಗಳ ಮೇಲ್ವಿಚಾರಣೆ ನಡೆಸಿದರು, ಪೀಡಿತ ಕುಟುಂಬಗಳಿಗೆ ಅಗತ್ಯ ವಸ್ತುಗಳು ತಕ್ಷಣವೇ ತಲುಪುವಂತೆ ನೋಡಿಕೊಂಡರು.",
    category: "Mass Movements / Padayatra / Public Rallies"
  },
  {
    id: 18,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news18.jpg",
    titleEn: "Animal Welfare Initiative Launched",
    titleKn: "ಪ್ರಾಣಿ ಕಲ್ಯಾಣ ಉಪಕ್ರಮ ಪ್ರಾರಂಭ",
    shortDescEn: "Providing care and shelter for stray animals.",
    shortDescKn: "ಬೀದಿ ಪ್ರಾಣಿಗಳಿಗೆ ಆರೈಕೆ ಮತ್ತು ಆಶ್ರಯ ನೀಡುವುದು.",
    contentEn: "Masthappa Naik has supported the establishment of an animal shelter and mobile veterinary clinic to provide care for stray and injured animals.",
    contentKn: "ಬೀದಿ ಮತ್ತು ಗಾಯಗೊಂಡ ಪ್ರಾಣಿಗಳಿಗೆ ಆರೈಕೆ ನೀಡಲು ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ಪ್ರಾಣಿ ಆಶ್ರಯ ಮತ್ತು ಮೊಬೈಲ್ ಪಶುವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸಾಲಯ ಸ್ಥಾಪನೆಕ್ಕೆ ಬೆಂಬಲ ನೀಡಿದ್ದಾರೆ.",
    category: "Cultural & Community Events"
  },
  {
    id: 19,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news19.jpg",
    titleEn: "Public Library Modernized",
    titleKn: "ಸಾರ್ವಜನಿಕ ಗ್ರಂಥಾಲಯ ಆಧುನೀಕರಣ",
    shortDescEn: "Encouraging a culture of reading and learning.",
    shortDescKn: "ಓದುವ ಮತ್ತು ಕಲಿಯುವ ಸಂಸ್ಕೃತಿಯನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು.",
    contentEn: "The local public library has been modernized with new books and digital resources, thanks to the efforts of Masthappa Naik.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರ ಪ್ರಯತ್ನದಿಂದ ಸ್ಥಳೀಯ ಸಾರ್ವಜನಿಕ ಗ್ರಂಥಾಲಯವನ್ನು ಹೊಸ ಪುಸ್ತಕಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಸಂಪನ್ಮೂಲಗಳೊಂದಿಗೆ ಆಧುನೀಕರಿಸಲಾಗಿದೆ.",
    category: "Organizational Growth"
  },
  {
    id: 20,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news20.jpg",
    titleEn: "Road Safety Awareness Campaign",
    titleKn: "ರಸ್ತೆ ಸುರಕ್ಷತಾ ಜಾಗೃತಿ ಅಭಿಯಾನ",
    shortDescEn: "Educating the public on traffic rules and safety.",
    shortDescKn: "ಸಂಚಾರ ನಿಯಮಗಳು ಮತ್ತು ಸುರಕ್ಷತೆಯ ಬಗ್ಗೆ ಸಾರ್ವಜನಿಕರಿಗೆ ಶಿಕ್ಷಣ ನೀಡುವುದು.",
    contentEn: "Masthappa Naik led a road safety campaign, distributing helmets and educating commuters on the importance of following traffic rules.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ರಸ್ತೆ ಸುರಕ್ಷತಾ ಅಭಿಯಾನದ ನೇತೃತ್ವ ವಹಿಸಿದ್ದರು, ಹೆಲ್ಮೆಟ್‌ಗಳನ್ನು ವಿತರಿಸಿದರು ಮತ್ತು ಸಂಚಾರ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸುವ ಪ್ರಾಮುಖ್ಯತೆಯ ಬಗ್ಗೆ ಪ್ರಯಾಣಿಕರಿಗೆ ಶಿಕ್ಷಣ ನೀಡಿದರು.",
    category: "Mass Movements / Padayatra / Public Rallies"
  },
  {
    id: 21,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news21.jpg",
    titleEn: "Solar Energy Project for Villages",
    titleKn: "ಹಳ್ಳಿಗಳಿಗೆ ಸೌರಶಕ್ತಿ ಯೋಜನೆ",
    shortDescEn: "Promoting renewable energy in rural areas.",
    shortDescKn: "ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನವನ್ನು ಉತ್ತೇಜಿಸುವುದು.",
    contentEn: "Masthappa Naik has been promoting the use of solar energy in remote villages, providing solar lamps and panels to households with limited electricity access.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ದೂರದ ಹಳ್ಳಿಗಳಲ್ಲಿ ಸೌರಶಕ್ತಿಯ ಬಳಕೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತಿದ್ದಾರೆ, ಸೀಮಿತ ವಿದ್ಯುತ್ ಪ್ರವೇಶ ಹೊಂದಿರುವ ಮನೆಗಳಿಗೆ ಸೌರ ದೀಪಗಳು ಮತ್ತು ಪ್ಯಾನಲ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತಿದ್ದಾರೆ.",
    category: "Administrative Engagement"
  },
  {
    id: 22,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news22.jpg",
    titleEn: "Drinking Water Project Completed",
    titleKn: "ಕುಡಿಯುವ ನೀರು ಯೋಜನೆ ಪೂರ್ಣ",
    shortDescEn: "Ensuring clean water for every household.",
    shortDescKn: "ಪ್ರತಿ ಮನೆಗೂ ಶುದ್ಧ ನೀರು ಖಚಿತಪಡಿಸುವುದು.",
    contentEn: "A major drinking water project was completed under the supervision of Masthappa Naik, providing safe drinking water to several villages in the district.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರ ಮೇಲ್ವಿಚಾರಣೆಯಲ್ಲಿ ಪ್ರಮುಖ ಕುಡಿಯುವ ನೀರು ಯೋಜನೆ ಪೂರ್ಣಗೊಂಡಿದ್ದು, ಜಿಲ್ಲೆಯ ಹಲವಾರು ಹಳ್ಳಿಗಳಿಗೆ ಸುರಕ್ಷಿತ ಕುಡಿಯುವ ನೀರನ್ನು ಒದಗಿಸಲಾಗಿದೆ.",
    category: "Administrative Engagement"
  },
  {
    id: 23,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news23.jpg",
    titleEn: "Vocational Training for Differently Abled",
    titleKn: "ವಿಕಲಚೇತನರಿಗೆ ವೃತ್ತಿಪರ ತರಬೇತಿ",
    shortDescEn: "Empowering all sections of society.",
    shortDescKn: "ಸಮಾಜದ ಎಲ್ಲಾ ವರ್ಗಗಳ ಸಬಲೀಕರಣ.",
    contentEn: "Masthappa Naik has initiated a vocational training program specifically for differently-abled individuals, helping them gain financial independence.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ವಿಕಲಚೇತನ ವ್ಯಕ್ತಿಗಳಿಗಾಗಿ ವಿಶೇಷವಾಗಿ ವೃತ್ತಿಪರ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮವನ್ನು ಪ್ರಾರಂಭಿಸಿದ್ದಾರೆ, ಅವರಿಗೆ ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಪಡೆಯಲು ಸಹಾಯ ಮಾಡಿದ್ದಾರೆ.",
    category: "Cultural & Community Events"
  },
  {
    id: 24,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news24.jpg",
    titleEn: "Anti-Drug Awareness Workshop",
    titleKn: "ಮಾದಕ ದ್ರವ್ಯ ವಿರೋಧಿ ಜಾಗೃತಿ ಕಾರ್ಯಾಗಾರ",
    shortDescEn: "Protecting the youth from substance abuse.",
    shortDescKn: "ಮಾದಕ ದ್ರವ್ಯ ಸೇವನೆಯಿಂದ ಯುವಕರನ್ನು ರಕ್ಷಿಸುವುದು.",
    contentEn: "Masthappa Naik organized an anti-drug awareness workshop in local schools and colleges, highlighting the dangers of substance abuse.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ಸ್ಥಳೀಯ ಶಾಲೆ ಮತ್ತು ಕಾಲೇಜುಗಳಲ್ಲಿ ಮಾದಕ ದ್ರವ್ಯ ವಿರೋಧಿ ಜಾಗೃತಿ ಕಾರ್ಯಾಗಾರವನ್ನು ಆಯೋಜಿಸಿದರು, ಮಾದಕ ದ್ರವ್ಯ ಸೇವನೆಯ ಅಪಾಯಗಳನ್ನು ಎತ್ತಿ ತೋರಿಸಿದರು.",
    category: "Youth Lead"
  },
  {
    id: 25,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news25.jpg",
    titleEn: "Tree Plantation in Educational Institutions",
    titleKn: "ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ವೃಕ್ಷಾರೋಪಣ",
    shortDescEn: "Creating green campuses for students.",
    shortDescKn: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗಾಗಿ ಹಸಿರು ಕ್ಯಾಂಪಸ್‌ಗಳನ್ನು ನಿರ್ಮಿಸುವುದು.",
    contentEn: "Masthappa Naik participated in a tree plantation drive at local educational institutions, encouraging students to take care of the environment.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ಸ್ಥಳೀಯ ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ವೃಕ್ಷಾರೋಪಣ ಅಭಿಯಾನದಲ್ಲಿ ಭಾಗವಹಿಸಿದರು, ಪರಿಸರವನ್ನು ಕಾಪಾಡುವಂತೆ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಿದರು.",
    category: "Sharavathi Project & Environmental Movement"
  },
  {
    id: 26,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news26.jpg",
    titleEn: "Financial Literacy Camp for Villagers",
    titleKn: "ಗ್ರಾಮಸ್ಥರಿಗಾಗಿ ಆರ್ಥಿಕ ಸಾಕ್ಷರತಾ ಶಿಬಿರ",
    shortDescEn: "Educating people on banking and savings.",
    shortDescKn: "ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಉಳಿತಾಯದ ಬಗ್ಗೆ ಜನರಿಗೆ ಶಿಕ್ಷಣ ನೀಡುವುದು.",
    contentEn: "Masthappa Naik organized a financial literacy camp, educating villagers on the importance of savings and the various banking services available to them.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ಆರ್ಥಿಕ ಸಾಕ್ಷರತಾ ಶಿಬಿರವನ್ನು ಆಯೋಜಿಸಿದರು, ಉಳಿತಾಯದ ಪ್ರಾಮುಖ್ಯತೆ ಮತ್ತು ಅವರಿಗೆ ಲಭ್ಯವಿರುವ ವಿವಿಧ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳ ಬಗ್ಗೆ ಗ್ರಾಮಸ್ಥರಿಗೆ ಶಿಕ್ಷಣ ನೀಡಿದರು.",
    category: "Administrative Engagement"
  },
  {
    id: 27,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news27.jpg",
    titleEn: "Health Awareness Walkathon",
    titleKn: "ಆರೋಗ್ಯ ಜಾಗೃತಿ ವಾಕಥಾನ್",
    shortDescEn: "Promoting a healthy lifestyle among citizens.",
    shortDescKn: "ನಾಗರಿಕರಲ್ಲಿ ಆರೋಗ್ಯಕರ ಜೀವನಶೈಲಿಯನ್ನು ಉತ್ತೇಜಿಸುವುದು.",
    contentEn: "A health awareness walkathon was organized by Masthappa Naik, encouraging people of all ages to prioritize their physical and mental well-being.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ಆರೋಗ್ಯ ಜಾಗೃತಿ ವಾಕಥಾನ್ ಆಯೋಜಿಸಿದ್ದರು, ಎಲ್ಲಾ ವಯಸ್ಸಿನ ಜನರು ತಮ್ಮ ದೈಹಿಕ ಮತ್ತು ಮಾನಸಿಕ ಯೋಗಕ್ಷೇಮಕ್ಕೆ ಆದ್ಯತೆ ನೀಡುವಂತೆ ಪ್ರೋತ್ಸಾಹಿಸಿದರು.",
    category: "Mass Movements / Padayatra / Public Rallies"
  },
  {
    id: 28,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news28.jpg",
    titleEn: "Support for Sports Infrastructure",
    titleKn: "ಕ್ರೀಡಾ ಮೂಲಸೌಕರ್ಯಕ್ಕೆ ಬೆಂಬಲ",
    shortDescEn: "Upgrading local stadiums and playgrounds.",
    shortDescKn: "ಸ್ಥಳೀಯ ಕ್ರೀಡಾಂಗಣಗಳು ಮತ್ತು ಆಟದ ಮೈದಾನಗಳ ನವೀಕರಣ.",
    contentEn: "Masthappa Naik has been actively involved in upgrading local sports infrastructure, providing better facilities for aspiring athletes in the region.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ಸ್ಥಳೀಯ ಕ್ರೀಡಾ ಮೂಲಸೌಕರ್ಯಗಳನ್ನು ನವೀಕರಿಸುವಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿ ತೊಡಗಿಸಿಕೊಂಡಿದ್ದಾರೆ, ಈ ಪ್ರದೇಶದ ಮಹತ್ವಾಕಾಂಕ್ಷಿ ಕ್ರೀಡಾಪಟುಗಳಿಗೆ ಉತ್ತಮ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸುತ್ತಿದ್ದಾರೆ.",
    category: "Youth Lead"
  },
  {
    id: 29,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news29.jpg",
    titleEn: "Legal Aid Camp for the Poor",
    titleKn: "ಬಡವರಿಗಾಗಿ ಕಾನೂನು ನೆರವು ಶಿಬಿರ",
    shortDescEn: "Providing free legal advice to those in need.",
    shortDescKn: "ಅಗತ್ಯವಿರುವವರಿಗೆ ಉಚಿತ ಕಾನೂನು ಸಲಹೆ ನೀಡುವುದು.",
    contentEn: "Masthappa Naik organized a legal aid camp, where experienced lawyers provided free legal advice and assistance to the underprivileged sections of society.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರು ಕಾನೂನು ನೆರವು ಶಿಬಿರವನ್ನು ಆಯೋಜಿಸಿದರು, ಅಲ್ಲಿ ಅನುಭವಿ ವಕೀಲರು ಸಮಾಜದ ಹಿಂದುಳಿದ ವರ್ಗಗಳಿಗೆ ಉಚಿತ ಕಾನೂನು ಸಲಹೆ ಮತ್ತು ಸಹಾಯವನ್ನು ನೀಡಿದರು.",
    category: "Justice & Anti-Corruption Stand"
  },
  {
    id: 30,
    url: "https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news30.jpg",
    titleEn: "Masthappa Naik Honored for Social Service",
    titleKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರಿಗೆ ಸಮಾಜ ಸೇವೆಗಾಗಿ ಗೌರವ",
    shortDescEn: "A lifetime of dedication to the welfare of the people.",
    shortDescKn: "ಜನರ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಜೀವಮಾನದ ಸಮರ್ಪಣೆ.",
    contentEn: "Masthappa Naik was recently honored by a leading social organization for his decades of selfless service and his significant contributions to the development of Bhatkal.",
    contentKn: "ಮಾಸ್ತಪ್ಪ ನಾಯ್ಕ ಅವರ ದಶಕಗಳ ನಿಸ್ವಾರ್ಥ ಸೇವೆ ಮತ್ತು ಭಟ್ಕಳದ ಅಭಿವೃದ್ಧಿಗೆ ಅವರ ಗಮನಾರ್ಹ ಕೊಡುಗೆಗಳಿಗಾಗಿ ಇತ್ತೀಚೆಗೆ ಪ್ರಮುಖ ಸಾಮಾಜಿಕ ಸಂಸ್ಥೆಯೊಂದು ಅವರನ್ನು ಗೌರವಿಸಿತು.",
    category: "Organizational Growth"
  }
];

if (typeof window !== 'undefined') {
  window.newsItems = newsItems;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = newsItems;
}

