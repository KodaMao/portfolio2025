"use client"
import {portfolioData} from '../../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-20 circuit-border" style={{margin: '24px', padding: '16px', background: '#0a1a2f'}}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#00cfff', textShadow: '0 0 8px #00cfff'}}>Skills & Technologies</h2>
        
        <div className="max-w-4xl mx-auto">
          {portfolioData.skills.map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold" style={{color: '#00cfff'}}>{skill.name}</span>
                <span style={{color: '#b3e6ff'}}>{skill.level}%</span>
              </div>
              <div className="w-full rounded-full h-3" style={{background: '#003366'}}>
                <div
                  style={{ width: `${skill.level}%`, background: 'linear-gradient(90deg, #00cfff 60%, #003366 100%)', height: '100%', borderRadius: '8px', boxShadow: '0 0 8px #00cfff' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}