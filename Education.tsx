import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const EDUCATION = [
  {
    institution: 'Samskruti College of Engineering and Technology ',
    degree: 'Bachelor of Technology ',
    period: '2021 - 2024',
    location: 'Ghatkesar, Hyderabad',
    description: 'Completed B.Tech in Electronics and Communication Engineering with a CGPA of 7.43',
  },
  {
    institution: 'Samskruti College of Engineering and Technology',
    degree: 'Diploma ',
    period: '2018 - 2021',
    location: 'Ghatkesar, Hyderabad',
    description: 'Completed a diploma in Electronics and Communication Engineering with a CGPA of 7.67',
  },
  {
    degree: 'High School',
    institution: 'Serenity Model High School',
    period: '2008 - 2018',
    location: 'Hyderabad',
    description: 'Completed schooling with a CGPA of 8.8.',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* OUTER WRAPPER WITH BORDER */}
        <div className="border border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-gray-900 rounded-2xl p-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              My educational background has provided me with a strong foundation in computer science 
              and web development.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

              {EDUCATION.map((education, index) => (
                <div key={index} className="relative mb-16 last:mb-0">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-800"></div>

                    {/* Content */}
                    <div className={`ml-8 sm:ml-0 ${index % 2 === 0 ? 'sm:mr-12 sm:text-right' : 'sm:ml-12'} sm:w-1/2`}>
                      <div className="bg-white dark:bg-gray-700 border border-blue-300 dark:border-blue-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{education.degree}</h3>
                        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">{education.institution}</h4>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            <span>{education.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            <span>{education.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300">{education.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
