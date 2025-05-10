
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
    "Manav Khatiwada",
    "Swosteek Poudel/Paras",
    "Sujan Dhakal",
    "Sadikshya Budhathoki",
    "Sarul Duwal",
    "Dinesh Joshi",
    "Ajay Tamang",
    "Suwan Dhital",
    "Naresh BC",
    "Manalika Shrestha",
    "Gaurav Paudel"
  ];

  const dropouts = [
    {
      id: "sanju-rimal",
      name: "Sanju Rimal",
      date: "March 8, 2025",
      duration: "before the program started",
      reason: "She had a medical emergency, so she couldn't join any of our sessions. As she needs time to rest and recover, she couldn't commit enough time to the program. Therefore, we had to drop her from it."
    },
    {
      id: "aaska-prajapati",
      name: "Aaska Prajapati",
      date: "April 7, 2025",
      duration: "stayed 29 days only",
      reason: "We provided the content along with a few modules, but they were still behind on Linux. We had to proceed with the content regardless. Additionally, the time commitment agreed upon in the MoU was not fulfilled."
    },
    {
      id: "siddhartha-shah",
      name: "Siddhartha Shah",
      date: "April 7, 2025",
      duration: "stayed 29 days only",
      reason: "We provided the content along with a few modules, but they were still behind on Linux. We had to proceed with the content regardless. Additionally, the time commitment agreed upon in the MoU was not fulfilled."
    },
    {
      id: "samip-poudel",
      name: "Samip Poudel",
      date: "April 14, 2025",
      duration: "stayed 35 days only",
      reason: "He did not commit enough time, failed to submit assignments, and was given a warning. Despite that, he didn't correct his mistakes. Eventually, he chose to leave the mentorship program on his own."
    },
    {
      id: "nirajan-subedi",
      name: "Nirajan Subedi",
      date: "April 20, 2025",
      duration: "stayed XX days only",
      reason: "Updating soon"
    },
    {
      id: "aatif-maharjan",
      name: "Aatif Maharjan",
      date: "April 22, 2025",
      duration: "stayed XX days only",
      reason: "Updating soon"
    },
    {
      id: "kabina-thapa",
      name: "Kabina Thapa",
      date: "April 25, 2025",
      duration: "stayed XX days only",
      reason: "Updating soon"
    },
    {
      id: "sakriya-lama",
      name: "Sakriya Lama",
      date: "April 27, 2025",
      duration: "stayed XX days only",
      reason: "Updating soon"
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
