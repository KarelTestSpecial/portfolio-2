const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzIVbzK4ypdzPzP6piHAXf3LvYTuFqRJ2hixI4GNF75hfSWjeWEOKFUbj6S8JwHiH76azirz2BsHTI/pub?gid=0&single=true&output=tsv';
const outputPath = path.join(__dirname, '..', 'src', 'data', 'projects.json');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

https.get(url, options, (res) => {
  if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
    https.get(res.headers.location, options, (redirectRes) => {
      processResponse(redirectRes);
    }).on('error', (e) => {
        console.error(`Got error on redirect: ${e.message}`);
    });
    return;
  }
  processResponse(res);
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

function processResponse(res) {
    let rawData = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const projects = parseTsv(rawData);
            const categorizedProjects = categorizeProjects(projects);
            fs.writeFileSync(outputPath, JSON.stringify(categorizedProjects, null, 2));
            console.log(`Successfully updated projects.json with ${projects.length} projects.`);
        } catch (e) {
            console.error('Error processing data:', e.message);
        }
    });
}

function parseTsv(tsvData) {
  if (tsvData.charCodeAt(0) === 0xFEFF) {
    tsvData = tsvData.slice(1);
  }

  const rows = tsvData.trim().split(/\r?\n/);
  const headers = rows.shift().split('\t').map(h => h.trim());

  const nameIndex = headers.indexOf('Product/Project Naam');
  const typeIndex = headers.indexOf('Type Product');
  const sourceIndex = headers.indexOf('Source Code Locatie');
  const liveUrlIndex = headers.indexOf('Live URL');
  const liveStatusIndex = headers.indexOf('Live');
  const useCaseIndex = headers.indexOf('Use-Case');

  if (nameIndex === -1 || typeIndex === -1 || liveStatusIndex === -1) {
      throw new Error('Required headers "Product/Project Naam", "Type Product", or "Live" not found.');
  }

  return rows.map(row => {
    const values = row.split('\t').map(v => v.trim());
    const fullValues = [...values, ...Array(headers.length - values.length).fill('')];

    return {
      name: fullValues[nameIndex],
      type: fullValues[typeIndex] || 'Project',
      githubLink: fullValues[sourceIndex],
      liveLink: fullValues[liveStatusIndex].toUpperCase() === 'TRUE' ? fullValues[liveUrlIndex] : '',
      description: fullValues[useCaseIndex] || `A project by ${fullValues[headers.indexOf('GitHub Account')] || 'Karel'}.`
    };
  }).filter(p => p && p.name);
}

function categorizeProjects(projects) {
  const categorized = {
    chromeExtensions: [],
    githubProjects: [],
    websites: []
  };

  projects.forEach(p => {
    const project = { ...p };
    delete project.type;

    const typeLower = p.type.toLowerCase();
    if (typeLower.includes('chrome extension')) {
      categorized.chromeExtensions.push(project);
    } else if (typeLower.includes('website') || typeLower.includes('webapp')) {
      categorized.websites.push(project);
    } else {
      categorized.githubProjects.push(project);
    }
  });

  return categorized;
}
