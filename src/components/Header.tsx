import React from 'react';

interface HeaderProps {
    setLang: (lang: 'nl' | 'en') => void;
    lang: 'nl' | 'en';
    contact: {
        linkedin: string;
        github: string;
    }
}

const Header: React.FC<HeaderProps> = ({ setLang, lang, contact }) => {
  return (
    <header className="bg-dark text-white text-center py-3 fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#hero">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              {contact && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </li>
                </>
              )}
              <li className="nav-item d-flex align-items-center ms-lg-3">
                <button onClick={() => setLang('nl')} disabled={lang === 'nl'} className={`btn btn-sm ${lang === 'nl' ? 'btn-light' : 'btn-outline-light'} me-2`}>NL</button>
                <button onClick={() => setLang('en')} disabled={lang === 'en'} className={`btn btn-sm ${lang === 'en' ? 'btn-light' : 'btn-outline-light'}`}>EN</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
