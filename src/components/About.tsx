import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  const cards = [
    { id: 1, title: 'Mission', image: '/placeholder1.jpg', link: '#', hidden: true },
    { id: 2, title: 'Events', image: '/about_events.png', link: '/events', hidden: false },
    { id: 3, title: 'Alumni', image: '/assets/images/AnushkaMishra.jpg', link: '/alumni', hidden: false },
    { id: 4, title: 'Resources', image: '/about_resources.jpg', link: '/resources', hidden: false },
    { id: 5, title: 'Faculty', image: '/about_faculty.jpg', link: '/faculty', hidden: false },
    { id: 6, title: 'Alumni', image: '/placeholder6.jpg', link: '#', hidden: true },
  ] as const;

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f57d3b' }}>
      <div className="max-w-7xl mx-auto">
        {/* Quote - Positioned at the top, starting from second column */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="col-start-2 col-span-2">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              &ldquo;EDUCATION IS THE MOST POWERFUL WEAPON WHICH YOU CAN USE TO CHANGE THE WORLD&rdquo;
            </h2>
          </div>
        </div>
        
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className={`relative group overflow-hidden rounded-xl ${card.hidden ? 'invisible' : ''}`}
            >
              <div className="h-[28rem] w-full">
                {!card.hidden && (
                  <Link href={card.link} className="block h-full">
                    <div className="w-full h-full bg-white bg-opacity-10 rounded-lg overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={500}
                        height={700}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-4 right-4 bg-[#F5EFE7] text-[#f57d3b] px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-bold">{card.title} →</h3>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default About;
