import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    title: "Module 1: Linux Basics",
    topics: [
      "Linux File System Structure",
      "User and Group Management",
      "Processes and System Monitoring",
      "Networking and Firewall Configuration",
      "Package Management"
    ],
    outcomes: "By the end of this module, students will have a foundational understanding of key Linux concepts, equipping them with the skills to navigate the file system, manage users, monitor processes, configure networking, and automate tasks for penetration testing.",
  },
  {
    title: "Module 2: Networking Basics",
    topics: [
      "OSI and TCP/IP models",
      "Common protocols HTTP, FTP, DNS, etc.)",
      "IP Addressing",
    ],
    outcomes: "By the end of this module, students will have a basic understanding of networking concepts, enabling them to effectively use networking tools and troubleshoot network-related issues in penetration testing scenarios.",
  },
  {
    title: "Module 3: Cryptography Basics",
    topics: [
      "Symmetric vs. asymmetric encryption",
      "Hashing algorithms",
      "Digital certificates",
    ],
    outcomes: "By the end of this module, students will have a foundational understanding of cryptography principles, enabling them to apply encryption, decryption, and hashing techniques in security assessments.",
  },
  {
    title: "Module 4: Python Basics",
    topics: [
      "Syntax and data types",
      "Writing basic scripts",
      "Automating simple tasks",
    ],
    outcomes: "By the end of this module, students will have a basic understanding of Python programming, enabling them to write simple scripts and solve problems efficiently.",
  },
  {
    title: "Module 5: Introduction to Information Security",
    topics: [
      "Overview of Information Security Domains",
      "Introduction to Penetration Testing",
      "Bug Bounty Programs: Overview and Scope",
      "Standards and Frameworks (ISO 27001, PCI DSS, HIPAA)",
      "Legal and Ethical Considerations",
      "Types of Penetration Tests"
    ],
    outcomes: "By the end of this module, students will have a foundational understanding of information security principles, including security domains, penetration testing, legal considerations, and relevant standards and frameworks.",
  },
  {
    title: "Module 6: Penetration Testing Process",
    topics: [
      "Pre-engagement Activitie",
      "Reconnaissance",
      "Vulnerability Assessment",
      "Exploitation",
      "Post-exploitation",
      "Reporting and Documentation",
      "Post-engagement Considerations",
    ],
    outcomes: "By the end of this module, students will have a clear understanding of the penetration testing process, including pre-engagement activities, reconnaissance, vulnerability assessment, exploitation, post-exploitation, and reporting.",
  },
  {
    title: "Module 7: Enumeration and Service Footprinting",
    topics: [
      "Using Nmap for Enumeration",
      "Service Enumeration & Exploitation (SMB, FTP, NFS, SMNP, SMTP, RDP, etc.)",
    ],
    outcomes: "By the end of this module, students will be able to use tools like Nmap for service enumeration and exploit vulnerabilities in services such as SMB, FTP, NFS, SNMP, and RDP.",
  },
  {
    title: "Module 8: Web Enumeration",
    topics: [
      "OSINT and Google Dorking",
      "Web Fuzzing Tools",
      "Banner Grabbing",
      "Whois and Dig Commands",
      "Zone Transfer Attacks",
      "Subdomain and Vhost Enumeration",
      "External Web Reconnaissance",
      "CMS Default Credentials",
    ],
    outcomes: "By the end of this module, students will be able to effectively perform web enumeration using OSINT, web fuzzing tools, banner grabbing, and passive scanning techniques to identify subdomains, vulnerabilities, and misconfigurations.",
  },
  {
    title: "Module 9: Web Hacking",
    topics: [
      "Overview of Burpsuite and Caido",
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "Server-Side Request Forgery (SSRF)",
      "Cross-Site Request Forgery (CSRF)",
      "XML External Entity (XXE) Attacks",
      "File Inclusion Vulnerabilities",
      "File Upload Vulnerabilities",
      "Command Injection",
      "Access Control Weaknesses",
      "Logic Vulnerabilities",
      "JWT Attacks",
      "Basic API Testing (REST, SOAP, GraphQL)",
    ],
    outcomes: "By the end of this module, students will have a solid understanding of web exploitation techniques, including the use of Burp Suite and Caido, and will be able to identify and exploit common web vulnerabilities such as SQLi, XSS, SSRF, CSRF, and API-related attacks.",
  },
  {
    title: "Module 10: Vulnerability Research",
    topics: [
      "Researching Potential Vulnerabilities",
      "Finding Relevant CVEs for Real-world Scenarios",
    ],
    outcomes: "By the end of this module, students will be able to effectively research potential vulnerabilities and identify relevant CVEs for real-world scenarios to assess security risks.",
  },
  {
    title: "Module 11: Vulnerability Assessment Tools",
    topics: [
      "Nessus Overview",
      "OpenVAS Overview",
    ],
    outcomes: "By the end of this module, students will have a foundational understanding of vulnerability assessment tools such as Nessus and OpenVAS, enabling them to perform automated vulnerability scans and identify security weaknesses.",
  },
  {
    title: "Module 12: Exploitation & Lateral Movement Techniques",
    topics: [
      "Shell Types (Shell Types (Reverse Shells)",
      "Metasploit Framework",
      "Port Forwarding Techniques (SSH, Chisel, etc...)",
      "File Transfer Methods",
      "Credentials Harvesting in Windows/Linux"
    ],
    outcomes: "By the end of this module, students will be able to understand and apply exploitation and lateral movement techniques, including using reverse and bind shells, Metasploit, port forwarding, file transfers, and credential harvesting in both Windows and Linux environments.",
  },
  {
    title: "Module 13: Privilege Escalation",
    topics: [
      "Windows Privilege Escalation",
      "Linux Privilege Escalation",
    ],
    outcomes: "By the end of this module, students will have a solid understanding of privilege escalation techniques, enabling them to escalate privileges in both Windows and Linux environments.",
  },
  {
    title: "Module 14: Reporting and Documentation",
    topics: [
      "Penetration Testing Reports",
      "Bug Bounty Reports",
      "Tools for Reporting",
    ],
    outcomes: "By the end of this module, students will be able to create clear and structured penetration testing and bug bounty reports, utilizing best practices, case studies, and tools like Sysreptor and LLMs for efficient report writing.",
  },
  {
    title: "Module 15: Capstone Exam",
    topics: [
      "2 Windows Vulnerable Machine",
      "2 Linux Vulnerable Machine",
      "2 Web Challanges with Multiple Vulnerabilities in place",
    ],
    outcomes: "By the end of this module, students will have demonstrated their ability to exploit vulnerabilities in multiple Windows, Linux, and web challenges, and submit a professional pentest report. Upon successful completion, they will participate in a final discussion to explore further learning paths in red teaming or bug bounty, concluding the mentorship program with enhanced skills and opportunities.",
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
