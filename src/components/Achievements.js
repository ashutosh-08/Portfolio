import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: '🏆',
      title: '450+ Problems Solved',
      description: 'Across multiple competitive programming platforms'
    },
    {
      icon: '⭐',
      title: 'CodeForces: 1000+ Rating',
      description: 'Solved 250+ algorithmic problems'
    },
    {
      icon: '🎯',
      title: 'CodeChef: 1500+ Rating',
      description: 'Solved 100+ competitive programming challenges'
    },
    {
      icon: '🥇',
      title: 'TCS CodeVita Season 12',
      description: 'Achieved under 1000 rank nationally'
    },
    {
      icon: '💡',
      title: 'Smart India Hackathon',
      description: 'Participated and ranked among top 30+ teams'
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="section-header">
        <h2 className="section-title">Achievements</h2>
      </div>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-title">{achievement.title}</div>
            <div className="achievement-desc">{achievement.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
