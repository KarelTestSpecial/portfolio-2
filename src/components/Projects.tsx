import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { googleSheetUrl } from '../config';

// Define the structure of a project based on the Google Sheet columns
interface Project {
  type: 'chrome' | 'github' | 'website' | string; // type can be one of these or any string
  name: string;
  description: string;
  link?: string;
  githubLink?: string;
  liveLink?: string;
}

// Define the structure for the categorized projects state
interface CategorizedProjects {
  chromeExtensions: Project[];
  githubProjects: Project[];
  websites: Project[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<CategorizedProjects>({
    chromeExtensions: [],
    githubProjects: [],
    websites: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if the URL is still the placeholder
    if (googleSheetUrl === 'HIER_JE_LINK_PLAKKEN' || !googleSheetUrl) {
      setError('De Google Sheet URL is niet geconfigureerd. Volg de stappen in INSTRUCTIONS.md.');
      setLoading(false);
      return;
    }

    const fetchAndParseData = () => {
      Papa.parse<Project>(googleSheetUrl, {
        download: true,
        header: true,
        complete: (results) => {
          const categorized: CategorizedProjects = {
            chromeExtensions: [],
            githubProjects: [],
            websites: [],
          };

          // Filter out any empty rows Papa might parse
          const validData = results.data.filter(row => row.name);

          validData.forEach((row) => {
            switch (row.type) {
              case 'chrome':
                categorized.chromeExtensions.push(row);
                break;
              case 'github':
                categorized.githubProjects.push(row);
                break;
              case 'website':
                categorized.websites.push(row);
                break;
              default:
                break;
            }
          });

          setProjects(categorized);
          setLoading(false);
        },
        error: (err) => {
          setError(`Fout bij het ophalen of parsen van de data: ${err.message}`);
          setLoading(false);
        },
      });
    };

    fetchAndParseData();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2>My Projects</h2>
          <p>Laden...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2>My Projects</h2>
          <div className="alert alert-danger">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2>My Projects</h2>
        <hr />

        {projects.chromeExtensions.length > 0 && (
          <>
            <h3>Chrome Extensions</h3>
            <div className="row">
              {projects.chromeExtensions.map((project, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{project.name}</h5>
                      <p className="card-text">{project.description}</p>
                      {project.link && (
                        <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Extension</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
          </>
        )}

        {projects.githubProjects.length > 0 && (
          <>
            <h3>GitHub Projects</h3>
            <div className="row">
              {projects.githubProjects.map((project, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{project.name}</h5>
                      <p className="card-text">{project.description}</p>
                      {project.githubLink && (
                        <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} className="btn btn-primary ms-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
          </>
        )}

        {projects.websites.length > 0 && (
          <>
            <h3>Websites</h3>
            <div className="row">
              {projects.websites.map((website, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{website.name}</h5>
                      <p className="card-text">{website.description}</p>
                      {website.link && (
                        <a href={website.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Website</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default Projects;