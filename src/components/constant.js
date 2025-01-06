// Icons
import js from "../assets/icons/skills-icon/javascript.svg";
import django from "../assets/icons/skills-icon/django.svg";
import html from "../assets/icons/skills-icon/html.svg";
import cpp from "../assets/icons/skills-icon/cpp.svg";
import css from "../assets/icons/skills-icon/css.svg";
import figma from "../assets/icons/skills-icon/figma.svg";
import md from "../assets/icons/skills-icon/mongodb.svg";
import next from "../assets/icons/skills-icon/nextjs.svg";
import node from "../assets/icons/skills-icon/nodejs.svg";
import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
import php from "../assets/icons/skills-icon/php.svg";

// project-images
import onco from "../assets/images/Project-image/Project1.png"
import qz from "../assets/images/Project-image/Project2.png"

const Projects = {
    "Onco": {
        "image": { onco },
        "title": "OncoScence",
        "subTitle": "Lung Cancer Detection System",
        "insights": {
            "desc": ` OncoScence is a lung cancer detection system designed to
                  analyze X-ray images efficiently. This project simplifies the
                  diagnostic process by providing real-time insights, improving
                  accuracy, and reducing diagnostic time for doctors.`,
            "category": "Healthcare, AI/ML, Web Application",
            "techStack": [py, django, html, css, js],
            "reportLink": ""
        },
        "githubLink": "https://github.com/IrfanNaikwade28/Lungs-Cancer-Detection-System.git"
    },
    "qzwz": {
        "image": { qz },
        "title": "Quizwhiz Junction",
        "subTitle": "Online Quiz Platform",
        "insights": {
            "desc": `Quizwhiz Junction is an interactive web-based quiz application designed to make learning engaging and enjoyable. It offers a wide range of quizzes across various topics, providing users with real-time feedback and performance tracking through a point-based system.`,
            "category": "Education, Interactive Quiz Application, Web Development",
            "techStack": [php, html, css, js],
            "reportLink": ""
        },
        "githubLink": "https://github.com/IrfanNaikwade28/Quizwhiz-Junction.git"
    },
}