// Icons
import js from "../assets/icons/skills-icon/javascript.svg";
// import django from "../assets/icons/skills-icon/django.svg";
// import html from "../assets/icons/skills-icon/html.svg";
// import cpp from "../assets/icons/skills-icon/cpp.svg";
import css from "../assets/icons/skills-icon/css.svg";
// import figma from "../assets/icons/skills-icon/figma.svg";
// import md from "../assets/icons/skills-icon/mongodb.svg";
import next from "../assets/icons/skills-icon/nextjs.svg";
// import node from "../assets/icons/skills-icon/nodejs.svg";
// import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
// import php from "../assets/icons/skills-icon/php.svg";
// import ml from "../assets/icons/skills-icon/ml.png";

// projectImagess
import respireX from "../assets/images/projectImages/1/ranchers.png";
import qz from "../assets/images/projectImages/1/CampSiteImg1.png";
// import tesla from "../assets/images/projectImages/project3.png";
import emd from "../assets/images/projectImages/1/ZeemDev.png";
import algo from "../assets/images/projectImages/1/VideoOverlay.png";
import furni from "../assets/images/projectImages/1/portfolio_website.png";
// import ftc from "../assets/images/projectImages/project7.png";
// import ngo from "../assets/images/projectImages/project8.png";
import metashield from "../assets/images/projectImages/1/prdictive.png";

export const Projects = {
  RespireX: {
    image: respireX,
    title: "Ranchers Cafe",
    subTitle: "Main site and Admin_dashboard",
    insights: {
      desc: ` I have worked on Ranchers website and also on delivery_web app which was already live, so I added some functionalities and changed some stylings.`,
      category: "Food, Web Application",
      languages: [
        "Typescript",
        "Nextjs",
        "Tailwindcss",
        "MUI",
        "Redux-Toolkit",
        "GraphQL",
      ],
      techStack: [css, js, next, react, tailwind],
      reportLink: "",
    },
    githubLink: "https://rancherscafe.com/",
  },
  MetaShield: {
    image: metashield,
    title: "Predictive Analysis",
    subTitle: "Main site and Admin_dashboard",
    insights: {
      desc: `This was my first project in Codistan Ventures. It was on TypeScript and NextJS and also GraphQL is used in the backend, and also integrated GrapghQL API's.`,
      category: "Property App, Web Application",
      languages: ["TypeScript", "Nextjs", "ModularCSS", "MUI", "GraphQL"],
      techStack: [css, js, next, react, tailwind],
      reportLink: "",
    },
    githubLink: "https://github.com/sameerehman001",
  },
  qzwz: {
    image: qz,
    title: "Campsite Admin-panel",
    subTitle: "Admin Dashboard",
    insights: {
      desc: `I have built this project using Barrey Template. I have fully customized it accordingly and also used MUI for styling, integrated Rest API's, and useContext is used.`,
      category: "Property App, Web Application",
      languages: ["JavaScript", "Reactjs", "ModularCSS", "MUI", "Rest-API"],
      techStack: [css, js, react, tailwind],
      reportLink: "",
    },
    githubLink: "https://github.com/sameerehman001",
  },
  emd: {
    image: emd,
    title: "ZeemDev Admin-panel",
    subTitle: "Admin Dashboard",
    insights: {
      desc: `I have made this admin-panel using RectJS and I also integrated Rest API's, for styling i used MUI and ModularCSS.`,
      category: "Property App, Web Application",
      languages: ["JavaScript", "Reactjs", "ModularCSS", "MUI", "Rest-API"],
      techStack: [js, react, tailwind, css],
      reportLink: "",
    },
    githubLink: "https://harvestfundmanagement.com/admin-panel",
  },
  algo: {
    image: algo,
    title: "Video-Overlay",
    subTitle: "Admin Dashboard for Meetings website",
    insights: {
      desc: `I have made this admin-panel using RectJS and I also integrated Rest API's, for styling i used MUI and ModularCSS.`,
      category: "Education, Data Structures & Algorithms, Visualization Tool",
      languages: [
        "JavaScript",
        "Reactjs",
        "ModularCSS",
        "MUI",
        "Rest-API",
        "useContext",
      ],
      techStack: [js, react, next, css],
      reportLink: "",
    },
    githubLink: "https://github.com/sameerehman001",
  },
  furni: {
    image: furni,
    title: "My Portfolio website",
    subTitle: "Portfolio website",
    insights: {
      desc: `I have made this portfolio website from scratch. I built this in Nextjs and i also used TailwindCSS and Material-UI in this.`,
      category: "Portfolio website, Responsive Web Application",
      languages: ["JavaScript", "Nextjs", "TailwindCSS", "MUI"],
      techStack: [css, js, next, tailwind],
      reportLink: "",
    },
    githubLink: "https://github.com/sameerehman001",
  },
  //   ngo: {
  //     image: ngo,
  //     title: "NGO Portfolio",
  //     subTitle: "village Portfolio",
  //     insights: {
  //       desc: `The NGO Portfolio is a professional website designed to showcase the mission, vision, and activities of a non-governmental organization. It provides an engaging platform to highlight initiatives, achievements, and opportunities for involvement. `,
  //       category: "Portfolio Website, Web Development",
  //       techStack: [react, tailwind, figma, html, css, js],
  //       reportLink: "",
  //     },
  //     githubLink: "https://github.com/IrfanNaikwade28/NGO-Portfolio.git",
  //   },
  //   ftc: {
  //     image: ftc,
  //     title: "Flip the Card",
  //     subTitle: "Card Game on web",
  //     insights: {
  //       desc: `Flip the Card is an engaging and interactive card-matching game designed for fun and cognitive skill enhancement. The game challenges users to match pairs of cards through memory and concentration. With its visually appealing design and smooth functionality, Flip the Card offers an entertaining experience while encouraging mental agility.`,
  //       category: "Game, Web Development, Interactive Application",
  //       techStack: [html, css, js],
  //       reportLink: "",
  //     },
  //     githubLink: "https://github.com/IrfanNaikwade28/Flip-the-Card.git",
  //   },
  //   tesla: {
  //     image: tesla,
  //     title: "Tesla",
  //     subTitle: "A Cloned website",
  //     insights: {
  //       desc: `The Tesla Web Project is a visually stunning and responsive landing page inspired by Tesla's innovative brand. The project showcases a sleek design with smooth animations and an intuitive layout, highlighting Tesla's vehicles and technology. Built with modern web development practices, it provides an immersive experience that captures the essence of a cutting-edge automotive brand.`,
  //       category: "Web Design, Landing Page",
  //       techStack: [html, css, js],
  //       reportLink: "",
  //     },
  //     githubLink: "https://github.com/IrfanNaikwade28/Web-Project-Tesla.git",
  //   },
};
