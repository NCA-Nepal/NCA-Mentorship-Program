import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    title: "Introduction to Cybersecurity",
    topics: [
      "Overview of Cybersecurity",
      "Importance of Cybersecurity",
      "Cybersecurity Terminology",
    ],
    outcomes: "Understand the basics of cybersecurity and its significance.",
  },
  {
    title: "Network Security",
    topics: [
      "Network Protocols",
      "Firewalls and Intrusion Detection Systems",
      "VPNs and Secure Communication",
    ],
    outcomes: "Learn how to secure networks and protect data in transit.",
  },
  {
    title: "Web Security",
    topics: [
      "Common Web Vulnerabilities",
      "Secure Coding Practices",
      "Web Application Firewalls",
    ],
    outcomes: "Gain knowledge on securing web applications against attacks.",
  },
  {
    title: "Ethical Hacking",
    topics: [
      "Penetration Testing Methodologies",
      "Tools for Ethical Hacking",
      "Legal and Ethical Considerations",
    ],
    outcomes: "Understand the principles of ethical hacking and its applications.",
  },
  {
    title: "Incident Response",
    topics: [
      "Incident Response Planning",
      "Handling Security Breaches",
      "Post-Incident Analysis",
    ],
    outcomes: "Learn how to effectively respond to and manage security incidents.",
  },
];

const Syllabus = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="cyber-container">
        <h1 className="text-3xl font-bold text-gradient mb-2">
          Program Syllabus
        </h1>
        <p className="text-cyber-text mb-6">
          This is following modules we plan to complete throughout the batch.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {modules.map((module, index) => (
            <AccordionItem key={index} value={`module-${index}`}>
              <AccordionTrigger className="text-cyber-text-bright">
                {module.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-cyber-accent mb-2">Topics Covered:</h3>
                    <ul className="list-disc list-inside text-cyber-text">
                      {module.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyber-accent mb-2">Learning Outcomes:</h3>
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
