import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Sample alumni data - replace with actual data
const alumniData = [
  // First column (top to bottom)
  [
    {
      id: 1,
      name: 'Anushka Mishra',
      university: 'Eindhoven University of Technology',
      image: '/assets/images/AnushkaMishra.jpg',
    },
    {
      id: 2,
      name: 'Muskan Rathore',
      university: 'Deutsche Bank, Germany',
      image: '/assets/images/Muskan_Rathore.jpg',
    },
  ],
  // Second column (single card)
  [
    {
      id: 3,
      name: 'Siddharth Gulati',
      university: 'Masters from London Business School',
      image: '/assets/images/Siddharth_Gulati.jpg',
    },
  ],
  // Third column (top to bottom)
  [
    {
      id: 4,
      name: 'Diksha Chawla',
      university: 'Majors in Marketing and Minors in Analytics',
      image: '/assets/images/Diksha_Chawla.jpg',
    },
    {
      id: 5,
      name: 'Aastha Suri',
      university: 'Rutgers University',
      image: '/assets/images/Aastha_Suri.jpg',
    },
  ],
];

const AlumniCard = ({ name, university, image, isCenter = false }: { name: string; university: string; image: string; isCenter?: boolean }) => (
  <div className={`group relative overflow-hidden rounded-2xl ${isCenter ? 'h-full' : 'mb-6 last:mb-0'}`}>
    <div className="relative w-full aspect-[3/3.5] rounded-2xl overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500 flex flex-col items-center justify-center p-4 text-center">
        <h3 className="text-xl font-bold text-[#f57d3b] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {name}
        </h3>
        <p className="text-[#f57d3b] text-sm mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {university}
        </p>
      </div>
    </div>
  </div>
);

const Alumni = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f57d3b' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5EFE7] mb-3">
            OUR ALUMNI
          </h2>
          <div className="w-24 h-1.5 bg-[#F5EFE7] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Column */}
          <div className="flex flex-col gap-6">
            {alumniData[0].map((alumni) => (
              <AlumniCard key={alumni.id} {...alumni} />
            ))}
          </div>

          {/* Middle Column with Button */}
          <div className="flex flex-col gap-6 relative">
          <div className="mt-[45%] w-full">
              <div className="h-[100px] flex items-center justify-center">
                <Link 
                  href="/alumni"
                  className="bg-[#F5EFE7] hover:bg-opacity-90 text-[#f57d3b] font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 text-lg"
                >
                  Discover All Alumni
                  <ArrowUpRight size={20} className="mt-0.5" />
                </Link>
              </div>
              {alumniData[1].map((alumni) => (
                <AlumniCard key={alumni.id} {...alumni} isCenter />
              ))}
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-6">
            {alumniData[2].map((alumni) => (
              <AlumniCard key={alumni.id} {...alumni} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
