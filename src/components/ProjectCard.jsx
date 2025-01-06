import PropTypes from "prop-types";
export const ProjectCard = ({ projectImage, mainTitle, subTitle, setOpenInsights }) => {
  const openInsightsPanel = () =>{
   setOpenInsights(true);
  }
  return (
    <>
      <div className="project-card flex flex-col bg-white/5 w-[20rem] h-[20rem] rounded-md py-5 px-3">
        <div className="project-image bg-white/5 w-full h-1/2 rounded-md flex flex-col justify-between">
          <div className="flex gap-1 py-1 pl-2 h-1/5">
            <div className="size-1 bg-red-500 rounded-full"></div>
            <div className="size-1 bg-yellow-400 rounded-full"></div>
            <div className="size-1 bg-green-400 rounded-full"></div>
          </div>
          <img className="w-full" src={projectImage} alt="" />
        </div>
        <div className="project-text flex flex-col h-2/5 justify-center gap-y-1">
          <div className="main-title text-2xl text-white font-semibold">
            {mainTitle}
          </div>
          <div className="sub-title text-white font-extralight text-xs tracking-wider">
            {subTitle}
          </div>
        </div>
        <div className="buttons flex gap-2 w-full text-[12px]">
          <button onClick={()=>openInsightsPanel()} className="bg-color1 text-white hover:bg-color1Hover rounded-3xl text-center font-semibold cursor-pointer w-1/2 h-[5vh] tracking-widest">
            Explore Insights
          </button>
          <button className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 rounded-3xl text-center font-semibold cursor-pointer w-1/2 h-[5vh] tracking-widest">
            View in Github
          </button>
        </div>
      </div>
    </>
  );
};
ProjectCard.propTypes = {
  projectImage: PropTypes.string,
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
  setOpenInsights: PropTypes.func,
};
