import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ProjectInsights } from "./projectInsights";
import { ProjectCard } from "./ProjectCard";
import { Projects } from "./constant";
export const ProjectSection = () => {
  const [stopScroll, setStopScroll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleInsightPanel = (status, project = null) => {
    setStopScroll(status);
    setSelectedProject(project);
  };
  useEffect(() => {
    if (stopScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [stopScroll]);
  return (
    <>
      <div id="Projects" className="w-full h-full mt-20 flex flex-col">
        <motion.div 
        initial={{ opacity: 0,translateX: "-100%", y: 100 }}
        whileInView={{ opacity: 1,translateX: 0, y: 0 }}
        viewport={{ margin: "-20%",once: "true" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="project-title text-6xl md:text-8xl h-screen tracking-tight font-semibold uppercase text-white flex justify-center items-center animate-pulse">
          <div className="bg-color1/40 rounded-full absolute size-40 blur-[50px] z-10"></div>
          Projects
        </motion.div>
        <div className="h-full px-3 flex flex-wrap justify-center gap-10">
          {Object.keys(Projects).map((key) => {
            const project = Projects[key];
            return (
              <ProjectCard
                key={key}
                projectImage={project.image}
                title={project.title}
                subTitle={project.subTitle}
                setOpenInsights={(status) =>
                  handleInsightPanel(status, project)
                }
                githubLink={project.githubLink}
              />
            );
          })}
        </div>
        {selectedProject && (
          <ProjectInsights
            stopScroll={stopScroll}
            handleInsightPanel={handleInsightPanel}
            title={selectedProject.title}
            desc={selectedProject.insights.desc}
            category={selectedProject.insights.category}
            techstack={selectedProject.insights.techStack}
            reportLink={selectedProject.insights.reportLink}
          />
        )}
      </div>
    </>
  );
};