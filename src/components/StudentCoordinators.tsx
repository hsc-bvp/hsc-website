'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Linkedin, Mail, Github } from 'lucide-react';

type Department = {
  id: string;
  name: string;
};

type Coordinator = {
  id: number;
  name: string;
  title: string;
  designation: string;
  image: string;
  linkedin?: string;
  email?: string;
  github?: string;
};

const departments: Department[] = [
  { id: 'head', name: 'Student Head' },
  { id: 'website', name: 'Website and Design' },
  { id: 'content', name: 'Content and Documentation' },
  { id: 'events', name: 'Event Management' },
  { id: 'pr', name: 'Social Media and Publicity' },
];

const coordinatorsData: Record<string, Coordinator[]> = {
  head: [
    {
      id: 1,
      name: 'Udit Maakan',
      title: 'Student Head',
      designation: 'EEE (4th Year)',
      image: '/student1.png',
      email: 'uditmaakan95@gmail.com',
    },
  ],
  website: [
    {
      id: 2,
      name: 'Jashith Arora',
      title: 'Web & Design Team',
      designation: 'IT (4th Year)',
      image: '/student1.png',
      email: 'jashith2005@gmail.com',
    },
    {
      id: 3,
      name: 'Shreshth Agarwal',
      title: 'Web & Design Team',
      designation: 'CSE (3rd Year)',
      image: '/student1.png',
      email: 'shreshth.agarwal12345@gmail.com',
    },
  ],
  content: [
    {
      id: 4,
      name: 'Mitali Jain',
      title: 'Content & Documentation',
      designation: 'CSE (1st Year)',
      image: '/student1.png',
      email: 'mitalij901@gmail.com',
    },
    {
      id: 5,
      name: 'Suhani Mathur',
      title: 'Content & Documentation',
      designation: 'ECE (1st Year)',
      image: '/student1.png',
      email: 'suhanimathur3135@gmail.com',
    },
  ],
  pr: [
    {
      id: 6,
      name: 'Shaurya Saxena',
      title: 'Social Media & Publicity',
      designation: 'CSE (3rd Year)',
      image: '/student1.png',
      email: 'shaur2801@gmail.com',
    },
    {
      id: 7,
      name: 'Aishna Jain',
      title: 'Social Media & Publicity',
      designation: 'CSE (1st Year)',
      image: '/student1.png',
      email: 'aishnajain1703@gmail.com',
    },
    {
      id: 8,
      name: 'Dhruv Mahaur',
      title: 'Social Media & Publicity',
      designation: 'ECE (4th Year)',
      image: '/student1.png',
      email: 'mahaurdhruv4@gmail.com',
    },
  ],
  events: [
    {
      id: 9,
      name: 'Aastha Narang',
      title: 'Event Management',
      designation: 'ECE (1st Year)',
      image: '/student1.png',
      email: 'aastha.narang0604@gmail.com',
    },
    {
      id: 10,
      name: 'Shivom Singh',
      title: 'Event Management',
      designation: 'CSE (1st Year)',
      image: '/student1.png',
      email: 'shivom2507@gmail.com',
    },
    {
      id: 11,
      name: 'Avya Giri',
      title: 'Event Management',
      designation: 'ECE (1st Year)',
      image: '/student1.png',
      email: 'avyagiri05@gmail.com',
    },
  ],
};

const StudentCoordinators = () => {
  const [activeTab, setActiveTab] = useState<string>('head');

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            OUR COORDINATORS
          </h2>
          <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mb-8"></div>
          
          {/* Department Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveTab(dept.id)}
                className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === dept.id
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coordinatorsData[activeTab]?.map((coordinator) => (
            <div 
              key={coordinator.id} 
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative w-24 h-32 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    className="h-full w-full object-cover relative z-10 border-4 border-white"
                    src={coordinator.image}
                    alt={`${coordinator.name}'s photo`}
                    width={96}
                    height={128}
                    style={{ aspectRatio: '3/4' }}
                  />
                </div>
                
                {/* Name and Title */}
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  {coordinator.name}
                </h3>
                <p className="text-orange-500 font-medium mb-1">{coordinator.title}</p>
                <p className="text-gray-600 text-sm mb-4">{coordinator.designation}</p>
                
                {/* Contact Icons */}
                {(coordinator.email || coordinator.linkedin || coordinator.github) && (
                  <div className="flex space-x-4 mt-2">
                    {coordinator.email && (
                      <a
                        href={`mailto:${coordinator.email}`}
                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300 p-2 rounded-full hover:bg-orange-50"
                        aria-label={`Email ${coordinator.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                    {coordinator.linkedin && (
                      <a
                        href={coordinator.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50"
                        aria-label={`${coordinator.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {coordinator.github && (
                      <a
                        href={coordinator.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-700 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
                        aria-label={`${coordinator.name}'s GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCoordinators;
