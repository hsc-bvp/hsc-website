'use client';

const Vision = () => {
  const about = "Higher Study Cell (HSC) has been established in February 2019 to cater to various needs of the students who wish to opt for higher studies in their career. Students can consult HSC for help regarding seeking admission in foreign universities and its requirements. They can inquire about training opportunities arising outside college or university.";

  const mission = "The key element of HSC is to establish a direct connection between the current student (who wishes to pursue higher studies) and the alumni who have pursued or are currently pursuing higher studies. Additionally, students can also approach HSC to seek help in preparation of material for admission such as writing statement of purpose (SOP), requesting letter of recommendation(s), and the like.";

  const focusAreas = [
    {
      title: "Alumni Network",
      description: "Collecting data of the Alumni who have done higher studies fostering a network among Universities, Colleges, and Institutions abroad committed to impart Higher Education and Collaborative Study programmes.",
      icon: "👥"
    },
    {
      title: "University Relations",
      description: "Promoting new relationships between overseas Universities and Institutions and to help define the scope of such relationships through appropriate Memoranda of Understanding (MoUs).",
      icon: "🎓"
    },
    {
      title: "Educational Seminars",
      description: "Organizing Seminars on 'Higher Education at various Universities abroad' periodically to keep students informed about global opportunities.",
      icon: "📚"
    }
  ];

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Higher Study Cell
          </h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Empowering students to achieve their academic aspirations through guidance, resources, and global connections.
          </p>
        </div>

        {/* About Section */}
        <div className="relative group mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-300 to-orange-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
          <div className="relative p-8 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Our Purpose</h3>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">{about}</p>
              <p className="text-gray-700 leading-relaxed">{mission}</p>
            </div>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area) => (
            <div key={area.title} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-300 to-orange-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
              <div className="relative h-full p-8 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;
