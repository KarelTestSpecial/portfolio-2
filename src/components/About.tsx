import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2>Curriculum Vitae</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Contactgegevens</h4>
            <ul className="list-unstyled">
              <li><strong>Naam:</strong> Karel DECHERF</li>
              <li><strong>Adres:</strong> Hurstweg 9, 9000 Gent</li>
              <li><strong>GSM:</strong> +(0)474 100 352</li>
              <li><strong>Email:</strong> karel.decherf@gmail.com</li>
              <li><strong>Geboortedatum:</strong> 08/16/1974</li>
              <li><strong>Nationaliteit:</strong> Belg</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Werkervaring</h4>
            <ul className="list-unstyled">
              <li><strong>2022-2024:</strong> FPC: kok</li>
              <li><strong>2009-2011:</strong> De Haven: klerenhersteller</li>
              <li><strong>2008:</strong> Paviljoen C: keukenhulp</li>
              <li><strong>2007-2008:</strong> Pasec: fabrieksarbeider</li>
              <li><strong>2001-2002:</strong> Visitronics: programmeur, webdesigner</li>
              <li><strong>1995-1998:</strong> Ikea: magazijnier</li>
              <li><strong>1996-1997:</strong> Pizza City: koerier</li>
              <li><strong>1994-1995:</strong> Sodexo: keukenhulp</li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h4>Vorming</h4>
            <ul className="list-unstyled">
              <li><strong>2011-2012:</strong> Open Universiteit - Inleiding tot de Psychologie</li>
              <li><strong>1998-2001:</strong> GOCI - Informatica Programmeur/Webdesigner A1</li>
              <li><strong>1993-1995:</strong> KIH Denayer - Industriële Hogeschool - 1e kand. cum laude</li>
              <li><strong>1992-1994:</strong> KULeuven - Hoger Instituut voor de Wijsbegeerte</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Skills</h4>
            <p><strong>AI:</strong> Jules 2.0, Firebase Studio, Google AI Studio, Google Colab</p>
            <p><strong>Software:</strong> MS Office, Open Office, Google Workspace, Windows, Linux, Chrome</p>
            <h4>Talen</h4>
            <ul className="list-unstyled">
              <li><strong>Nederlands:</strong> Moedertaal</li>
              <li><strong>English:</strong> Fluent</li>
              <li><strong>Français:</strong> Normale</li>
              <li><strong>Deutsch:</strong> Anfänger</li>
              <li><strong>Spaans:</strong> Noçiones</li>
            </ul>
            <h4>Bijzonderheden</h4>
            <ul className="list-unstyled">
                <li><strong>Neurotypologie:</strong> Autisme Spectrum Stoornis</li>
                <li><strong>IQ:</strong> 126</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;