'use client';

import { useState } from 'react';
import Image from 'next/image';

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
      image: '/assets/student_coordinators/Udit_Makaan.png',
      email: 'uditmaakan95@gmail.com',
    },
  ],
  website: [
    {
      id: 2,
      name: 'Jashith Arora',
      title: 'Web & Design Team',
      designation: 'IT (4th Year)',
      image: '/assets/student_coordinators/Jashith_Arora.jpeg',
      email: 'jashith2005@gmail.com',
    },
    {
      id: 3,
      name: 'Shreshth Agarwal',
      title: 'Web & Design Team',
      designation: 'CSE (3rd Year)',
      image: '/assets/student_coordinators/Shreshth_Agarwal.jpg',
      email: 'shreshth.agarwal12345@gmail.com',
    },
  ],
  content: [
    {
      id: 4,
      name: 'Mitali Jain',
      title: 'Content & Documentation',
      designation: 'CSE (1st Year)',
      image: '/assets/student_coordinators/Mitali_Jain.jpg',
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
      image: '/assets/student_coordinators/Shaurya_Saxena.jpg',
      email: 'shaur2801@gmail.com',
    },
    {
      id: 7,
      name: 'Aishna Jain',
      title: 'Social Media & Publicity',
      designation: 'CSE (1st Year)',
      image: '/assets/student_coordinators/Aishna_Jain.jpg',
      email: 'aishnajain1703@gmail.com',
    },
    {
      id: 8,
      name: 'Dhruv Mahaur',
      title: 'Social Media & Publicity',
      designation: 'ECE (4th Year)',
      image: '/assets/student_coordinators/Dhruv_Mahaur.jpg',
      email: 'mahaurdhruv4@gmail.com',
    },
  ],
  events: [
    {
      id: 9,
      name: 'Aastha Narang',
      title: 'Event Management',
      designation: 'ECE (1st Year)',
      image: '/assets/student_coordinators/Aastha_narang.png',
      email: 'aastha.narang0604@gmail.com',
    },
    {
      id: 10,
      name: 'Shivom Singh',
      title: 'Event Management',
      designation: 'CSE (1st Year)',
      image: '/assets/student_coordinators/Shivom_Singh.jpg',
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
    {
      id: 12,
      name: 'Bhavya Singla',
      title: 'Event Management',
      designation: 'CSE (4th Year)',
      image: '/assets/student_coordinators/Bhavya_Singla.jpeg',
      email: 'bhavyasingla05@gmail.com',
    },
  ],
};

const StudentCoordinators = () => {
  const [activeTab, setActiveTab] = useState<string>('head');

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE7] flex justify-center">
      <div className="w-full max-w-7xl">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coordinatorsData[activeTab]?.map((coordinator) => (
            <div 
              key={coordinator.id} 
              className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col items-center"
            >
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative w-48 h-64 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    className="h-full w-full object-cover relative z-10 border-4 border-white"
                    src={coordinator.image}
                    alt={`${coordinator.name}'s photo`}
                    width={192}
                    height={256}
                    style={{ aspectRatio: '3/4' }}
                  />
                </div>
                
                {/* Name and Title */}
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  {coordinator.name}
                </h3>
                <p className="text-orange-500 font-medium mb-1">{coordinator.title}</p>
                <p className="text-gray-600 text-sm mb-4">{coordinator.designation}</p>
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
