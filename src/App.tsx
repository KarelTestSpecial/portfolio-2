import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import matter from 'gray-matter';
import Papa from 'papaparse';

function App() {
  const [lang, setLang] = useState<'nl' | 'en'>('nl');
  const [cvData, setCvData] = useState(null);
  const [projectsData, setProjectsData] = useState({ chromeExtensions: [], githubProjects: [], websites: [] });
  const [loading, setLoading] = useState(true);

  const translations = {
    nl: {
      myProjects: "Mijn Projecten",
      chromeExtensions: "Chrome Extensies",
      githubProjects: "GitHub Projecten",
      websites: "Websites",
      contact: "Contact",
      contactSub: "Je kan me bereiken via e-mail of op het onderstaande adres.",
      viewExtension: "Bekijk Extensie",
      viewGithub: "GitHub",
      viewDemo: "Live Demo",
      visitWebsite: "Bezoek Website",
      about: "Over Mij"
    },
    en: {
      myProjects: "My Projects",
      chromeExtensions: "Chrome Extensions",
      githubProjects: "GitHub Projects",
      websites: "Websites",
      contact: "Contact",
      contactSub: "You can reach me via email or find me at the address below.",
      viewExtension: "View Extension",
      viewGithub: "GitHub",
      viewDemo: "Live Demo",
      visitWebsite: "Visit Website",
      about: "About"
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Dynamically import the markdown file as a raw text module
        const cvModule = await import(`./assets/cv.${lang}.md`);
        const cvResponse = await fetch(cvModule.default);
        const cvText = await cvResponse.text();
        const { data, content } = matter(cvText);
        // @ts-ignore
        setCvData({ ...data, content });

        // Dynamically import the tsv file as a raw text module
        const projectsModule = await import(`./assets/projects.${lang}.tsv`);
        const projectsResponse = await fetch(projectsModule.default);
        const projectsText = await projectsResponse.text();

        const results = Papa.parse(projectsText, {
            header: true,
            skipEmptyLines: true,
        });

        const projects = results.data;
        const categorized = {
            chromeExtensions: [],
            githubProjects: [],
            websites: []
        };
        projects.forEach(p => {
            const project = { name: (p as any).name, description: (p as any).description, githubLink: (p as any).githubLink, liveLink: (p as any).liveLink, status: (p as any).status };
            const typeLower = (p as any).type.toLowerCase();
            if (typeLower === 'chrome') {
                // @ts-ignore
                categorized.chromeExtensions.push(project);
            } else if (typeLower === 'website') {
                // @ts-ignore
                categorized.websites.push(project);
            } else if (typeLower === 'github') {
                // @ts-ignore
                categorized.githubProjects.push(project);
            }
        });
        setProjectsData(categorized);

      } catch (error) {
        console.error("Failed to fetch data:", error);
        setCvData(null); // Ensure data is null on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!cvData) {
    return (
      <div className="container text-center mt-5">
        <h1>Error</h1>
        <p className="lead">Could not load CV data. Please check if the file `src/assets/cv.{lang}.md` exists and is accessible.</p>
      </div>
    );
  }

  const t = translations[lang];

  return (
    <div>
      {/* @ts-ignore */}
      <Header setLang={setLang} lang={lang} contact={cvData.contact} translations={t} />
      {/* @ts-ignore */}
      <Hero name={cvData.name} profile={cvData} />
      {/* @ts-ignore */}
      <About cvData={cvData} translations={t} />
      <Projects projects={projectsData} translations={t} />
      {/* @ts-ignore */}
      <Contact contact={cvData.contact} translations={t} />
      <Footer />
    </div>
  );
}

export default App;