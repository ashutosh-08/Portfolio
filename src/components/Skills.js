import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: ['C++', 'JavaScript', 'Python']
    },
    {
      category: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'ReactJs', 'Redux']
    },
    {
      category: 'Backend Development',
      skills: ['NodeJs', 'ExpressJs', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'Core Concepts',
      skills: ['DSA', 'OOP', 'DBMS', 'Computer Network']
    },
    {
      category: 'Developer Tools',
      skills: ['VS Code', 'IntelliJ', 'Postman', 'GitHub', 'GitOps']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
      </div>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
