'use client';

import Navbar from '@/components/Navbar';

const alumniData = [
  { id: 1, name: 'Anurag Thapliyal', university: 'XIM University', year: '2024-25' },
  { id: 2, name: 'Anekant Manthan', university: 'ICFAI Business School, Hyderabad', year: '2024-25' },
  { id: 3, name: 'Ansh Agarwal', university: 'IIM Indore', year: '2024-25' },
  { id: 4, name: 'V. Gayathri', university: 'DTU', year: '2024-25' },
  { id: 5, name: 'Gaurish', university: 'NSUT', year: '2024-25' },
  { id: 6, name: 'Deepanshu', university: 'UNIVERSITA DI PISA', year: '2024-25' },
  { id: 7, name: 'Chinmay Khanna', university: 'ARIZONA STATE UNIVERSITY', year: '2024-25' },
  { id: 8, name: 'Mayank Singh', university: 'Berlin School of Business & Innovation Germany', year: '2024-25' },
  { id: 9, name: 'Pranav P', university: 'University of Warwick UK', year: '2024-25' },
  { id: 10, name: 'Karan', university: 'IIM SHILONG', year: '2024-25' },
  { id: 11, name: 'Naman Vashishtha', university: 'Leeds School of Business, UK', year: '2024-25' },
  { id: 12, name: 'Siddhart Goyal', university: 'Technical University Darmstadt, Germany', year: '2024-25' },
  { id: 13, name: 'Hena Varma', university: 'NSUT DELHI', year: '2024-25' },
  { id: 14, name: 'Vishal', university: 'Thapar Institute of Engineering and Technology, Punjab', year: '2024-25' },
  { id: 15, name: 'Shivam', university: 'NPTI FARIDABAD', year: '2024-25' },
  { id: 16, name: 'Govind Goyal', university: 'XLRI Jamshedpur', year: '2024-25' },
  { id: 17, name: 'Joyeetha Choubey', university: 'DTU', year: '2023-24' },
  { id: 2, name: 'Harshit', university: 'IIM CALCUTTA', year: '2023-24' },
  { id: 3, name: 'Abhinav', university: 'IIIT DELHI', year: '2023-24' },
  { id: 4, name: 'Ishika Sharma', university: 'SOIL School of Business Design', year: '2023-24' },
  { id: 5, name: 'Nargis Hoda Firdaus', university: 'JMI', year: '2023-24' },
  { id: 6, name: 'Shivam Gupta', university: 'LBSIM', year: '2023-24' },
  { id: 7, name: 'Gitika', university: 'IGDTUW', year: '2023-24' },
  { id: 8, name: 'Anushka Mishra', university: 'Eindhoven University of Technology', year: '2023-24' },
  { id: 9, name: 'Aditya Singh Tomar', university: 'University of Southampton', year: '2023-24' },
  { id: 10, name: 'Parvesh Rana', university: 'University of California Irvine', year: '2023-24' },
  { id: 11, name: 'Taranpreet Singh', university: 'Queen Mary University of London', year: '2023-24' },
  { id: 12, name: 'Tanmay Wadhera', university: 'University of Stuttgart', year: '2023-24' },
  { id: 13, name: 'R.N Krishna Deekshit', university: 'Arizona State University', year: '2023-24' },
  { id: 14, name: 'Pranav Grover', university: 'University of Texas Dallas', year: '2023-24' },
  { id: 15, name: 'Raghav Pasrija', university: 'Technical University Munich / University of Stuttgart', year: '2023-24' },
  { id: 16, name: 'Veshesh Saluja', university: 'Mason George University', year: '2023-24' },
  { id: 17, name: 'Vedant Sharma', university: 'University of Dundee', year: '2023-24' },
  { id: 18, name: 'Muskan Jaggi', university: 'IVEY Business School', year: '2023-24' },
  { id: 19, name: 'Ishaan Nagpal', university: 'IIM JAMMU', year: '2023-24' },
  { id: 20, name: 'Khusi Jain', university: 'Island Coastal Aviation', year: '2023-24' },
  { id: 21, name: 'Vagisha Gupta', university: 'IDGTWU', year: '2023-24' },
  { id: 22, name: 'Rohan', university: 'Birmingham University', year: '2023-24' },
  { id: 23, name: 'Shray Moza', university: 'Dalhousie University', year: '2023-24' },
  { id: 24, name: 'Archit Gupta', university: 'Boston University', year: '2023-24' },
  { id: 25, name: 'Surmai Somya', university: 'ESCP BUSINESS SCHOOL', year: '2023-24' },
  { id: 26, name: 'Akash Saini', university: 'The University of Galway', year: '2023-24' },
  { id: 27, name: 'Shivansh Kher', university: 'DTU', year: '2022-23' },
  { id: 28, name: 'Pranav Gupta', university: 'MBI Gurgaon', year: '2022-23' },
  { id: 29, name: 'Nitya Mathur', university: 'Carnegie Mellon University', year: '2022-23' },
  { id: 30, name: 'Archit', university: 'International Canada University', year: '2022-23' },
  { id: 31, name: 'Varn Gupta', university: 'IIT Bombay', year: '2022-23' },
  { id: 32, name: 'Gagan Jindal', university: 'Humber College, North Campus', year: '2022-23' },
  { id: 33, name: 'Chaitanya Pandey', university: 'University of Edinburgh', year: '2022-23' },
  { id: 34, name: 'Aastha Suri', university: 'Rutgers University', year: '2022-23' },
  { id: 35, name: 'Hardik Bishnoi', university: 'Northeastern University, Portland, Maine', year: '2022-23' },
  { id: 36, name: 'Shreya Sharma', university: 'IIM Vishakhapatnam', year: '2022-23' },
  { id: 37, name: 'Saniya Kapur', university: 'Northeastern University', year: '2021-22' },
  { id: 38, name: 'Raghavi Singhal', university: 'Texas A&M University, College Station, USA', year: '2021-22' },
  { id: 39, name: 'SAGNIK BHATTACHARYA', university: 'Ashoka University, India', year: '2021-22' },
  { id: 40, name: 'RAKSHIT KHARBANDA', university: 'ESSEC Business School, France', year: '2021-22' },
  { id: 41, name: 'HARIT RUSTAGI', university: 'IMT, Ghaziabad', year: '2021-22' },
  { id: 42, name: 'Gautam Manocha', university: 'University of Stuttgart, Germany', year: '2021-22' },
  { id: 43, name: 'Eshan Singh', university: 'IIM Ahmedabad', year: '2021-22' },
  { id: 44, name: 'HIMANSHU MANGAL', university: 'Syracuse University', year: '2021-22' },
  { id: 45, name: 'RISHIKA GARG', university: 'University of California, Davis', year: '2021-22' },
  { id: 46, name: 'RAUNAK NEGI', university: 'Rutgers, State University of New Jersey', year: '2021-22' },
  { id: 47, name: 'JISHNU BHARDWAJ', university: 'California State University, Long Beach', year: '2021-22' },
  { id: 48, name: 'VIPUL SHARMA', university: 'Delhi School of Economics', year: '2021-22' },
  { id: 49, name: 'BHANUJ GANDHI', university: 'IIIT Hyderabad', year: '2021-22' },
  { id: 50, name: 'MANAN KAUSHIK', university: 'IELTS', year: '2021-22' },
  { id: 51, name: 'Ayush Aggarwal', university: 'Stevens Institute of Technology', year: '2021-22' },
  { id: 52, name: 'Rishab Lamba', university: 'The University of Illinois', year: '2019-20' },
  { id: 53, name: 'Aditya Chaudhary', university: 'The University of Illinois', year: '2019-20' },
  { id: 54, name: 'Mankirat', university: 'University of Massachusetts', year: '2019-20' },
  { id: 55, name: 'Prachi Dhariwal', university: 'MS CSE, Université Bishop\'s University', year: '2019-20' },
  { id: 56, name: 'Yash Gupta', university: 'USC University of Southern California', year: '2019-20' },
  { id: 57, name: 'Nipun Soni', university: 'Master of Data Science, Monash University', year: '2019-20' },
  { id: 58, name: 'Mansi Mittal', university: 'MBA, IBS, Hyderabad', year: '2019-20' },
  { id: 59, name: 'Nilesh Aggarwal', university: 'Master of Applied Computer Science, Concordia University', year: '2019-20' },
  { id: 60, name: 'Shekhar Bhargava', university: 'MSC Engineering Management, UWE Bristol', year: '2019-20' },
  { id: 61, name: 'Samiksha Garg', university: 'M.Tech CSE, IIIT-D', year: '2019-20' },
  { id: 62, name: 'Jatin Gupta', university: 'International Institute of Information Technology, Bangalore', year: '2019-20' },
  { id: 63, name: 'Shreyansh Jain', university: 'Master of Business Finance, School of Commerce, XIM University', year: '2019-20' },
  { id: 64, name: 'Sashakta Singh', university: 'M.Tech CSE, USICT, GGSIPU', year: '2019-20' },
  { id: 65, name: 'SHREYAS', university: 'DTU DELHI', year: '2019-20' },
  { id: 66, name: 'SIDHARTH TALIA', university: 'IIT DELHI', year: '2019-20' },
  { id: 67, name: 'PURVAA SAXENA', university: 'NSUT', year: '2019-20' },
  { id: 68, name: 'KUSHANK SINGH', university: 'DTU DELHI', year: '2019-20' },
  { id: 69, name: 'KUNAL KADYAN', university: 'IMT GHAZIABAD', year: '2019-20' },
  { id: 70, name: 'Grusha Shahpuri', university: 'Ryerson University, Canada', year: '2018-19' },
  { id: 71, name: 'Akshita Namjoshi', university: 'Chapman University, California', year: '2018-19' },
  { id: 72, name: 'Vedika Tibrewal', university: 'MBA IIFT', year: '2018-19' },
  { id: 73, name: 'Rohit', university: 'MBA', year: '2018-19' },
  { id: 74, name: 'Karan Goyal', university: 'MS', year: '2018-19' },
  { id: 75, name: 'ISHITA SRIVASTAVA', university: 'IIFT, KOLKATA', year: '2018-19' },
  { id: 76, name: 'Prerna Arora', university: 'Delhi Institute of Advanced Studies', year: '2018-19' },
  { id: 77, name: 'MRIDUL GAUTAM', university: 'LBSIM, DELHI', year: '2018-19' },
  { id: 78, name: 'RAMIT MOHAN', university: 'IIM BIHAR', year: '2018-19' },
  { id: 79, name: 'MANSI MOHAPATRA', university: 'IGTUW, DELHI', year: '2018-19' },
  { id: 80, name: 'SARTHAK ARORA', university: 'DTU CAMPUS', year: '2018-19' },
  { id: 81, name: 'ISHITA SRIVASTAVA', university: 'IIFT, KOLKATA', year: '2018-19' },
  { id: 82, name: 'CHERAG KHATTER', university: 'IIM SIRMAUR', year: '2018-19' },
];


