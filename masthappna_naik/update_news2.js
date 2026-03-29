import fs from 'fs';

let data = fs.readFileSync('src/news_data.js', 'utf8');

// Extract the array part
const arrayStart = data.indexOf('[');
const arrayEnd = data.lastIndexOf(']');
const arrayStr = data.substring(arrayStart, arrayEnd + 1);

// Parse it
const newsItems = eval(arrayStr);

// Update items
const news17ShortDesc = `A report on the dramatic political clash at the Sharavati Project opposition meeting in Honnavar, where Masthappa Naik and Minister Mankal Vaidya engaged in a sharp exchange of words on stage in front of religious leaders.`;
const news17Content = `The news article captures a tense moment at the Munda Ganapati Sabhabhavana, where a gathering intended to unite against the Sharavati Pumped Storage Project turned into a platform for political rivalry and public apologies.

Key Highlights:
The Confrontation: The headline—"Political Turmoil at Sharavati Project Opposition Meeting"—refers to the verbal spat between Minister Mankal Vaidya and social activist Masthappa Naik Balle. The argument broke out on the dais in the presence of several Swamijis (religious leaders).
Masthappa Naik's Allegations: Masthappa Naik criticized the government’s lack of transparency and accused the district's in-charge minister of not taking a firm stand to stop the project despite having the power to do so. He highlighted that the Padayatra from Gerusoppa to Honnavar was a people's movement that shouldn't be dismissed as a political stunt.
The Minister's Retort: Minister Mankal Vaidya reacted strongly, calling the accusations baseless and accusing Masthappa of engaging in "double-dealing" politics and using social media to spread misinformation. He challenged the critics to stop playing politics with a serious environmental issue.
A Rare Apology: In a significant turn of events, former MLA Sunil Naik publicly apologized on stage. He admitted that the initial approval for the project happened during the previous government's tenure while he was in power, stating, "It was a mistake on my part, and I seek your forgiveness." He urged the current minister to use his influence to cancel the project now.
The Religious Context: The presence of various Swamijis added weight to the event. They expressed that the Sharavati River is a lifeline for the district and should not be destroyed for power projects, regardless of which political party is in charge.
Public Sentiment: The report underscores the growing frustration among the people of Uttara Kannada, who feel caught between political infighting while their natural resources are at stake.`;

const news21ShortDesc = `A report on the high-tension debate at the Sharavati project opposition meeting, where Masthappa Naik questioned the government's commitment and former MLA Sunil Naik issued a public apology.`;
const news21Content = `The article covers the proceedings of the "Sharavati Ulisi" (Save Sharavati) convention at Munda Ganapati Hall, which saw a rare direct confrontation between social activists and high-ranking political leaders.

Key Highlights:
Demanding Administrative Action: The report details how Masthappa Naik Balle challenged District In-charge Minister Mankal Vaidya. He argued that instead of engaging in a "blame game" regarding which previous government started the project, the current administration should exercise its power to officially cancel it.
Admission of Past Mistakes: In a significant development, former MLA Sunil Naik stood before the public and religious leaders to apologize for the project's initial progress during his tenure. He admitted it was a mistake and joined the call for the current government to stop the project immediately.
The Voice of the People: Masthappa Naik emphasized that the 36-kilometer Padayatra was not a political stunt but a genuine expression of the people's fear of losing their forest and river. He dismissed allegations of "social media politics," stating that the movement is rooted in the survival of the district’s ecosystem.
Spiritual Guidance: The presence of various Swamijis (religious heads) provided a non-partisan weight to the event. They urged all political parties to set aside differences and unite to protect the Sharavati River, which they described as the "soul of the region."
Firm Resolution: The convention served as a platform to unify various factions of society, concluding with a collective oath to prevent any environmental destruction caused by the proposed Pumped Storage Project.`;

const news24ShortDesc = `A detailed report on the legal status of the Sharavati Pumped Storage Project in court and Masthappa Naik’s ongoing critique of Minister Mankal Vaidya’s conduct at the Honnavar convention.`;
const news24Content = `The article provides a multi-faceted update on the Sharavati struggle, touching upon both judicial proceedings and the political fallout from the recent public convention.

Key Highlights:
Legal Roadblocks: The report mentions that the project lacks approval from the National Board for Wildlife. Solicitor General Arvind Kamath stated that the concerns regarding the wildlife sanctuary are being reviewed. Furthermore, it is highlighted that under Section 29 of the Wildlife Protection Act, 1972, no project should be approved that destroys the habitat of a sanctuary, which the petitioners are using to stall the project.
Masthappa Naik vs. Minister Vaidya: Under the subheading "Masthappa against Minister Vaidya," the article covers a press release where Naik accuses the Minister of "double-dealing" politics. He reiterated that the Minister spoke untruths regarding Deputy CM D.K. Shivakumar’s stance in front of religious leaders like Shree Raghaveshwara Swamiji and Maruthi Guruji.
The "Fake ID" Allegation: Naik posed a serious question to the Minister: Why are personal matters and "fake social media IDs" being discussed at a convention meant to save a river? He alleged that people close to the Minister are using these digital tools for character assassination instead of addressing the project's environmental impact.
Administrative Defense: The article also includes the Minister's response, where he claims he is personally opposed to the project and has informed his party leaders, but certain elements are playing "petty politics" to confuse the public.`;

for (let item of newsItems) {
    if (item.id === 17) {
        item.shortDescEn = news17ShortDesc;
        item.contentEn = news17Content;
    } else if (item.id === 21) {
        item.shortDescEn = news21ShortDesc;
        item.contentEn = news21Content;
    } else if (item.id === 24) {
        item.shortDescEn = news24ShortDesc;
        item.contentEn = news24Content;
    }
}

// Convert back to string
const newArrayStr = JSON.stringify(newsItems, null, 2);
// Replace keys with unquoted keys to match original format
const finalStr = newArrayStr.replace(/"([^"]+)":/g, '$1:');

const finalData = data.substring(0, arrayStart) + finalStr + data.substring(arrayEnd + 1);

fs.writeFileSync('src/news_data.js', finalData, 'utf8');
console.log('Done');
