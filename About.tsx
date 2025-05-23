import React from 'react';
import { Briefcase, GraduationCap, Code, Layout } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Inner Bordered Container */}
        <div className="border-4 border-blue-500 rounded-xl p-8 bg-blue-50 dark:bg-gray-900">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
          </div>

          {/* Description Box */}
          <div className="flex flex-col items-center">
            <div className="w-full md:w-2/3">
              <div className="border-l-4 border-blue-600 bg-blue-100 dark:bg-gray-700 p-6 rounded-md shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  What I'm looking for
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm actively seeking entry-level opportunities in web development where I can apply my
                  skills, learn from experienced professionals, and grow as a developer.
                </p>
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">It's Me, Divya</h4>
                <p className="text-gray-700 dark:text-gray-200">
                  I’m Divya, a passionate and motivated individual who recently completed my B.Tech in
                  Electronics and Communication Engineering in 2024. <br />
                  I have a strong interest in web development and front-end technologies. <br />
                  My goal is to become a skilled full-stack developer by learning from real-world projects,
                  contributing to dynamic teams, and constantly improving my coding and design skills.
                </p>
              </div>
            </div>
          </div>

          {/* Centered Skills / Highlights Cards */}
          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="p-6 bg-blue-100 dark:bg-blue-950 rounded-lg border border-blue-400 dark:border-blue-700 transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center mb-4">
                  <GraduationCap className="text-blue-700 dark:text-blue-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fresh Graduate</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Class of 2024 with a Bachelor's Technology in Electronics Communication Engineering.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-blue-100 dark:bg-blue-950 rounded-lg border border-blue-400 dark:border-blue-700 transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center mb-4">
                  <Code className="text-blue-700 dark:text-blue-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Coding Enthusiast</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Passionate about writing clean, efficient, and maintainable code.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-blue-100 dark:bg-blue-950 rounded-lg border border-blue-400 dark:border-blue-700 transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center mb-4">
                  <Layout className="text-blue-700 dark:text-blue-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">UI Focused</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Keen interest in creating beautiful, intuitive user interfaces.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-blue-100 dark:bg-blue-950 rounded-lg border border-blue-400 dark:border-blue-700 transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center mb-4">
                  <Briefcase className="text-blue-700 dark:text-blue-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Job Seeker</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Actively looking for opportunities to start my professional career.
                </p>
              </div>
            </div>
          </div>

        </div> {/* End of bordered inner box */}
      </div>
    </section>
  );
};

export default About;
