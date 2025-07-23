import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Code, Palette, Globe, Database } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'React/Next.js', level: 95, icon: <Code size={20} /> },
    { name: 'TypeScript', level: 90, icon: <Code size={20} /> },
    { name: 'Node.js', level: 85, icon: <Database size={20} /> },
    { name: 'UI/UX Design', level: 88, icon: <Palette size={20} /> },
    { name: 'Flutter', level: 80, icon: <Globe size={20} /> },
    { name: 'Firebase', level: 85, icon: <Database size={20} /> },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Led development of multiple high-scale applications serving 100K+ users.',
      type: 'work'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained web applications using React, Node.js, and Firebase.',
      type: 'work'
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'Creative Agency',
      description: 'Specialized in creating responsive, user-friendly interfaces and UI/UX design.',
      type: 'work'
    },
    {
      year: '2020',
      title: 'Computer Science Degree',
      company: 'University of Technology',
      description: 'Bachelor of Science in Computer Science with focus on Software Engineering.',
      type: 'education'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-orange-500">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences
          </p>
        </div>

        {/* About Section */}
        <div className={`grid lg:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Personal Info */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-orange-500 mr-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Alex Johnson</h2>
                  <p className="text-orange-500">Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin size={18} className="mr-3 text-orange-500" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar size={18} className="mr-3 text-orange-500" />
                  <span>4+ Years Experience</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating efficient, scalable, and user-friendly applications that solve real-world problems. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying the beautiful outdoors of California.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="text-orange-500 mr-3">{skill.icon}</div>
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    </div>
                    <span className="text-orange-500 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My <span className="text-orange-500">Journey</span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-orange-500"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                        {item.year}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        item.type === 'work' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {item.type === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-orange-500 font-medium mb-3">{item.company}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};