import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const words = document.querySelectorAll('.hero-text.word');
    let letterDelay = 0;

    words.forEach((word) => {
      const letters = word.textContent.split('');
      word.innerHTML = '';

      letters.forEach((letter) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = letter;
        span.style.animationDelay = `${letterDelay * 0.03}s`;
        word.appendChild(span);
        letterDelay++;
      });
    });
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-bg-circle circle-1"></div>
        <div className="hero-bg-circle circle-2"></div>
        <div className="hero-bg-circle circle-3"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-text">
          <span className="word">Hi,</span>
          <span className="word">I</span>
          <span className="word">am</span>
          <span className="word gradient-text">Ashutosh</span>
          <span className="word gradient-text">Kumar,</span>
          <span className="word">a</span>
          <span className="word">Full</span>
          <span className="word">Stack</span>
          <span className="word">Developer.</span>
        </h1>
        <p className="hero-subtitle">
          Transforming ideas into functional software with modern technologies.
        </p>
        <div className="hero-cta">
          <a href="mailto:ashutoshkumar89403@gmail.com" className="btn btn-primary">
            Hire Me
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="btn btn-secondary">
            Projects
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