const AlumniCard = ({ alumni, index }: { alumni: typeof alumniData[0], index: number }) => {

  return (
    <div className="relative bg-white rounded-lg overflow-hidden flex shadow-sm transition-all duration-200 hover:shadow-md max-w-5xl mx-auto my-1.5 w-full min-h-[4.5rem] md:h-18">
      {/* Number Section - Orange */}
      <div className="flex items-center justify-center w-10 md:w-12 flex-shrink-0 bg-gradient-to-b from-[#F57D3B] to-[#FF9A5A]">
        <div className="text-base md:text-lg font-bold text-white">{index + 1}</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center px-3 py-2 min-w-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4 items-center">
          {/* Name - Full width on mobile, 5 columns on desktop */}
          <div className="col-span-1 md:col-span-5 pl-2 md:pl-6">
            <h3 className="text-sm md:text-[15px] font-medium text-gray-900 leading-tight">
              {alumni.name}
            </h3>
            {/* University - Show below name on mobile */}
            <p className="text-xs text-gray-600 md:hidden mt-0.5">
              {alumni.university}
            </p>
            {/* Year badge for mobile */}
            <div className="md:hidden mt-1">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-100 text-orange-800">
                {alumni.year}
              </span>
            </div>
          </div>
          
          {/* University - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block col-span-5 pl-8">
            <p className="text-sm text-gray-600 truncate">
              {alumni.university}
            </p>
          </div>
          
          {/* Year - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex col-span-2 justify-end">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 whitespace-nowrap">
              {alumni.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AlumniPage() {
  // Group alumni by year
  const alumniByYear = alumniData.reduce((acc, alumni) => {
    if (!acc[alumni.year]) {
      acc[alumni.year] = [];
    }
    acc[alumni.year].push(alumni);
    return acc;
  }, {} as Record<string, typeof alumniData>);

  const years = Object.keys(alumniByYear).sort((a, b) => b.localeCompare(a));
  const filteredYears = years;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5EFE7' }}>
      <Navbar />
      <main className="w-full pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              OUR DISTINGUISHED ALUMNI
            </h1>
            <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="space-y-8">
            {filteredYears.map((year) => (
              <div key={year} className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                  <span className="bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-base font-medium">
                    BATCH {year}
                  </span>
                </h2>
                <div className="space-y-3">
                  {alumniByYear[year].map((alumni, idx) => (
                    <AlumniCard 
                      key={alumni.id} 
                      alumni={alumni} 
                      index={idx} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
