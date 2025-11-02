'use client';

import Image from 'next/image';
import EmailButton from './EmailButton';

const Faculty = () => {
  const facultyMembers = [
    { 
      id: 1, 
      name: 'Dr. Jolly Parikh', 
      role: 'In-charge', 
      designation: 'Associate Professor, Department of Computer Science and Engineering', 
      email: 'jolly.parikh@bharatividyapeeth.edu', 
      image: '/assets/faculty/DrJolly.png' 
    },
    { 
      id: 2, 
      name: 'Mr. Manish Talwar', 
      role: 'Executive Member', 
      designation: 'Assistant Professor, Department of Instrumentation and Control Engineering', 
      email: 'manish.talwar@bharatividyapeeth.edu', 
      image: '/assets/faculty/MrManish.png' 
    },
    { 
      id: 3, 
      name: 'Dr. Bharat Singh', 
      role: 'Member', 
      designation: 'Assistant Professor, Department of Electrical and Electronics Engineering', 
      email: 'bharat.singh@bharatividyapeeth.edu', 
      image: '/assets/faculty/DrBharat.png' 
    },
    { 
      id: 4, 
      name: 'Dr. Payal Malik', 
      role: 'Member', 
      designation: 'Assistant Professor, Department of Information Technology', 
      email: 'payal.malik@bharatividyapeeth.edu', 
      image: '/assets/faculty/DrPayal.png' 
    },
    { 
      id: 5, 
      name: 'Dr. Ruchi Sharma', 
      role: 'Member', 
      designation: 'Associate Professor, Department of Electronics and Communication Engineering', 
      email: 'ruchi.sharma@bharatividyapeeth.edu', 
      image: '/assets/faculty/DrRuchi.png' 
    },
    { 
      id: 6, 
      name: 'Dr. Kirti Sharma', 
      role: 'Member', 
      designation: 'Assistant Professor, Department of Computer Science and Engineering', 
      email: 'kirti.sharma@bharatividyapeeth.edu', 
      image: '/assets/faculty/DrKirti.png' 
    },
    { 
      id: 7, 
      name: 'Dr. Parashuram', 
      role: 'Member', 
      designation: 'Assistant Professor, Department of Electronics and Communication Engineering', 
      email: 'parashuram.patel@bharatividyapeeth.edu', 
      image: '/assets/faculty/DrParashuram.png' 
    },
    { 
      id: 8, 
      name: 'Dr. Rupali Pandey', 
      role: 'Member', 
      designation: 'Assistant Professor, Department of Applied Sciences', 
      email: 'rupali.pandey@bharatividyapeeth.edu', 
      image: '/assets/faculty/DrRupali.jpg' 
    },
  ];

  return (
    <div id="faculty-section" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            OUR FACULTY
          </h2>
          <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {facultyMembers.map((faculty) => (
            <div 
              key={faculty.id} 
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col"
            >
              <div className="flex flex-col items-center text-center flex-grow">
                <div className="relative w-48 h-60 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    width={192}
                    height={240}
                    className="h-full w-full object-cover relative z-10 border-4 border-white"
                    style={{ aspectRatio: '3/4' }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {faculty.name}
                </h3>
                <p className="text-orange-500 font-medium">{faculty.role}</p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{faculty.designation}</p>
                <EmailButton email={faculty.email} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
