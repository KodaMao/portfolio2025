"use client"
import { ExternalLink, Github } from 'lucide-react';
import {portfolioData} from '../../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-20 circuit-border" style={{margin: '24px', padding: '16px', background: '#0a1a2f'}}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#00cfff', textShadow: '0 0 8px #00cfff'}}>Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl shadow-lg overflow-hidden card-hover"
              style={{background: '#003366', color: '#00cfff', border: '2px solid #00cfff', boxShadow: '0 0 16px #00cfff'}}
            >
              <div className="h-48" style={{background: 'linear-gradient(135deg, #00cfff 10%, #003366 90%)'}}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3" style={{color: '#00cfff', textShadow: '0 0 6px #00cfff'}}> {project.title} </h3>
                <p className="mb-4" style={{color: '#b3e6ff'}}> {project.description} </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{background: '#0a1a2f', color: '#00cfff', border: '1px solid #00cfff', borderRadius: '8px', padding: '4px 12px', fontSize: '0.95em'}}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    style={{color: '#00cfff', textShadow: '0 0 4px #00cfff'}}
                    className="flex items-center hover:text-[#003366] transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    style={{color: '#00cfff', textShadow: '0 0 4px #00cfff'}}
                    className="flex items-center hover:text-[#003366] transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}