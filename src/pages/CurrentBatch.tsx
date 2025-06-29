import { Trophy, Calendar, Users, UserX, ChevronDown, ChevronRight, CalendarClock, HelpCircle } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const CurrentBatch = () => {
  const [openDropouts, setOpenDropouts] = useState<string[]>([]);

  const toggleDropout = (id: string) => {
    setOpenDropouts(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const students = [
    "Rajiv Khanal",
    "Aarman Rai",
    "Swosteek Poudel/Paras",
    "Sujan Dhakal",
    "Sadikshya Budhathoki",
    "Sarul Duwal",
    "Dinesh Joshi",
    "Ajay Tamang",
    "Suwan Dhital",
    "Manalika Shrestha",
    "Aatif Maharjan"
  ];

  const dropouts = [
    {
      id: "sanju-rimal",
      name: "Sanju Rimal",
      date: "March 8, 2025",
      duration: "before the program started",
      reason: "She had a medical emergency and could not join any of our sessions. As she required time to rest and recover, she was unable to commit to the program, which resulted in her dropout."
    },
    {
      id: "aaska-prajapati",
      name: "Aaska Prajapati",
      date: "April 7, 2025",
      duration: "stayed 29 days only",
      reason: "Despite receiving the course materials and several modules, she struggled to keep up with the Linux content. The time commitment stated in the MoU was not fulfilled, and we had to proceed with the batch. Thus, she was dropped from the program."
    },
    {
      id: "siddhartha-shah",
      name: "Siddhartha Shah",
      date: "April 7, 2025",
      duration: "stayed 29 days only",
      reason: "Despite receiving the course materials and several modules, he struggled to keep up with the Linux content. The time commitment stated in the MoU was not fulfilled, and we had to proceed with the batch. Thus, he was dropped from the program."
    },
    {
      id: "samip-poudel",
      name: "Samip Poudel",
      date: "April 14, 2025",
      duration: "stayed 35 days only",
      reason: "He did not dedicate sufficient time, failed to submit assignments, and did not improve even after being warned. Eventually, he chose to leave the mentorship program of his own accord."
    },
    {
      id: "manav-khatiwada",
      name: "Manav Khatiwada",
      date: "May 15, 2025",
      duration: "stayed 68 days only",
      reason: "He was a decent mentee who regularly completed tasks and actively participated in the mentorship program. However, due to personal reasons, he decided to leave the program to focus on a new position at a networking company. Our handbook's networking content proved helpful for his job interview."
    },
    {
      id: "naresh-bc",
      name: "Naresh BC",
      date: "May 18, 2025",
      duration: "stayed 71 days only",
      reason: "He demonstrated good performance initially but gradually became irregular in attending classes. Eventually, he left the mentorship program without prior notice, leading us to terminate the MoU and move him to the dropout list."
    },
    {
      id: "nirajan-subedi",
      name: "Nirajan Subedi",
      date: "May 5, 2025",
      duration: "stayed 59 days only",
      reason: "Due to irregular attendance and consistently poor performance, he fell behind and could not keep up with the syllabus. As a result, we made the decision to discontinue his participation in the program."
    },
    {
      id: "kabina-thapa",
      name: "Kabina Thapa",
      date: "April 26, 2025",
      duration: "stayed 50 days only",
      reason: "She demonstrated very poor performance and did not submit assignments on time, although she eventually completed them. Later, due to medical reasons, she was unable to continue with our mentorship program."
    },
    {
      id: "sakriya-lama",
      name: "Sakriya Lama",
      date: "May 5, 2025",
      duration: "stayed 59 days only",
      reason: "Her performance was below expectations, and assignments were not submitted on time—although eventually completed. She was also irregular in class, attending only about two days per week whereas other mentees dedicated 5–7 hours per day. Thus, we decided to discontinue her from the program."
    },
    {
      id: "swastika-timalasena",
      name: "Swastika Timalasena",
      date: "May 31, 2025",
      duration: "stayed 85 days only",
      reason: "Despite her efforts, Swastika was unable to keep pace with the syllabus due to time management challenges. Although encouraged to dedicate more time, she was unable to do so and ultimately decided to leave the mentorship program herself."
    },
    {
      id: "gaurav-paudel",
      name: "Gaurav Paudel",
      date: "June 21, 2025",
      duration: "stayed 105 days only",
      reason: "He was an exceptional and hardworking mentee who developed a strong mindset for solving CTF challenges from easy to medium difficulty and demonstrated rapid learning abilities. However, due to consistent punctuality issues and in accordance with the terms of our signed MoU, we had to discontinue his participation in the program."
    }
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
            <div className="grid grid-cols-1 gap-4">
              {dropouts.length > 0 ? (
                dropouts.map((dropout, index) => (
                  <Collapsible 
                    key={dropout.id}
                    open={openDropouts.includes(dropout.id)}
                    onOpenChange={() => toggleDropout(dropout.id)}
                    className="border border-cyber-accent/30 bg-cyber-background-lighter rounded-md hover:border-cyber-accent transition-colors"
                  >
                    <CollapsibleTrigger className="w-full p-3 flex items-center justify-between cursor-pointer">
                      <span className="text-cyber-text font-medium flex items-center gap-2">
                        <span className="text-cyber-accent font-bold">{index + 1}.</span>
                        {dropout.name} <span className="text-cyber-text/60 text-sm italic ml-2">({dropout.duration})</span>
                      </span>
                      {openDropouts.includes(dropout.id) ? 
                        <ChevronDown className="text-cyber-accent" size={18} /> : 
                        <ChevronRight className="text-cyber-accent" size={18} />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-3 pt-0 border-t border-cyber-accent/30 bg-cyber-background/50">
                      <div className="space-y-2 mt-2">
                        <div className="flex items-start gap-2">
                          <CalendarClock className="text-cyber-accent mt-1 shrink-0" size={16} />
                          <div>
                            <span className="text-cyber-accent font-semibold">Dropout Date:</span> 
                            <span className="text-cyber-text ml-2">{dropout.date}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <HelpCircle className="text-cyber-accent mt-1 shrink-0" size={16} />
                          <div>
                            <span className="text-cyber-accent font-semibold">Dropout Reason:</span> 
                            <p className="text-cyber-text mt-1">{dropout.reason}</p>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))
              ) : (
                <div className="p-4 border border-cyber-accent/30 bg-cyber-background-lighter rounded-md col-span-full">
                  <p className="text-cyber-text text-center italic">None for now</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CurrentBatch;
