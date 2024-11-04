export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Approach", link: "#approach" },
  { name: "My Blogs", link: "#blogs" },
  { name: "Contact", link: "#contact" },

];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-60",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 flex flex-col justify-center",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A Tech savvy enthusiast, with a passion for development and design.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning Golang for backend development",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ask A Site !",
    des: "A website that allows you to directly chat with the webiste itself using rag model",
    img: "/ask-a-site.png",
    iconLists: ["/upstash.png", "/tail.svg", "/next.svg", "/ts.svg"],
    link: "https://chat-a-site.vercel.app/",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/yoom.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://video-conferencing-yoom.vercel.app/",
  },
  {
    id: 3,
    title: "Medium but Better",
    des: "A blogging website with a Serverless backend utiizing Hono and Cloudflare workers along with connection pooling using Prisma",
    img: "/medium.png",
    iconLists: ["/prisma.svg", "/npm.svg", "/tail.svg", "/ts.svg", "/cloudflare.svg", "/postgres.svg"],
    link: "https://medium-but-better.vercel.app/",
  },
  {
    id: 4,
    title: "Zed for Windows (Unofficial)",
    des: "Build the Zed Code Editor based on Rust from Source for Windows which isn't available officially yet.",
    img: "/zed.png",
    iconLists: ["/rust.png", "/crate.png", "/window.svg", "/github.png", "/markdown.png"],
    link: "https://github.com/Atharva-3000/zed-windows-unofficial-release",
  },
]

export const achievements = [
  {
    id: 1,
    quote:
      "Lead the team which won Aadhaar Anon Track Price during the hackathon called as Hacker House Goa",
    img: "hhgoa.jpg",
    title: "Anon Aadhaar Track Price, HH Goa",
  },
  {
    id: 2,
    quote:
      "I was appointed as the designer of the team, we made a one click solution to backup your Amazon buckets to Arweave via a pipeline.",
    img: "arweave.jpg",
    title: "1st Runner Up, Arweave Hacker House Cohort #1",
  },
  {
    id: 3,
    quote:
      "Came second in this National level 72 hour hackathon. We developed a suite to allow specially abled people to use a computer with less effort.",
    img: "hackvengers.png",
    title: "2nd Runner-Ups Hackvengers.",
  },
  {
    id: 4,
    quote:
      "I was appointed as the Web Development Lead for Google Developer Student Club - Parul University for the year 2023-2024.",
    img: "gdsc.png",
    title: "GDSC Web Development Lead",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Open Source Contributor",
    desc: "Contributed to more than 7 repositories by successfully making 10 Pull Requests over the span of a week involving technologies like Javascript, React and Markdowns.",
    className: "md:col-span-2",
    thumbnail: "/gssoc.png",
  },
  {
    id: 2,
    title: "OSS.GG Contributor",
    desc: "Ranked #11 out of 4000+ in the open-source month long hackathon by OSS.GG",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/oss.png",
  },
  {
    id: 3,
    title: "Web Dev Lead",
    desc: "Led the Web track for GDSC PU, conducted cohort and taught over 150 students with Practical Hands-On and projects.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/gdsc.png",
  },
  {
    id: 4,
    title: "Backend Engineer at OnwE",
    desc: "Responsible for making admin routes as well as authentication middleware for the website for handling a user base of >1000 users.",
    className: "md:col-span-2",
    thumbnail: "/onwe.jpg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/Atharva-3000",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://twitter.com/0x_atharva",
    img: "/twit.svg",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/atharvadeshmukh3000/",
    img: "/link.svg",
  },
];