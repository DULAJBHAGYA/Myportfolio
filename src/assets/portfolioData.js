import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.png";
import portfolioImg03 from "../images/portfolio-03.png";
import portfolioImg04 from "../images/portfolio-04.png";
import portfolioImg05 from "../images/portfolio-05.png";
import portfolioImg06 from "../images/portfolio-06.png";
import portfolioImg07 from "../images/portfolio-07.png";
// import portfolioImg06 from "../images/portfolio-06.jpg";
// import portfolioImg07 from "../images/portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Highway Bus Management System Web Site",
    description:
      "he Highway Bus Management System (HBMS) consists of luggage reservation, Seat Booking, Lost and Found Item submission, Live bus location, Bus Schedule, and Ticket reservations those features.with a mobile application as well as a web application",
    technologies: ["ReactJs", "Node.js", "MongoDB"],
    siteUrl: "#",
    sourceCode: "https://github.com/DULAJBHAGYA/HBMS-Web-application"
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Highway Bus Management System Web Site",
    description:
      "The SEDS Mora website is the official platform that provides information about SEDS Mora and its activities to the society. It showcases SEDS Mora's mission, projects, and initiatives, promoting transparency and engagement with the wider community.",
    technologies: ["Figma"],
    siteUrl: "#",
    sourceCode: ""
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Highway Bus Management System Mobile Application",
    description:"This mobile application consist with some features such as seat and luggage reservations for thr pasengers.",
    technologies: ["React Native", "Node.js","MongoDB", "FireBase"],
    siteUrl: "#",
    sourceCode: ""
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "SEDS Mora Web Site",
    description:
      "The SEDS Mora website is the official platform that provides information about SEDS Mora and its activities to the society. It showcases SEDS Mora's mission, projects, and initiatives, promoting transparency and engagement with the wider community.",
    technologies: ["ReactJs", "Node.js", "FireBase"],
    siteUrl: "https://sedsmora.org/",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Other",
    title: "Smart Work Station",
    description:"This is Smart Work Station that consist with some features to avoid difficulties arise while using computer long period. ",
    technologies: ["C"],
  },
  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Job Portal Web Application",
    description:
      "This is a dynamic job portal using MERN stack, empowering job seekers and employers. Implemented seamless job search, user-friendly job posting for employers, and enhanced security with Firebase authentication.",
    technologies: ["React", "Tailwind css", "Node.js", "ExpressJS", "Firebase", "MongoDB"],
    siteUrl: "#",
    sourceCode: "https://github.com/DULAJBHAGYA/MERN-Job-portal"
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Web Design",
    title: "My Personal Portfolio Website",
    description:
      "My personal portfolio includes my education background, skills,and projects I completed. It is a responsive portfolio website and through it you can contact me.",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://dulajupananda.netlify.app/",
    sourceCode: "https://github.com/DULAJBHAGYA/Myportfolio"
  },
  // {
  //   id: "04",
  //   imgUrl: portfolioImg05,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "05",
  //   imgUrl: portfolioImg03,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },

  // {
  //   id: "06",
  //   imgUrl: portfolioImg06,
  //   category: "Ux",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "07",
  //   imgUrl: portfolioImg07,
  //   category: "Web Design",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "08",
  //   imgUrl: portfolioImg01,
  //   category: "Web Design",
  //   title: "Finance Technology Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "09",
  //   imgUrl: portfolioImg02,
  //   category: "Ux",
  //   title: "Video Conference Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "10",
  //   imgUrl: portfolioImg03,
  //   category: "Ux",
  //   title: "File Sharing Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "11",
  //   imgUrl: portfolioImg04,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "12",
  //   imgUrl: portfolioImg05,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "13",
  //   imgUrl: portfolioImg06,
  //   category: "Web Design",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "14",
  //   imgUrl: portfolioImg07,
  //   category: "ux",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
];

export default portfolios;