import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(__dirname));

// Google Sheets API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, source } = req.body;
    
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !privateKey || !sheetId) {
      console.error('Google Sheets credentials missing');
      return res.status(500).json({ success: false, error: 'Server configuration error' });
    }

    const serviceAccountAuth = new JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();
    
    const sheet = doc.sheetsByIndex[0]; // Assumes first sheet
    
    await sheet.addRow({
      Date: new Date().toLocaleString(),
      Name: name,
      Email: email,
      Message: message,
      Source: source || 'Contact Form'
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error adding row to Google Sheets:', error);
    res.status(500).json({ success: false, error: 'Failed to save message' });
  }
});

// Endpoint to update news data
app.post('/api/news/update', async (req, res) => {
  try {
    const { newsItems } = req.body;
    const fs = await import('fs');
    const path = await import('path');
    
    const dataFilePath = path.join(__dirname, 'src', 'news_data.js');
    const fileContent = `const newsItems = ${JSON.stringify(newsItems, null, 2)};

if (typeof window !== 'undefined') {
  window.newsItems = newsItems;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = newsItems;
}
`;
    fs.writeFileSync(dataFilePath, fileContent);
    res.json({ success: true });
  } catch (error) {
    console.error('Error updating news data:', error);
    res.status(500).json({ success: false, error: 'Failed to update news data' });
  }
});

console.log('GEMINI_API_KEY in server:', !!process.env.GEMINI_API_KEY);
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
