'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

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
  },
  {
    id: 3,
    title: 'Session on Enrollment in MS Program at UMASS DARTMOUTH',
    objective: 'This seminar was organized to guide students about enrollment in the MS Computer Science and Data Science program at UMASS DARTMOUTH.',
    summary: 'The Guest speaker Mr. Vijay Chalivendra, informed the students about the opportunities and benefits of joining MS Programmes at UMass Dartmouth University. He discussed the different features and curriculum of various computer science courses at UMass Dartmouth and how to enroll in the MS program in 3rd year of B.Tech through possible agreements with BVCOE',
    image: '/assets/images/UMass8thAugust.jpg',
    date: '08',
    month: 'AUG',
    year: '2024'
  },
  {
    id: 4,
    title: 'Seminar: Tips for Presentation of IELTS',
    objective: '1. Learn tips for the presentation of IELTS. 2. Gain insights from Raghav Pasrija, an IELTS scorer of 8.0.',
    summary: 'This seminar, led by Raghav Pasrija who scored 8.0 in IELTS, provides valuable tips for the presentation of IELTS. It\'s a great opportunity to learn from someone who has successfully navigated the IELTS process.',
    image: '/assets/images/28feb2024.jpg',
    date: '28',
    month: 'FEB',
    year: '2024'
  },
  {
    id: 5,
    title: 'Engage with Expertise: University of Sheffield',
    objective: '1. Learn about 100% scholarship opportunities. 2. Understand the application fee waiver process. 3. Discover post study work visa opportunities (upto 2-4 years). 4. Avail one-to-one counselling.',
    summary: 'The University of Sheffield, a top-tier Russell Group institution, is visiting Bharati Vidyapeeth with its esteemed Faculty of Computing. This event presents an insightful interaction and an opportunity to meet the experts and elevate your career to new heights. Highlights include 100% scholarship opportunities, application fee waivers, post study work visa opportunities, and one-to-one counselling.',
    image: '/assets/images/7feb2024.jpg',
    date: '07',
    month: 'FEB',
    year: '2024'
  },
  {
    id: 6,
    title: 'International Higher Education & Scholarships',
    objective: '1. Understand the road map to Australian Education. 2. Avail personal one on one counselling. 3. Learn about application fee waivers. 4. Explore upto 100% Scholarship opportunities. 5. Discover 2 to 5 years of Post Study Work opportunities.',
    summary: 'This event highlighted the opportunities for International Higher Education in Australia, including up to 100% scholarships at top 100 globally ranked universities. It provided a roadmap to Australian education, personal counselling, information on application fee waivers, scholarship opportunities, and post-study work opportunities.',
    image: '/assets/images/31jan2024.jpg',
    date: '31',
    month: 'JAN',
    year: '2024'
  },
  {
    id: 7,
    title: 'Visit by USA University Representatives',
    objective: '1. Engage with representatives from USA universities. 2. Learn about Simpled\'s U.S. Student Recruitment Tours. 3. Hear from Prof. (Dr.) Dharmender Saini, Principal of BVCOE.',
    summary: 'This event features a visit by representatives from USA universities, in association with Simpled\'s U.S. Student Recruitment Tours. It\'s a unique opportunity to engage with these representatives and learn from Prof. (Dr.) Dharmender Saini, Principal of BVCOE.',
    image: '/assets/images/5oct2023.jpg',
    date: '05',
    month: 'OCT',
    year: '2023'
  },
  {
    id: 8,
    title: 'CAT 2022: A Road Ahead',
    objective: 'The agenda of the seminar was to introduce CAT preparation tools and plans along with career opportunities.',
    summary: 'The session was conducted by Mr. Navneet Anand who cleared all the doubts related to CAT preparation and gave the students a new perspective on what options they have when it comes to higher education in India.',
    image: '/assets/images/poster_seminar_CL.jpeg',
    date: '12',
    month: 'MAY',
    year: '2022'
  },
  {
    id: 9,
    title: 'Career Avenues through Education Abroad',
    objective: '1. Getting to know the application process for your master\'s studies. 2. How aspire higher program helps you in your application journey',
    summary: 'This event provided insights into the application process for master\'s studies abroad and how the Aspire Higher program can assist students in their application journey.',
    image: '/assets/images/poster_seminar_CL.jpeg',
    date: '14',
    month: 'MAR',
    year: '2022'
  },
  {
    id: 10,
    title: 'Webinar for Career Counselling',
    objective: '1. Understand the next steps after completing GMAT/GRE. 2. Learn about the process of applying to colleges after GMAT/GRE. 3. Get mentored by India\'s only Harvard certified consultant for college admissions.',
    summary: 'This webinar aimed to guide students on their next steps after completing GMAT/GRE. It provided an opportunity to learn about the college application process and to receive mentorship from India\'s only Harvard certified consultant for college admissions.',
    image: '/assets/images/9dec2022.png',
    date: '09',
    month: 'DEC',
    year: '2022'
  },
  {
    id: 11,
    title: 'Aspire Higher Scholars Program',
    objective: '1. Getting to know the application process for your master\'s studies. 2. How Aspire Higher program helps you in your application journey.',
    summary: 'The Aspire Higher Scholars Program webinar was designed to guide students through the application process for their master\'s studies. It also highlighted how the Aspire Higher program can be a valuable resource in their application journey.',
    image: '/assets/images/Poster_for_Aspire_higher_Shcolars_Program.jpeg',
    date: '02',
    month: 'MAR',
    year: '2022'
  },
  {
    id: 12,
    title: 'Admissions in Foreign Universities',
    objective: '1. Understand the process of getting admissions in top foreign universities. <br> 2. Explore the various courses students can opt for and their future prospects.',
    summary: 'This webinar provided insights into the process of securing admissions in top foreign universities. It also discussed the various courses students can opt for and their future prospects, helping students make informed decisions about their higher education.',
    image: '/assets/images/23dec2021.png',
    date: '23',
    month: 'DEC',
    year: '2021'
  },
  {
    id: 13,
    title: 'Webinar on Overseas Education',
    objective: 'This webinar was organized with the motive to guide the students and introduce them to overseas education.',
    summary: 'The session was conducted by Mr. Gaurav Verma who cleared all the doubts related to overseas education and gave the students a new perspective on what options they have when it comes to higher education overseas.',
    image: '/assets/images/aspa.jpeg',
    date: '21',
    month: 'OCT',
    year: '2021'
  },
  {
    id: 14,
    title: 'Webinar on Profile Building',
    objective: 'The event provided students with a better understanding of the different factors and myths surrounding higher education in both India and the rest of the world.',
    summary: 'The webinar was jam-packed with GRE preparation advice and provided in-depth insights into the testing process. Students preparing for the GRE and hoping to pursue post-secondary education abroad have undoubtedly benefited from it.',
    image: '/assets/images/Webinar on profile building poster.jpeg',
    date: '28',
    month: 'MAY',
    year: '2021'
  },
  {
    id: 15,
    title: 'How to Score 320+ in GRE',
    objective: 'The event had several key takeaways:',
    summary: 'Timeline for Scheduling GRE! Developing Reasoning Techniques to tackle GRE questions! Building GRE Vocabulary! Elimination Method to narrow down the choices! MS Admission Roadmap!',
    image: '/assets/images/GRE_Webinar.jpeg',
    date: '16',
    month: 'APR',
    year: '2021'
  }
];

