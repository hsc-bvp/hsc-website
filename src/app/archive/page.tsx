'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

interface Person {
  id: number;
  name: string;
  role: string;
  department: string;
  email?: string;
  image?: string;
}

interface StudentCoordinator {
  id: number;
  name: string;
  team: string;
  year: string;
  position?: string;
}

const teacherCoordinators: Person[] = [
  {
    id: 1,
    name: 'Dr. Jolly Parikh',
    role: 'In-charge',
    department: 'Associate Professor, Department of Computer Science and Engineering',
    email: 'jolly.parikh@bharatividyapeeth.edu',
    image: '/DrJolly.jpeg'
  },
  {
    id: 2,
    name: 'Mr. Manish Talwar',
    role: 'Executive Member',
    department: 'Assistant Professor, Department of Instrumentation and Control Engineering',
    email: ''
  },
  {
    id: 3,
    name: 'Dr. Bharat Singh',
    role: 'Member',
    department: 'Assistant Professor, Department of Electronics and Electrical Engineering',
    email: ''
  },
  {
    id: 4,
    name: 'Ms. Amrita Ticku',
    role: 'Member',
    department: 'Assistant Professor, Department of Computer Science and Engineering',
    email: 'amrita.ticku@bharatividyapeeth.edu',
    image: '/amrita.jpg'
  },
  {
    id: 5,
    name: 'Mr. Parashuram',
    role: 'Member',
    department: 'Assistant Professor, Department of Electronics and Communication Engineering',
    email: ''
  },
  {
    id: 6,
    name: 'Dr. Saurabh Singh',
    role: 'Member',
    department: 'Assistant Professor, Department of Applied Sciences',
    email: ''
  },
  {
    id: 7,
    name: 'Dr. Shyla',
    role: 'Member',
    department: 'Assistant Professor, Department of Information Technology',
    email: 'shyla.coend@bharatividyapeeth.edu',
    image: '/DrShyla.jpeg'
  }
];

