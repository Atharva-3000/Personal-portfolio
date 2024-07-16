export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Approach", link: "#approach" },
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
    title: "Currently building a Resume to Portfolio Generator.",
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
    title: "Magma Clone",
    des: "A 3D scrollable clone of Magma, made entirely in javascript using locomotive for smooth scroll along with GSAP.",
    img: "/magma.png",
    iconLists: ["/html.svg", "/css.svg", "/loco.png", "/javascript.png", "/gsap.svg"],
    link: "https://magma-clone-et.netlify.app/",
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
      "I was appointed as the designer of the team, we made a one click solution to backup your Amazon buckets to Arweave via a pipeline.",
    img: "arweave.jpg",
    title: "1st Runner Up, Arweave Hacker House Cohort #1",
  },
  {
    id: 2,
    quote:
      "Came second in this National level 72 hour hackathon. We developed a suite to allow specially abled people to use a computer with less effort.",
    img: "hackvengers.png",
    title: "2nd Runner-Ups Hackvengers.",
  },
  {
    id: 3,
    quote:
      "I was appointed as the Web Development Lead for Google Developer Student Club - Parul University for the year 2023-2024.",
    img: "gdsc.png",
    title: "GDSC Web Development Lead",
  },
  // {
  //   id:4,
  //   quote:
  //     "Was selected as the contributo",
  //     img: "gssoc.png",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   id:5,
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   img: "./nothing.jpeg",
  //   title: "Director of AlphaStream Technologies",
  // },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

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
    title: "Gneration Nothing Community Member",
    desc: "Got the opportunity to contribute to Nothing.tech's community as Nothing's Generation Nothing Member.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/nothing.jpeg",
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
    title: "More Incoming",
    desc: "Actively looking to gather more Experiece, drop me an email if you think that I can help you.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
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