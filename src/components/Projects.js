import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'WatchNest',
      year: '2024-25',
      liveUrl: 'https://watch-nest-theta.vercel.app/',
      description: 'A full-stack video-sharing platform inspired by YouTube, featuring robust user authentication, video uploads, and seamless playback experiences with scalable cloud storage integration.',
      highlights: [
        'Built with React.js frontend and Node.js + Express.js backend for optimal performance',
        'Designed MongoDB schemas using Mongoose with advanced query techniques including left-joining pipelines',
        'Integrated Cloudinary for scalable video and avatar storage with optimized delivery',
        'Implemented JWT-based authentication with access/refresh tokens and bcrypt password hashing',
        'Achieved login/logout transaction times consistently under 150ms',
        'Developed clean, modular code following industry standards, increasing code reusability by 50%'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT']
    },
    {
      title: 'ZenTask',
      year: '2023-24',
      liveUrl: 'https://zentask-seven.vercel.app/',
      description: 'A task management dashboard built with React and Redux, featuring centralized state management, real-time task synchronization, and event-driven architecture for seamless user experience.',
      highlights: [
        'Established centralized global store managing dynamic data, filters, and UI state',
        'Eliminated prop-drilling and state synchronization issues through Redux architecture',
        'Modularized application logic using Redux Toolkit\'s createSlice function',
        'Streamlined backend-frontend integration with REST APIs and event-driven architectures',
        'Optimized task synchronization for real-time updates across components'
      ],
      tech: ['React.js', 'Redux', 'Node.js', 'Express.js', 'JavaScript']
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a
                href={project.liveUrl}
                className="project-live-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LiveLink
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
