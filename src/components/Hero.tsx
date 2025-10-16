import React from 'react';

interface HeroProps {
  name: string;
  profile: any;
}

const Hero: React.FC<HeroProps> = ({ name, profile }) => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center text-white bg-dark" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="text-center">
        <h1 className="display-1 text-white">{name}</h1>
        {profile.notice && <p className="lead">{profile.notice}</p>}
      </div>
    </section>
  );
};

export default Hero;