const studentCoordinatorsData: { [key: string]: StudentCoordinator[] } = {
  '2023-24': [
    { id: 1, name: 'Dev Khokhar', team: 'Student Head', year: '4th Year (CSE)', position: 'Student Head' },
    { id: 2, name: 'Jashith Arora', team: 'Web & Design Team', year: '2nd Year (IT)' },
    { id: 3, name: 'Devansh Tyagi', team: 'Web & Design Team', year: '2nd Year (IT)' },
    { id: 4, name: 'Ameya Bhargava', team: 'Web & Design Team', year: '3rd Year (CSE)' },
    { id: 5, name: 'Ashish Dhiman', team: 'Web & Design Team', year: '3rd Year (CSE)' },
    { id: 6, name: 'Ansh Kapoor', team: 'Content & Documentation Team', year: '4th Year (CSE)' },
    { id: 7, name: 'Dhruv Mathur', team: 'Content & Documentation Team', year: '3rd Year (CSE)' },
    { id: 8, name: 'Anekant Manthan', team: 'Content & Documentation Team', year: '3rd Year (CSE)' },
    { id: 9, name: 'Utkarsh Rajora', team: 'Publicity Team', year: '3rd Year (CSE)' },
    { id: 10, name: 'Tushar Singh', team: 'Publicity Team', year: '3rd Year (CSE)' },
    { id: 11, name: 'Manvi', team: 'Publicity Team', year: '4th Year (ICE)' },
    { id: 12, name: 'Mehreen', team: 'Event Coordination Team', year: '4th Year (CSE)' },
    { id: 13, name: 'Saatvik Dhurandher', team: 'Event Coordination Team', year: '3rd Year (CSE)' },
    { id: 14, name: 'Chinmai Sharma', team: 'Event Coordination Team', year: '4th Year (ICE)' },
  ],
  '2024-25': [
    { id: 1, name: 'Ashish Dhiman', team: 'Student Head', year: '4th Year (CSE-1)', position: 'Student Head' },
    { id: 2, name: 'Jashith Arora', team: 'Website Team', year: '3rd Year (IT-2)' },
    { id: 3, name: 'Udit Maakan', team: 'Website Team', year: '3rd Year (EEE)' },
    { id: 4, name: 'Aayush Mathur', team: 'Website Team', year: '4th Year (CSE-1)' },
    { id: 5, name: 'Shashwat Shivam Pandey', team: 'Website Team', year: '4th Year (CSE-1)' },
    { id: 6, name: 'Dhruv Mathur', team: 'Content & Documentation Team', year: '4th Year (CSE-1)' },
    { id: 7, name: 'Anoushka Singh', team: 'Content & Documentation Team', year: '4th Year (CSE-1)' },
    { id: 8, name: 'Adidev Mohanty', team: 'Content & Documentation Team', year: '4th Year (CSE-1)' },
    { id: 9, name: 'Avinash Gola', team: 'Content & Documentation Team', year: '3rd Year (IT-2)' },
    { id: 10, name: 'Ameya Bhargava', team: 'Social Media Team', year: '4th Year (CSE-1)' },
    { id: 11, name: 'Aditya Srivastav', team: 'Social Media Team', year: '3rd Year (ICE)' },
    { id: 12, name: 'Suraj Khatua', team: 'Social Media Team', year: '3rd Year (ICE)' },
    { id: 13, name: 'Vinay Arora', team: 'Social Media Team', year: '2nd Year (ECE-2)' },
    { id: 14, name: 'Divyansh Gupta', team: 'Event Management Team', year: '4th Year (CSE-1)' },
    { id: 15, name: 'Anekant Manthan', team: 'Event Management Team', year: '4th Year (CSE-1)' },
    { id: 16, name: 'Rishit Singh', team: 'Event Management Team', year: '4th Year (ECE)' },
    { id: 17, name: 'Armaan Jain', team: 'Event Management Team', year: '4th Year (EEE)' },
    { id: 18, name: 'Saatvik Dhurandher', team: 'Publicity Team', year: '4th Year (CSE-1)' },
    { id: 19, name: 'Utkarsh Rajora', team: 'Publicity Team', year: '4th Year (CSE-1)' },
    { id: 20, name: 'Manya Gupta', team: 'Publicity Team', year: '4th Year (CSE-1)' },
    { id: 21, name: 'Dhruv Mahaur', team: 'Publicity Team', year: '3rd Year (ECE)' }
  ]
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const TabButton = ({ active, onClick, children, disabled = false }: TabButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-6 py-3 text-lg font-medium transition-colors ${
      active 
        ? 'text-orange-600 border-b-2 border-orange-600 font-semibold' 
        : 'text-gray-600 hover:text-orange-500'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {children}
  </button>
);

export default function ArchivePage() {
  const [activeTab, setActiveTab] = useState<'2023-24' | '2024-25'>('2023-24');
  const [activeSection, setActiveSection] = useState<'teachers' | 'students'>('teachers');

  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              COORDINATORS
            </h1>
            <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mb-8"></div>
            
            {/* Section Tabs */}
            <div className="flex justify-center mb-8 border-b border-gray-200">
              <TabButton 
                active={activeSection === 'teachers'} 
                onClick={() => setActiveSection('teachers')}
              >
                Teacher Coordinators
              </TabButton>
              <TabButton 
                active={activeSection === 'students'} 
                onClick={() => setActiveSection('students')}
              >
                Student Coordinators
              </TabButton>
            </div>
          </div>

          {activeSection === 'teachers' ? (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Desktop View */}
              <div className="hidden md:block">
                <div className="grid grid-cols-12 bg-orange-50 px-6 py-4 border-b border-gray-200">
                  <div className="col-span-4 text-sm font-semibold text-gray-700">Name</div>
                  <div className="col-span-3 text-sm font-semibold text-gray-700">Role</div>
                  <div className="col-span-5 text-sm font-semibold text-gray-700">Department</div>
                </div>
                {teacherCoordinators.map((teacher) => (
                  <div 
                    key={teacher.id}
                    className="grid grid-cols-12 items-center px-6 py-4 border-b border-gray-100 hover:bg-orange-50 transition-colors duration-200"
                  >
                    <div className="col-span-4 font-medium text-gray-800">{teacher.name}</div>
                    <div className="col-span-3 text-gray-700">{teacher.role}</div>
                    <div className="col-span-5 text-gray-600 text-sm">{teacher.department}</div>
                  </div>
                ))}
              </div>

              {/* Mobile View */}
              <div className="md:hidden">
                {teacherCoordinators.map((teacher) => (
                  <div 
                    key={teacher.id}
                    className="border-b border-gray-200 p-4 hover:bg-orange-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{teacher.name}</h3>
                    <p className="text-orange-600 font-medium">{teacher.role}</p>
                    <p className="text-gray-600 text-sm mt-1">{teacher.department}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Year Tabs */}
              <div className="flex justify-center mb-8 border-b border-gray-200">
                <TabButton 
                  active={activeTab === '2023-24'} 
                  onClick={() => setActiveTab('2023-24')}
                >
                  2023-24
                </TabButton>
                <TabButton 
                  active={activeTab === '2024-25'} 
                  onClick={() => setActiveTab('2024-25')}
                  disabled={studentCoordinatorsData['2024-25'].length === 0}
                >
                  2024-25 {studentCoordinatorsData['2024-25'].length === 0 && '(Coming Soon)'}
                </TabButton>
              </div>

              {/* Student Coordinators List */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Desktop View */}
                <div className="hidden md:grid grid-cols-12 bg-orange-50 px-6 py-4 border-b border-gray-200">
                  <div className="col-span-1 text-sm font-semibold text-gray-700">S.No</div>
                  <div className="col-span-4 text-sm font-semibold text-gray-700">Name</div>
                  <div className="col-span-4 text-sm font-semibold text-gray-700">Team</div>
                  <div className="col-span-3 text-sm font-semibold text-gray-700">Year</div>
                </div>

                {/* Mobile and Tablet View */}
                <div className="md:hidden">
                  {studentCoordinatorsData[activeTab].map((coordinator) => (
                    <div 
                      key={coordinator.id}
                      className="border-b border-gray-200 p-4 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <span className="font-medium text-gray-500 mr-2">{coordinator.id}.</span>
                            <h3 className="text-lg font-semibold text-gray-800">{coordinator.name}</h3>
                          </div>
                          <p className="text-orange-600 font-medium mt-1">{coordinator.team}</p>
                        </div>
                        <span className="text-sm text-gray-600">{coordinator.year}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop View */}
                <div className="hidden md:block">
                  {studentCoordinatorsData[activeTab].map((coordinator: StudentCoordinator) => (
                    <div 
                      key={coordinator.id}
                      className="grid grid-cols-12 items-center px-6 py-4 border-b border-gray-100 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="col-span-1 text-gray-600">{coordinator.id}</div>
                      <div className="col-span-4 font-medium text-gray-800">
                        {coordinator.name}
                        {coordinator.position && (
                          <span className="ml-2 text-xs text-orange-600">({coordinator.position})</span>
                        )}
                      </div>
                      <div className="col-span-4 text-gray-700">{coordinator.team}</div>
                      <div className="col-span-3 text-gray-600">{coordinator.year}</div>
                    </div>
                  ))}
                </div>

                {studentCoordinatorsData[activeTab].length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    No data available for {activeTab}. Check back later!
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
