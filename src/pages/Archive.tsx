import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Archive = () => {
  const [selectedBatch] = useState("kaal-vairab");

  const testimonials = [
    {
      username: "CyberNinja",
      text: "This program transformed my understanding of cybersecurity. The mentors were exceptional!",
    },
    {
      username: "SecureHacker",
      text: "The hands-on approach and real-world scenarios made learning both fun and effective.",
    },
    {
      username: "EthicalExplorer",
      text: "I gained practical skills that I now use daily in my cybersecurity career.",
    },
    {
      username: "CodeGuardian",
      text: "The mentorship program provided a perfect balance of theory and practice.",
    },
    {
      username: "SecuritySage",
      text: "The community support and networking opportunities were invaluable.",
    },
    {
      username: "ByteDefender",
      text: "This program gave me the confidence to pursue a career in cybersecurity.",
    },
    {
      username: "CipherMaster",
      text: "The curriculum was well-structured and the mentors were always supportive.",
    },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="cyber-container">
        <h1 className="text-3xl font-bold text-gradient mb-6">
          Program Archives
        </h1>
        <Select defaultValue={selectedBatch}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select batch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kaal-vairab">Kaal-Vairab</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-4">Batch Overview</h2>
        <p className="text-cyber-text">
          The Kaal-Vairab batch was our inaugural mentorship program, setting high
          standards for cybersecurity education and practical training. This
          cohort demonstrated exceptional dedication and achieved remarkable
          results.
        </p>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-6">Testimonials</h2>
        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <div className="cyber-container h-[200px] flex flex-col justify-center">
                    <h3 className="text-cyber-accent font-bold mb-4">
                      {testimonial.username}
                    </h3>
                    <p className="text-cyber-text">{testimonial.text}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-4">
          Start and End Date
        </h2>
        <p className="text-cyber-text">
          Duration: January 2024 - June 2024 (6 months)
        </p>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-4">
          Did It Meet NCA's Expectations?
        </h2>
        <p className="text-cyber-text">
          The Kaal-Vairab batch exceeded our expectations, with participants
          showing exceptional growth in their technical skills and professional
          development. The success of this batch has set a strong foundation for
          future programs.
        </p>
      </div>
    </div>
  );
};

export default Archive;