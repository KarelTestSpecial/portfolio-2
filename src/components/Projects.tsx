import React from 'react';

const chromeExtensions = [
  {
    name: 'Zeer Praktische Klok Versie 1.2',
    link: 'https://chromewebstore.google.com/detail/very-practical-clock/ncooonkkjoeikgkbbljefnmhldpgdpdn',
    description: 'A very practical clock.'
  },
  {
    name: 'Battery Percentage Versie 1.0',
    link: 'https://chromewebstore.google.com/detail/bcknfhofonlfillmlonppglflhgdbeoa',
    description: 'Shows the battery percentage.'
  },
  {
    name: 'New Tab Organizer 1.1',
    link: 'https://chromewebstore.google.com/detail/new-tab-organizer/llhggelkoodddbgmnmfplcmchbbkkjpk',
    description: 'Organizes your new tabs.'
  },
  {
    name: 'Google AI Studio - File Reader',
    link: 'https://chromewebstore.google.com/detail/google-ai-studio-file-rea/holadmfpcclmpmkdkmcanifihneflfop?authuser=0&hl=en&pli=1',
    description: 'Reads files in Google AI Studio.'
  },
  {
    name: 'NotebookLM Source Uploader Versie 1.2',
    link: 'https://chromewebstore.google.com/detail/notebooklm-source-uploade/cflibmhmbbbnkjhobikinkkabplcijdj',
    description: 'Uploads sources to NotebookLM.'
  },
  {
    name: 'YouTube Playlist Collector',
    link: 'https://chromewebstore.google.com/detail/youtube-playlist-collecto/noadbldckkkcfkhghjehpdldgppbggde',
    description: 'Collects YouTube playlists.'
  },
  {
    name: 'Youtube Rightclick',
    link: 'https://chromewebstore.google.com/detail/youtube-rightclick/dceebkineaajkfponfimilfebkgbcchh',
    description: 'Enables right-click on YouTube.'
  }
];

const githubProjects = [
    {
        name: 'URL-pulse',
        githubLink: 'https://github.com/KarelTestSpecial/url-pulse',
        liveLink: 'https://kareltestspecial.github.io/url-pulse/',
        description: 'A tool to monitor URL status.'
    },
    {
        name: 'Newtab Startpage Dashboard',
        githubLink: 'https://github.com/KarelTestSpecial/startpage',
        description: 'A custom startpage for your new tab.'
    },
    {
        name: 'Custom Data Tree',
        githubLink: 'https://github.com/KarelTestSpecial/custom-data-tree/',
        liveLink: 'https://kareltestspecial.github.io/custom-data-tree/',
        description: 'A tool to create custom data trees.'
    },
    {
        name: 'Longevity Food Health data tree',
        githubLink: 'https://github.com/KarelTestSpecial/LFH/',
        liveLink: 'https://kareltestspecial.github.io/LFH/',
        description: 'A data tree for longevity food health.'
    },
    {
        name: 'Link-in-bio-Hub',
        githubLink: 'https://github.com/KarelTestSpecial/link-in-bio-hub-repo',
        liveLink: 'https://linkinbiohub.web.app',
        description: 'A hub for your links.'
    },
    {
        name: 'AI Studio File Reader',
        githubLink: 'https://github.com/KarelTestSpecial/aistudioreader',
        description: 'A file reader for AI Studio.'
    },
    {
        name: 'NotebookLM Source Uploader',
        githubLink: 'https://github.com/KarelTestSpecial/notebooklm-source-loader',
        description: 'Uploads sources to NotebookLM.'
    },
    {
        name: 'Battery Percentage',
        githubLink: 'https://github.com/KarelTestSpecial/battery-percentage',
        description: 'Shows the battery percentage.'
    },
    {
        name: 'Zeer Praktische Klok',
        githubLink: 'https://github.com/KarelTestSpecial/very-practical-clock',
        description: 'A very practical clock.'
    },
    {
        name: 'YouTube Rightclick CSV',
        githubLink: 'https://github.com/KarelTestSpecial/youtube-rightclick-csv',
        description: 'Exports YouTube data to CSV.'
    },
    {
        name: 'YouTube Playlist CSV',
        githubLink: 'https://github.com/KarelTestSpecial/youtube-playlist-csv',
        description: 'Exports YouTube playlist data to CSV.'
    },
    {
        name: 'YouTube Playlist Collector',
        githubLink: 'https://github.com/KarelTestSpecial/youtube-playlist-collector',
        description: 'Collects YouTube playlists.'
    },
    {
        name: 'YouTube Playlist 2-Way Collector',
        githubLink: 'https://github.com/KarelTestSpecial/youtube-2way-collector',
        description: 'A 2-way YouTube playlist collector.'
    },
    {
        name: 'OCR combi',
        githubLink: 'https://github.com/KarelTestSpecial/ocr-combi-addon',
        description: 'An OCR combination addon.'
    }
];

const websites = [
    {
        name: 'Vegan-BioTech-Report',
        link: 'https://profdrkdc.github.io/Vegan-BioTech-Report/',
        description: 'A report on Vegan BioTech.'
    },
    {
        name: 'Autiwiki',
        link: 'https://autiwiki.com',
        description: 'A wiki for autism.'
    },
    {
        name: 'Autiwiki (Odoo)',
        link: 'https://autiwiki.odoo.com',
        description: 'A wiki for autism, built with Odoo.'
    }
];


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2>My Projects</h2>
        <hr />
        <h3>Chrome Extensions</h3>
        <div className="row">
          {chromeExtensions.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Extension</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <h3>GitHub Projects</h3>
        <div className="row">
          {githubProjects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                  {project.liveLink && (
                    <a href={project.liveLink} className="btn btn-primary ms-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <h3>Websites</h3>
        <div className="row">
            {websites.map((website, index) => (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">{website.name}</h5>
                            <p className="card-text">{website.description}</p>
                            <a href={website.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Website</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;