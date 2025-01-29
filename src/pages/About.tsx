import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  const faqs = [
    {
      question: "What is the NCA Mentorship Program?",
      answer:
        "The NCA Mentorship Program is a cybersecurity training initiative that provides beginners with hands-on guidance to develop essential skills for a successful career.",
    },
    {
      question: "Who can apply for this program?",
      answer:
        "Anyone interested in cybersecurity can apply. We welcome beginners who are passionate about the field.",
    },
    {
      question: "How long does the program last?",
      answer:
        "The program typically runs for 4-6 months, depending on the batch and curriculum requirements.",
    },
    {
      question: "Is there any fee for the program?",
      answer:
        "No, the program is completely free. We believe in making quality education accessible to everyone.",
    },
    {
      question: "What is the selection process?",
      answer:
        "Candidates are selected based on their application responses, motivation, and commitment to learning.",
    },
    {
      question: "What will I learn in this program?",
      answer:
        "You'll explore key areas of cybersecurity, including network security, web security, and more. Visit our syllabus page for a detailed overview.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Basic computer knowledge is required, but no specific cybersecurity experience is necessary.",
    },
    {
      question: "How is the mentorship delivered?",
      answer:
        "Through a combination of online sessions, practical exercises, and one-on-one mentoring.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, upon successful completion of the program, you'll receive a digital certificate of completion.",
    },
    {
      question: "What are the program requirements?",
      answer:
        "Regular attendance, completion of assignments, and active participation in program activities.",
    },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="cyber-container">
        <h1 className="text-3xl font-bold text-gradient mb-4">
          About This Program
        </h1>
        <p className="text-cyber-text">
        The NCA Mentorship Program is a structured cybersecurity training initiative designed for beginners, offering personalized guidance and hands-on experience to help aspiring professionals build a strong foundation for a successful career in cybersecurity. Through this program, mentees receive mentorship from experienced professionals who provide direction on problem-solving, research methodologies, effective learning strategies, and maintaining motivation.

        As part of the program, a new team called "RudraSec" will be formed, following the tradition of the previous batch, "Kaal-Vairab." Mentees will undergo rigorous training, with a primary focus on penetration testing. While CTF competitions will be incorporated as a short weekly practice through the CTFTime platform, the main emphasis remains on pentesting based on the structured syllabus. Upon completing the curriculum, mentees will take part in a two-week capstone exam module, where they must compromise specially designed or randomly selected machines and produce an industry-standard penetration testing report. These machines will be carefully chosen to ensure that no public write-ups exist, providing mentees with a realistic and challenging assessment of their skills.
        </p>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-4">
          Application Status
        </h2>
        <p className="text-cyber-accent font-bold">
          We are currently accepting applications.
        </p>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-4">How to Apply?</h2>
        <p className="text-cyber-text mb-6">
          The application process is straightforward. Fill out our application
          form, and our team will review your submission. Selected candidates
          will be contacted for the next steps.
        </p>
        <div className="text-center">
          <a
            href="https://forms.gle/WotTGBE3ZgF37wL98"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button"
          >
            Apply Now
          </a>
        </div>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-cyber-text-bright">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-cyber-text">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default About;