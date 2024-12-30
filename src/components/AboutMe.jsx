import { RadarChart } from "./radarChart";
import character from "../assets/images/character-removebg-preview.png";
import js from "../assets/icons/skills-icon/javascript.svg";
import cpp from "../assets/icons/skills-icon/cpp.svg";
import css from "../assets/icons/skills-icon/css.svg";
import figma from "../assets/icons/skills-icon/figma.svg";
import md from "../assets/icons/skills-icon/mongodb.svg";
import next from "../assets/icons/skills-icon/nextjs.svg";
import node from "../assets/icons/skills-icon/nodejs.svg";
import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
export const AboutMe = () => {
  return (
    <>
      <div className=" w-full mt-5 px-3">
        <div className="project-title text-5xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex justify-center items-center">
          <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
          <p className="z-30 animate-pulse">The developer behind the code</p>
        </div>
        <div className="Me h-screen relative flex flex-col items-center py-5">
          <div className="image w-full flex justify-center z-20 relative">
            <img className="w-2/3 z-20" src={character} alt="" />
            <div className="absolute w-full h-full z-10 bg-color1 custom-radius"></div>
          </div>
          <div className="AboutMeText p-5 flex flex-col mt-5 gap-y-3">
            <div className="text-white text-3xl font-semibold">About Me</div>
            <div className="about-me text-white text-sm leading-5 mt-3 text-justify">
              Hi, I&apos;m Irfan! I’ve completed a Diploma in Computer Science
              and Engineering and I am currently pursuing a B.Tech in Data
              Science. With a passion for web development and design, I’m
              dedicated to creating dynamic and responsive websites that deliver
              seamless user experiences.
            </div>
            <button className="bg-color1 text-white hover:bg-color1Hover rounded-3xl text-center font-semibold cursor-pointer w-2/3 h-[5vh] tracking-widest text-sm mt-5">
              Download CV
            </button>
          </div>
          <div className="button"></div>
        </div>
        <div className="project-title text-5xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex justify-center items-center">
          <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
          <p className="z-30 animate-pulse">
            The Developer&apos;<span className="lowercase">s</span> Skills
          </p>
        </div>
        <div className="h-screen flex flex-col gap-y-5">
          <div className="flex flex-col p-5">
            <div className="text-white text-3xl tracking-wide font-semibold mt-5">
              About Skills
            </div>
            <div className="about-me text-white text-lg leading-6 mt-3 text-justify">
              I craft engaging and functional websites using modern
              technologies, combining clean code with creative design to bring
              ideas to life.
            </div>
          </div>
          <div className="skill-icons flex justify-center px-5">
            <div className="grid grid-cols-5 gap-3 w-full">
              <img className="size-10" src={js} alt="" />
              <img className="size-10" src={react} alt="" />
              <img className="size-10" src={node} alt="" />
              <img className="size-10" src={md} alt="" />
              <img className="size-10" src={next} alt="" />
              <img className="size-10" src={py} alt="" />
              <img className="size-10" src={tailwind} alt="" />
              <img className="size-10" src={css} alt="" />
              <img className="size-10" src={figma} alt="" />
              <img className="size-10" src={cpp} alt="" />
            </div>
          </div>
          <div className="flex flex-col mt-5 items-center">
            <div className="text-color3 px-3 text-lg font-semibold tracking-wide bg-color2 rounded-3xl">Skills Overview Radar</div>
            <RadarChart />
          </div>
        </div>
      </div>
    </>
  );
};
