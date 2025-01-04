import project1 from "../assets/images/Project-image/project1.png";
import project2 from "../assets/images/Project-image/project2.png";
import project3 from "../assets/images/Project-image/project3.png";
import { ProjectCard } from "./ProjectCard";
export const ProjectSection = () => {
  return (
    <>
      <div className="w-full h-full mt-20 flex flex-col">
        <div className="project-title text-6xl md:text-8xl h-screen tracking-tight font-semibold uppercase text-white flex justify-center items-center animate-pulse">
        <div className="bg-color1/40 rounded-full absolute size-40 blur-[50px] z-10"></div>
            Projects
        </div>
        <div className="h-full px-3 flex flex-wrap justify-center gap-10">
            <ProjectCard projectImage={project1} mainTitle={"OncoScence"} subTitle={"Lung Cancer Detection System"}/>
            <ProjectCard projectImage={project2} mainTitle={"Quiz-Whiz Junction"} subTitle={"Online Quiz Application"}/>
            <ProjectCard projectImage={project3} mainTitle={"Tesla Website Clone"} subTitle={"A responsive clone of Tesla's website"}/>
            <ProjectCard projectImage={project1} mainTitle={"OncoScence"} subTitle={"Lung Cancer Detection System"}/>
            <ProjectCard projectImage={project2} mainTitle={"Quiz-Whiz Junction"} subTitle={"Online Quiz Application"}/>
            <ProjectCard projectImage={project3} mainTitle={"Tesla Website Clone"} subTitle={"A responsive clone of Tesla's website"}/>
        </div>
      </div>
    </>
  );
};