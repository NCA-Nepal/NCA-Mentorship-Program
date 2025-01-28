import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Syllabus = () => {
  const modules = [
    {
      title: "Introduction to Cybersecurity",
      topics: [
        "Cybersecurity fundamentals",
        "Threat landscape",
        "Security principles",
      ],
      outcomes: "Understanding of basic cybersecurity concepts and terminology.",
    },
    {
      title: "Network Security Basics",
      topics: ["TCP/IP", "Network protocols", "Firewalls"],
      outcomes: "Ability to understand and analyze network security.",
    },
    {
      title: "Web Application Security",
      topics: ["OWASP Top 10", "Web vulnerabilities", "Secure coding"],
      outcomes: "Skills to identify and prevent web application vulnerabilities.",
    },
    {
      title: "System Security",
      topics: ["OS security", "Access control", "Hardening"],
      outcomes: "Knowledge of securing operating systems and applications.",
    },
    {
      title: "Cryptography",
      topics: ["Encryption", "Hashing", "Digital signatures"],
      outcomes: "Understanding of cryptographic principles and applications.",
    },
    {
      title: "Ethical Hacking",
      topics: ["Penetration testing", "Tools", "Methodologies"],
      outcomes: "Practical skills in ethical hacking and security testing.",
    },
    {
      title: "Incident Response",
      topics: ["IR planning", "Forensics", "Recovery"],
      outcomes: "Ability to handle security incidents effectively.",
    },
    {
      title: "Cloud Security",
      topics: ["Cloud platforms", "Security controls", "Best practices"],
      outcomes: "Understanding of cloud security principles and implementation.",
    },
    {
      title: "Mobile Security",
      topics: ["Mobile threats", "App security", "BYOD"],
      outcomes: "Knowledge of mobile security challenges and solutions.",
    },
    {
      title: "Security Management",
      topics: ["Policies", "Risk management", "Compliance"],
      outcomes: "Understanding of security governance and management.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="cyber-container">
        <h1 className="text-3xl font-bold text-gradient mb-6">
          Program Syllabus
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {modules.map((module, index) => (
            <AccordionItem key={index} value={`module-${index}`}>
              <AccordionTrigger className="text-cyber-text-bright">
                {module.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-cyber-accent font-bold mb-2">Topics:</h3>
                    <ul className="list-disc list-inside text-cyber-text">
                      {module.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-cyber-accent font-bold mb-2">
                      Learning Outcomes:
                    </h3>
                    <p className="text-cyber-text">{module.outcomes}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Syllabus;