const EventCard = ({ event }: { event: Event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="relative bg-white rounded-xl overflow-hidden flex flex-col shadow-md transition-all duration-200 hover:shadow-lg max-w-5xl mx-auto my-4 w-full"
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Date Section - Orange */}
        <div className="p-4 flex flex-col items-center justify-center w-full md:w-36 flex-shrink-0 bg-gradient-to-b from-[#F57D3B] to-[#FF9A5A] relative">
          <div className="text-4xl font-bold text-white">{event.date}</div>
          <div className="text-xl text-white/90">{event.month}</div>
          <div className="text-lg text-white/80">{event.year}</div>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-l-[18px] border-l-white border-b-[15px] border-b-transparent hidden md:block"></div>
        </div>

        {/* Event Details - White */}
        <div className="p-5 flex-1 flex flex-col justify-between min-w-0 bg-white relative">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#F57D3B] to-[#FF9A5A] mb-3 rounded-full"></div>
            
            <div className="mb-3">
              <h4 className="font-semibold text-gray-800 mb-1 text-base">Objective</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{event.objective}</p>
            </div>
            
            <div className="relative">
              <h4 className="font-semibold text-gray-800 mb-1 text-base">Summary</h4>
              <div 
                className={`text-gray-700 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'max-h-[1000px]' : 'max-h-16'
                }`}
              >
                {event.summary}
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(!isExpanded);
                }}
                className="mt-1 text-[#F57D3B] hover:text-[#e06d2b] text-sm font-medium flex items-center group transition-colors"
              >
                {isExpanded ? 'Show Less' : 'Read More'}
                <svg 
                  className={`ml-1 w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''} group-hover:translate-x-0.5`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Event Image - Light Grey */}
        <div className="relative w-full md:w-1/3 min-h-[200px] bg-gray-50 flex items-center justify-center p-4 border-l border-gray-100">
          <div className="relative w-full h-full max-w-full max-h-full rounded overflow-hidden bg-white">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 25vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <div style={{ backgroundColor: '#F5EFE7', minHeight: '100vh' }}>
      <Navbar />
      <main className="w-full pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">OUR PAST EVENTS</h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Events Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      </main>
    </div>
  );
}
