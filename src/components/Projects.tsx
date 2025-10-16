import React from 'react';

interface Project {
    name: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    status?: string;
}

interface ProjectsProps {
    projects: {
        chromeExtensions: Project[];
        githubProjects: Project[];
        websites: Project[];
    },
    translations: any;
}

const Projects: React.FC<ProjectsProps> = ({ projects, translations }) => {
  const { chromeExtensions, githubProjects, websites } = projects;

  if (!chromeExtensions && !githubProjects && !websites) {
      return null;
  }

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2>{translations.myProjects}</h2>
        <hr />

        {chromeExtensions.length > 0 && (
          <>
            <h3>{translations.chromeExtensions}</h3>
            <div className="row g-4 row-cols-1 row-cols-md-3">
              {chromeExtensions.map((project, index) => (
                <div className="col d-flex align-items-stretch" key={index}>
                  <div className="card shadow-sm h-100">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{project.name}</h5>
                      <p className="card-text">{project.description}</p>
                      <div className="mt-auto">
                        {project.liveLink && project.status === 'active' && (
                          <a href={project.liveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{translations.viewExtension}</a>
                        )}
                        {project.githubLink && (
                          <a href={project.githubLink} className="btn btn-secondary ms-2" target="_blank" rel="noopener noreferrer">{translations.viewGithub}</a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
          </>
        )}

        {githubProjects.length > 0 && (
          <>
            <h3>{translations.githubProjects}</h3>
            <div className="row g-4 row-cols-1 row-cols-md-3">
              {githubProjects.map((project, index) => (
                <div className="col d-flex align-items-stretch" key={index}>
                  <div className="card shadow-sm h-100">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{project.name}</h5>
                      <p className="card-text">{project.description}</p>
                      <div className="mt-auto">
                        {project.githubLink && (
                          <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{translations.viewGithub}</a>
                        )}
                        {project.liveLink && project.status === 'active' && (
                          <a href={project.liveLink} className="btn btn-primary ms-2" target="_blank" rel="noopener noreferrer">{translations.viewDemo}</a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
          </>
        )}

        {websites.length > 0 && (
          <>
            <h3>{translations.websites}</h3>
            <div className="row g-4 row-cols-1 row-cols-md-3">
              {websites.map((website, index) => (
                <div className="col d-flex align-items-stretch" key={index}>
                  <div className="card shadow-sm h-100">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{website.name}</h5>
                      <p className="card-text">{website.description}</p>
                      <div className="mt-auto">
                        {website.liveLink && website.status === 'active' && (
                          <a href={website.liveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{translations.visitWebsite}</a>
                        )}
                        {website.githubLink && (
                          <a href={website.githubLink} className="btn btn-secondary ms-2" target="_blank" rel="noopener noreferrer">{translations.viewGithub}</a>
                        )}
                      </div>
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