import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.png";
import portfolioImg03 from "../images/portfolio-03.png";
import portfolioImg04 from "../images/portfolio-04.png";
import portfolioImg05 from "../images/portfolio-05.mp4";
import portfolioImg06 from "../images/portfolio-06.png";
import portfolioImg07 from "../images/portfolio-07.png";
import portfolioImg08 from "../images/portfolio-08.png";
// import portfolioImg06 from "../images/portfolio-06.jpg";
// import portfolioImg07 from "../images/portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Highway Bus Management System Web Site",
    description:
      "The Highway Bus Management System (HBMS) Web Application consists of Admin and Highway Bus Authority screens. From this Admin and Highway Bus Authority can edit data and information used in the HBMS Mobile Application.",
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
      "The Highway Bus Management System (HBMS) Web Site Consist user-friendly and attractive interfaces.",
    technologies: ["Figma"],
    siteUrl: "#",
    sourceCode: ""
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Highway Bus Management System Mobile Application",
    description: "This mobile application consists of some features such as the seat and luggage reservations for the highway bus passengers. And it facilitates highway bus passengers to live location of a bus, bus schedules, bus fares, lost and found items, etc.",
    technologies: ["React Native", "Node.js", "MongoDB"],
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
    category: "Web Design",
    title: "To-Do Mobile Application",
    description:
      "This is a simple To-Do List application built with Flutter for the frontend, Go for the backend, and PostgreSQL for the database. The app allows users to register ✍️, log in 🔑, add tasks ➕, delete tasks ❌, update tasks 🔄, and view all the tasks they've entered 📋.",
    technologies: ["Flutter", "Go","PosgreSQL"],
    siteUrl: "#",
    sourceCode: "https://github.com/DULAJBHAGYA/todoApp"
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
  
  {
    id: "08",
    imgUrl: portfolioImg08,
    category: "Other",
    title: "Smart Work Station",
    description: "This is a Smart Work Station that consists of some features to avoid difficulties arising while using a computer long period. ",
    technologies: ["C"],
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
