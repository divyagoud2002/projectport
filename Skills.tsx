import React, { useState } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaGithub,

} from 'react-icons/fa';

import {
  
  SiMysql,
  
  SiNetlify,
  SiApachetomcat
} from 'react-icons/si';

const SKILLS = [
  // Technical Skills
  { name: 'HTML', icon: <FaHtml5 />, category: 'technical', level: 4 },
  { name: 'CSS', icon: <FaCss3Alt />, category: 'technical', level: 4 },
  { name: 'JavaScript', icon: <FaJs />, category: 'technical', level: 4 },
  { name: 'Java', icon: <FaJava />, category: 'technical', level: 4 },
  { name: 'JSP', category: 'technical', level: 3 },
  { name: 'Servlet', icon: <SiApachetomcat />, category: 'technical', level: 3 },
  { name: 'MySQL', icon: <SiMysql />, category: 'technical', level: 4 },
  { name: 'TailwindCss',  category: 'technical', level: 4 },

  // Tools
  // { name: 'Eclipse', icon: <FaEclipse />, category: 'tools', level: 4 },
  // { name: 'VSCode', icon: <SiVscode />, category: 'tools', level: 5 },
  { name: 'GitHub', icon: <FaGithub />, category: 'tools', level: 4 },
  { name: 'Netlify', icon: <SiNetlify />, category: 'tools', level: 3 },
    { name: 'Git',  category: 'tools', level: 3 },
    { name: 'Eclipse',  category: 'tools', level: 3 },
    { name: 'VScode',  category: 'tools', level: 3 },

  // Soft Skills (NO ICONS)
  { name: 'Communication', icon: null, category: 'soft', level: 4 },
  { name: 'Teamwork', icon: null, category: 'soft', level: 4 },
  { name: 'Adaptability', icon: null, category: 'soft', level: 4 },
  { name: 'Problem Solving', icon: null, category: 'soft', level: 4 },
  { name: 'Leadership', icon: null, category: 'soft', level: 4 },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'soft' | 'tools'>('all');

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="border border-blue-300 dark:border-blue-600 rounded-2xl p-8 shadow-md">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Skills</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              As a fresh graduate, I've developed a range of skills through coursework, projects, 
              and self-learning. I'm constantly expanding my skillset.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
              {[
                { value: 'all', label: 'All Skills' },
                { value: 'technical', label: 'Technical' },
                { value: 'soft', label: 'Soft Skills' },
                { value: 'tools', label: 'Tools' }
              ].map((category) => (
                <button
                  key={category.value}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === category.value
                      ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setActiveCategory(category.value as any)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name}
                className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-600 
                           rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] 
                           transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    {skill.icon && <span className="text-xl">{skill.icon}</span>}
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {skill.category === 'technical' ? 'Technical' : 
                     skill.category === 'soft' ? 'Soft Skill' : 'Tool'}
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                  <span>Beginner</span>
                  <span>Advanced</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
