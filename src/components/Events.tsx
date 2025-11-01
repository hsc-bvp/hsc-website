'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Event = {
  id: number;
  title: string;
  objective: string;
  summary: string;
  image: string;
  date: string;
  month: string;
  year: string;
};

const events: Event[] = [
  {
    id: 1,
    title: 'Seminar: HOW TO PLAN MASTERS ABROAD',
    objective: 'Seminar focused on the importance of pursuing a master\'s degree abroad. Covered key aspects: eligibility criteria, application deadlines, and required documents. The Visa requirements and the application process was discussed.',
    summary: 'The seminar led by Mr. Rohit Bagla on How to Plan Masters Abroad aimed to guide students through the essential steps of pursuing a master\'s degree overseas. It covered key topics such as selecting the right country and university, understanding eligibility criteria, application processes, and scholarship options. The session also provided insights on visa requirements, post-study work opportunities, and how studying abroad can contribute to both personal and professional growth.',
    image: '/assets/images/PlanMastersAbroad20thFeb2025.jpg',
    date: '20',
    month: 'FEB',
    year: '2025'
  },
  {
    id: 2,
    title: 'Seminar: EMERGING TRENDS IN MANAGEMENT CAREERS',
    objective: 'Seminar focused on guiding students to pursue a management career after B.Tech. Covered key aspects: why, when, what, and where to pursue an MBA.',
    summary: 'Mr. Ramessh Mishra led the seminar which aimed to guide students on pursuing a management career after B.Tech, covering key aspects such as why, when, what, and where to pursue an MBA. The session provided valuable insights into career prospects, salary growth, and the significance of choosing the right business school.',
    image: '/assets/images/EmergingTrends3rdFeb2025.jpg',
    date: '03',
    month: 'FEB',
    year: '2025'
  }
];

const Events = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Past Events</h2>
          <div className="w-24 h-1.5 bg-[#f57d3b] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Event Card */}
          <motion.div 
            className="relative group h-full"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg h-full">
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              
              <div className="relative z-10">
                <div className="h-64 relative">
                  <Image
                    src={events[0].image}
                    alt={events[0].title}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 text-[#f57d3b] text-center p-2 rounded-lg group-hover:bg-orange-50 transition-colors">
                    <div className="text-lg font-bold">{events[0].date}</div>
                    <div className="text-sm font-medium">{events[0].month}</div>
                    <div className="text-xs">{events[0].year}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors">
                    {events[0].title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3 group-hover:text-gray-800 transition-colors">
                    {events[0].objective}
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100 group-hover:border-orange-200">
                    <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                      {events[0].month} {events[0].date}, {events[0].year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second Event Card */}
          <motion.div 
            className="relative group h-full"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg h-full">
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              
              <div className="relative z-10">
                <div className="h-64 relative">
                  <Image
                    src={events[1].image}
                    alt={events[1].title}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 text-[#f57d3b] text-center p-2 rounded-lg group-hover:bg-orange-50 transition-colors">
                    <div className="text-lg font-bold">{events[1].date}</div>
                    <div className="text-sm font-medium">{events[1].month}</div>
                    <div className="text-xs">{events[1].year}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors">
                    {events[1].title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3 group-hover:text-gray-800 transition-colors">
                    {events[1].objective}
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100 group-hover:border-orange-200">
                    <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                      {events[1].month} {events[1].date}, {events[1].year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* View All Past Events Card */}
          <motion.div 
            className="relative group h-full"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="relative bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg h-full">
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-1 bg-[#f57d3b] mx-auto mb-4 group-hover:bg-orange-400 transition-colors"></div>
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors">
                    Our Event Archive
                  </h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors">
                    Explore our complete collection of past events, seminars, and workshops that have inspired and educated our community.
                  </p>
                  <Link 
                    href="/events"
                    className="inline-flex items-center bg-[#f57d3b] hover:bg-[#e67335] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 group/button mt-4"
                  >
                    Browse All Past Events
                    <ArrowUpRight className="ml-2 group-hover/button:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;
