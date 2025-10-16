const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const CV_DIR = path.join(__dirname, '..', 'public');
const HISTORY_DIR = path.join(__dirname, '..', 'CV_HISTORY');

// Ensure directories exist
if (!fs.existsSync(CV_DIR)) fs.mkdirSync(CV_DIR, { recursive: true });
if (!fs.existsSync(HISTORY_DIR)) fs.mkdirSync(HISTORY_DIR, { recursive: true });

// --- API Endpoints ---

// Endpoint to get CV data
app.get('/api/cv/:lang', (req, res) => {
  const { lang } = req.params;
  const filePath = path.join(CV_DIR, `cv.${lang}.md`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    res.json({ ...data, content: content.trim() });
  } else {
    res.status(404).json({ message: 'CV not found' });
  }
});

// Endpoint to get history
app.get('/api/history/:lang', (req, res) => {
  const { lang } = req.params;
  const files = fs.readdirSync(HISTORY_DIR)
    .filter(file => file.startsWith(`cv.${lang}.`) && file.endsWith('.md'))
    .sort()
    .reverse();
  res.json(files);
});

// Endpoint to save CV data
app.post('/api/cv/:lang', (req, res) => {
  const { lang } = req.params;
  const cvData = req.body;
  const filePath = path.join(CV_DIR, `cv.${lang}.md`);
  const { content, ...yamlData } = cvData;

  // Archive current version before overwriting
  if (fs.existsSync(filePath)) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const historyPath = path.join(HISTORY_DIR, `cv.${lang}.${timestamp}.md`);
    fs.copyFileSync(filePath, historyPath);
  }

  const markdownContent = matter.stringify(content || '', yamlData);
  fs.writeFileSync(filePath, markdownContent);

  res.json({ message: 'CV saved successfully!' });
});


// --- Serve the HTML page ---
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'editor.html'));
});


app.listen(port, () => {
  console.log(`CV Editor running at http://localhost:${port}`);
});