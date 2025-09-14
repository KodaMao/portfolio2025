"use client"
import { Github, Linkedin } from 'lucide-react';
import {portfolioData} from '../../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="gradient-text">{portfolioData.personal.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            {portfolioData.personal.title}
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {portfolioData.personal.about}
          </p>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href={portfolioData.personal.social.github}
              className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.personal.social.linkedin}
              className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}