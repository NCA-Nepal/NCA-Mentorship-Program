
import { Trophy, Calendar, Users, UserX } from "lucide-react";

const CurrentBatch = () => {
  const students = [
    "Rajiv Khanal",
    "Samip Poudel",
    "Aarman Rai",
    "Manav Khatiwada",
    "Swosteek Poudel/Paras",
    "Sujan Dhakal",
    "Sadikshya Budhathoki",
    "Sarul Duwal",
    "Dinesh Joshi",
    "Ajay Tamang",
    "Suwan Dhital",
    "Nirajan Subedi",
    "Sakriya Lama",
    "Aatif Maharjan",
    "Swastika Timalasena",
    "Kabina Thapa",
    "Aaska Prajapati",
    "Naresh BC",
    "Siddhartha Shah",
    "Manalika Shrestha",
    "Sanju Rimal",
    "Gaurav Paudel"
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="cyber-container">
        <h1 className="text-3xl font-bold text-gradient mb-4 flex items-center gap-2">
          <Trophy className="text-cyber-accent" size={28} />
          Current Batch: RudraSec
        </h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-cyber-accent mb-3">Batch Overview</h2>
            <p className="text-cyber-text">
              RudraSec is current live batch we are running. This will be for 6 months and we tend to teach pentesting and 
              mainly appsec at its core.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-cyber-accent mb-3">Timeline</h2>
            <div className="flex items-center gap-2 text-cyber-text">
              <Calendar className="text-cyber-accent" size={18} />
              <span>March 8, 2025 - present</span>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-cyber-accent mb-3 flex items-center gap-2">
              <Users className="text-cyber-accent" size={22} />
              Current Mentees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {students.map((student, index) => (
                <div 
                  key={index} 
                  className="p-3 border border-cyber-accent/30 bg-cyber-background-lighter rounded-md hover:border-cyber-accent transition-colors"
                >
                  <span className="text-cyber-text font-medium flex items-center gap-2">
                    <span className="text-cyber-accent font-bold">{index + 1}.</span>
                    {student}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-accent mb-3 flex items-center gap-2">
              <UserX className="text-cyber-accent" size={22} />
              Dropout Mentees
            </h2>
            <div className="p-4 border border-cyber-accent/30 bg-cyber-background-lighter rounded-md">
              <p className="text-cyber-text text-center italic">None for now</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CurrentBatch;
