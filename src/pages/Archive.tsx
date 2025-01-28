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
      username: "K21",
      text: "In just 9 months, my team and I have gone from beginners to tackling CTF challenges, excelling on TryHackMe, and diving into penetration testing. Excited to keep growing!",
    },
    {
      username: "Psyduck",
      text: "I joined the NCA@Nepal Mentorship Program halfway through and it exceeded my expectations. In a short time, I gained practical skills, connected with caring mentors, and found the supportive community I’d been seeking. Grateful for the opportunity and how it’s shaped my journey!",
    },
    {
      username: "cybercena",
      text: "I found NCA@Nepal while searching for cybersecurity mentors, and it transformed my learning. With practical teaching, supportive mentors, and real-world focus, I stayed on track and grew in ways I couldn’t have imagined. This program is more valuable than any paid course!",
    },
    {
      username: "Starman",
      text: "I found NCA through a Facebook post in the Pentester Nepal group while seeking cybersecurity guidance. Staying active and joining the team helped me improve in many ways—time well spent with great teammates!",
    },
    {
      username: "$Sudo",
      text: "I found NCA@Nepal late one night when I heard ZeroAir dissecting a Minecraft-themed Hack The Box challenge. As a Minecraft nerd, I was hooked! I thought CTFs were just about exploiting broken systems, but the team showed me they’re about spotting real-world flaws.",
    },
    {
      username: "XExhausted",
      text: "I found NCA@Nepal through my friend (sudo), and in 6-7 months, I went from a beginner to solving problems. Thanks to my team and NCA@Nepal for their support—I couldn’t have done it alone. Excited to keep growing together!",
    },
    {
      username: "Nirmit",
      text: "NCA has been a transformative learning platform for me, where my cybersecurity journey truly advanced. Beyond gaining knowledge in cybersecurity, I also developed the skills to solve CTFs and tackle various cybersecurity challenges, significantly enhancing my expertise and confidence in the field.",
    },
    {
      username: "kaloobaagh",
      text: "I've been an active member of the NCA Nepal server for 5 months, learning penetration testing, Docker, and CTF skills, and appreciating the growth that comes from teamwork.",
    },
    {
      username: "Felix",
      text: "From the first steps with 'ls' and 'cd' to unraveling CTFs, my journey with NCA@Nepal has been a symphony of growth. From finding mentors to joining a driven team, NCA has offered more than I could imagine, and standing among such ambition is truly inspiring.",
    },
    {
      username: "Skde",
      text: "I found NCA@Nepal through an infosec Facebook group, and joining the mentorship program has been transformative. With minimal knowledge, I gained skills through mentors and a supportive community. We’ve grown through hands-on learning, and I’m excited to keep contributing and growing.",
    },
    {
      username: "P3gaXu5",
      text: "I found this channel through Pentester Nepal, starting with basic Linux knowledge. It gave me a structured learning path and the right mindset. The community’s guidance has been crucial to my growth in cybersecurity.",
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
        The Kaal-Vairab batch was the core group of NCA, with most of the mentees now becoming part of the NCA family. This inaugural mentorship cohort demonstrated exceptional dedication in their respective fields. Over the 6-month period, we learned and grew together, setting high standards for cybersecurity education and practical training, while achieving remarkable results.
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
          Duration: August 13, 2024 - January 1, 2025 (4.7 months or 141 days)
        </p>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-4">
          Did It Meet NCA's Expectations?
        </h2>
        <p className="text-cyber-text">
        The Kaal-Vairab batch exceeded all expectations, demonstrating remarkable growth in both technical skills and professional development. Since becoming part of NCA, they’ve actively participated in CTF challenges on CTFtime, continually improving with each competition. Their teamwork and consistent progress are clear proof of their learning. We are incredibly proud of their achievements and thrilled to have them as part of the NCA family!
        </p>
      </div>
    </div>
  );
};

export default Archive;