export type Testimonial = {
  username: string;
  text: string;
};

export type BatchData = {
  id: string;
  name: string;
  overview: string;
  startDate: string;
  endDate: string;
  expectations: string;
  testimonials: Testimonial[];
};

export const batches: Record<string, BatchData> = {
  "kaal-vairab": {
    id: "kaal-vairab",
    name: "Kaal-Vairab",
    overview: "The Kaal-Vairab batch was the core group of NCA, with most of the mentees now becoming part of the NCA family. This inaugural mentorship cohort demonstrated exceptional dedication in their respective fields. Over the 6-month period, we learned and grew together, setting high standards for cybersecurity education and practical training, while achieving remarkable results.",
    startDate: "August 13, 2024",
    endDate: "January 1, 2025",
    expectations: "The Kaal-Vairab batch exceeded all expectations, demonstrating remarkable growth in both technical skills and professional development. Since becoming part of NCA, they've actively participated in CTF challenges on CTFtime, continually improving with each competition. Their teamwork and consistent progress are clear proof of their learning. We are incredibly proud of their achievements and thrilled to have them as part of the NCA family!",
    testimonials: [
      {
        username: "K21",
        text: "In just 9 months, my team and I have gone from beginners to tackling CTF challenges, excelling on TryHackMe, and diving into penetration testing. Excited to keep growing!",
      },
      {
        username: "Psyduck",
        text: "I joined the NCA@Nepal Mentorship Program halfway through and it exceeded my expectations. In a short time, I gained practical skills, connected with caring mentors, and found the supportive community I'd been seeking. Grateful for the opportunity and how it's shaped my journey!",
      },
      {
        username: "cybercena",
        text: "I was in search of good mentors who could guide me to achieve my goals in the field of cybersecurity. I was distracted and wandered into different fields. One day, while scrolling through Facebook, I saw a post about free classes by NCA@Nepal. I filled out the form and joined the Discord server. After joining NCA@Nepal, I developed my skills and used my time in the best possible way. The friendly behavior of the mentors and the vision of NCA@Nepal inspired me to contribute to the cybersecurity community. The mentors are highly skilled and experienced, teaching in a way that feels like you're learning from friends. Since joining NCA@Nepal, I've been able to avoid distractions and procrastination, maintain consistency in learning new things every day, and strive to be a better version of myself than yesterday. I was impressed with the mentors' friendly behavior and their teaching techniques, which focus on real-life examples and practical learning rather than just theory. They also guide you in playing CTFs if you're interested. I can confidently say that the syllabus is far better than the programs offered by institutions that charge over 25k for just a two-month course. The only things you need to join NCA@Nepal mentorship program are passion, enthusiasm to learn, and your valuable time.",
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
    ],
  },
};
