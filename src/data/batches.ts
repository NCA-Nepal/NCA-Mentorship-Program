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
        text: "In just 9 months, my journey into the world of cybersecurity challenges has been nothing short of transformative. Together with my team, I’ve evolved from a complete beginner to confidently tackling CTF challenges, excelling on platforms like TryHackMe, and exploring various aspects of penetration testing. We've gained hands-on technical skills and developed a problem-solving mindset that’s crucial in this field. Every challenge has been an opportunity for growth, and I’m proud of the progress we’ve made. The journey is far from over, and I’m excited to continue pushing the boundaries of what we can achieve together!",
      },
      {
        username: "Psyduck",
        text: "I discovered the NCA@Nepal Mentorship Program halfway through its cycle and immediately signed up—a decision I’ll always be grateful for. Even in that condensed timeframe, the program exceeded my expectations: I gained practical skills, connected with mentors who genuinely cared, and finally found the supportive community I’d been looking for. Thank you, NCA@Nepal, for welcoming me so warmly and creating a space where growth and collaboration thrive. This experience has already shaped my journey in ways I couldn’t have imagined!",
      },
      {
        username: "cybercena",
        text: "I was in search of good mentors who could guide me to achieve my goals in the field of cybersecurity. I was distracted and wandered into different fields. One day, while scrolling through Facebook, I saw a post about free classes by NCA@Nepal. I filled out the form and joined the Discord server. After joining NCA@Nepal, I developed my skills and used my time in the best possible way. The friendly behavior of the mentors and the vision of NCA@Nepal inspired me to contribute to the cybersecurity community. The mentors are highly skilled and experienced, teaching in a way that feels like you're learning from friends. Since joining NCA@Nepal, I've been able to avoid distractions and procrastination, maintain consistency in learning new things every day, and strive to be a better version of myself than yesterday. I was impressed with the mentors' friendly behavior and their teaching techniques, which focus on real-life examples and practical learning rather than just theory. They also guide you in playing CTFs if you're interested. I can confidently say that the syllabus is far better than the programs offered by institutions that charge over 25k for just a two-month course. The only things you need to join NCA@Nepal mentorship program are passion, enthusiasm to learn, and your valuable time.",
      },
      {
        username: "Starman",
        text: "I found NCA from Facebook, in the Pentester Nepal's group. I was in search of some guidance in cybersec, and this post came to me as a shining light. Joining the group, and forcing myself to stay active and learn something everyday was very fruitful. After that I joined the team too, and I feel I have improved myself in quite a few aspects. Guidance was all I wanted, I got guidance along with some team mates. Time well spent 😀",
      },
      {
        username: "$Sudo",
        text: "I found NCA@Nepal one late night while lurking in a voice call where ZeroAir (NCA@Nepal founder) was dissecting a Minecraft themed Hack The Box challenge (Log4J attacks—yes, the same ones that could’ve blown up my old Minecraft server!). As a Minecraft nerd, I was hooked. Back then, I thought CTFs were just “exploiting systems that are already broken? Why bother?” But the team showed me the magic: CTFs aren’t about “winning” fake hacks—they’re blueprints for spotting real-world flaws.They gave me a roadmap, explained categories like rev/pwn (my favorite—I love breaking systems!), and introduced me to mentors who answered my endless “Wait, how?!” questions. Now, I’m learning to smash buffers and chain exploits, surrounded by friends who cheer when I finally get it. Thanks to them, I’m not just a noob with a keyboard—I’m part of a crew that turns chaos into skills 😉.",
      },
      {
        username: "XExhausted",
        text: "I found NCA@Nepal through my friend (sudo). In around 6–7 months, I have gone from knowing nothing about cybersecurity to being able to research and solve problems. I’m so grateful to my team, NCA@Nepal, for their support and guidance throughout this journey. I could not have learned this quickly on my own. I want to thank all my teammates for guiding and supporting me. I hope we will continue to learn and grow together in the future.",
      },
      {
        username: "Nirmit",
        text: "NCA has been a transformative learning platform for me, where my cybersecurity journey truly advanced. Beyond gaining knowledge in cybersecurity, I also developed the skills to solve CTFs and tackle various cybersecurity challenges, significantly enhancing my expertise and confidence in the field.",
      },
      {
        username: "kaloobaagh",
        text: "Hello, I am a member of NCA Nepal. I joined this NCA Discord server about 5 months ago. Currently, I participate in the server as an NCA member and occasionally play CTF games. Additionally, I discuss various topics with my NCA team and learn from them. It has been 5 months since I joined this server, and I am still regularly active. The reason for my regular activity is that this server and its members have taught me many things. Even though I am just a BA student, I am grateful for the opportunity to be a member of the NCA server and to be included as a member of a CTF team. Before joining this server, I didn’t even know how to install Kali Linux. However, I can now play CTF games on Kali Linux and have learned the basics of penetration testing. I didn’t know much about Docker before, but I have now learned how to run Docker and use it effectively. One thing I’ve realized after joining the NCA team server is that working as a team provides many opportunities to learn and grow together. Thank you.",
      },
      {
        username: "Felix",
        text: "From the first steps with 'ls' and 'cd' to unraveling the mysteries of CTFs, the journey with NCA@Nepal has been a symphony of growth and discovery.From finding mentors to having a like minded community to getting to be a part of a brilliant and driven team, NCA has offered way more than I could even begin to imagine. To stand among a team so brilliant and driven is to witness ambition take flight.",
      },
      {
        username: "Skde",
        text: "I came across NCA@Nepal through an infosec Facebook group, and joining the mentorship program has been a game-changer. With minimal knowledge of cybersecurity, I quickly gained valuable skills thanks to the guidance of skilled mentors and a supportive community. Together with my team, we’ve grown our skills through hands-on learning, tackling challenges, and collaborating on CTFs. NCA@Nepal has helped me stay focused, motivated, and constantly improve. I’m grateful for the opportunity to be part of this journey and excited to continue growing—not just for myself, but to contribute to the future of our team as well.",
      },
      {
        username: "P3gaXu5",
        text: "I discovered this channel through Pentester Nepal when I was new to cybersecurity, armed only with basic Linux knowledge. Here, I not only found a structured learning path but also developed the correct mindset to approach cybersecurity studies effectively. The community introduced me to skilled, passionate individuals who generously offered guidance whenever I faced challenges. Their support has been pivotal in my growth, and I’m thankful for the time invested in learning and evolving alongside such inspiring peers.",
      },
    ],
  },
};
