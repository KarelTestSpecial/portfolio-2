import React from 'react';
import ReactMarkdown from 'react-markdown';

interface AboutProps {
  cvData: {
    profile: string;
    notice: string;
    name: string;
    contact: any;
    workExperience: any[];
    education: any[];
    skills: any;
    languages: any[];
    transport: string;
    content: string;
  };
  translations: any;
}

const About: React.FC<AboutProps> = ({ cvData, translations }) => {
  if (!cvData) return null;

  return (
    <section id="about" className="py-5" style={{paddingTop: '80px !important'}}>
      <div className="container">
        <h2>{translations.about}</h2>
        <div className="row">
          <div className="col-md-12">
            <ReactMarkdown>{cvData.content}</ReactMarkdown>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h4>{translations.workExperience}</h4>
            <ul className="list-unstyled">
              {cvData.workExperience?.map((job, index) => (
                <li key={index} className="mb-3">
                  <strong>{job.role}</strong>{job.company && ` @ ${job.company}`}
                  <br />
                  <small className="text-muted">{job.period}</small>
                  <ReactMarkdown>{job.description}</ReactMarkdown>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h4>{translations.skills}</h4>
            {cvData.skills && Object.entries(cvData.skills).map(([category, skills]) => (
                <div key={category}>
                    <p><strong>{category.replace(/_/g, ' ')}:</strong> {skills as string}</p>
                </div>
            ))}
            <h4 className="mt-4">{translations.education}</h4>
            <ul className="list-unstyled">
              {cvData.education?.map((edu, index) => (
                <li key={index}>
                  <strong>{edu.degree}</strong>
                  <br />
                  {edu.institution && <>{edu.institution}, </>}
                  <small className="text-muted">{edu.year}</small>
                </li>
              ))}
            </ul>
            <h4 className="mt-4">{translations.languages}</h4>
            <ul className="list-unstyled">
              {cvData.languages?.map((lang, index) => (
                <li key={index}><strong>{lang.language}:</strong> {lang.proficiency}</li>
              ))}
            </ul>
            {cvData.transport && <>
                <h4 className="mt-4">Transport</h4>
                <p>{cvData.transport}</p>
            </>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
