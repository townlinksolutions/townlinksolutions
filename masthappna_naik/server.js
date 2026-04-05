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

// Google Sheets API endpoint for contact
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
    
    let sheet = doc.sheetsByTitle['contact'];
    
    if (!sheet) {
      sheet = await doc.addSheet({ title: 'contact', headerValues: ['Date', 'Name', 'Email', 'Message', 'Source'] });
    }
    
    // Ensure header row exists
    try {
      await sheet.loadHeaderRow();
    } catch (e) {
      // If loading fails, it might be because there are no headers, so try setting them
      await sheet.setHeaderRow(['Date', 'Name', 'Email', 'Message', 'Source']);
    }
    
    // Double check if headers are set
    if (!sheet.headerValues || sheet.headerValues.length === 0) {
      await sheet.setHeaderRow(['Date', 'Name', 'Email', 'Message', 'Source']);
    }
    
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
    res.status(500).json({ 
      success: false, 
      error: 'Failed to save message', 
      details: error instanceof Error ? error.message : String(error) 
    });
  }
});

// Google Sheets API endpoint for campaign
app.post('/api/campaign', async (req, res) => {
  try {
    const { name, age, place, gender, phone, email, reason, category } = req.body;
    
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
    
    let sheet = doc.sheetsByTitle['campaign'];
    const headers = ['Date', 'Name', 'Age', 'Place', 'Gender', 'Phone', 'Email', 'Reason', 'Category'];
    
    if (!sheet) {
      sheet = await doc.addSheet({ title: 'campaign', headerValues: headers });
    } else {
      // Ensure headers are correct even if sheet exists
      await sheet.loadHeaderRow();
      const currentHeaders = sheet.headerValues;
      const missingHeaders = headers.filter(h => !currentHeaders.includes(h));
      if (missingHeaders.length > 0) {
        // If any headers are missing, we reset the headers to the full list
        // This is safe as long as we don't mind the order changing or adding new ones
        await sheet.setHeaderRow(headers);
      }
    }
    
    await sheet.addRow({
      Date: new Date().toLocaleString(),
      Name: name || '',
      Age: age || '',
      Place: place || '',
      Gender: gender || '',
      Phone: phone || '',
      Email: email || '',
      Reason: reason || '',
      Category: category || ''
    });

    res.json({ 
      success: true, 
      debug: { 
        received: { name, age, place, gender, phone, email, reason, category },
        headers: sheet.headerValues 
      } 
    });
  } catch (error) {
    console.error('Error adding row to Google Sheets:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to save campaign submission', 
      details: error instanceof Error ? error.message : String(error) 
    });
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
