import PropTypes from "prop-types";
export const ProjectCard = ({projectImage,mainTitle,subTitle}) =>{
    return(
        <>
            <div className="project-card flex flex-col gap-y-8 bg-white/5 w-full h-1/2 rounded-md py-5 px-3">
                        <div className="project-image bg-white/5 w-full h-[22vh] rounded-md flex flex-col justify-between">
                          <div className="flex gap-1 py-1 pl-2 h-1/5">
                            <div className="size-1 bg-red-500 rounded-full"></div>
                            <div className="size-1 bg-yellow-400 rounded-full"></div>
                            <div className="size-1 bg-green-400 rounded-full"></div>
                          </div>
                          <img className="4/5" src={projectImage} alt="" />
                        </div>
                        <div className="project-text flex flex-col gap-y-1">
                          <div className="main-title text-2xl text-white font-semibold">
                            {mainTitle}
                          </div>
                          <div className="sub-title text-white font-extralight text-xs tracking-wider">
                            {subTitle}
                          </div>
                        </div>
                        <div className="buttons flex gap-2 w-full text-[12px]">
                          <button className="bg-color1 text-white hover:bg-color1Hover rounded-3xl text-center font-semibold cursor-pointer w-1/2 h-[4vh] tracking-widest">
                            Explore Insights
                          </button>
                          <button className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 rounded-3xl text-center font-semibold cursor-pointer w-1/2 h-[4vh] tracking-widest">
                            View in Github
                          </button>
                        </div>
                      </div>
        </>
    )
}
ProjectCard.propTypes = {
    projectImage: PropTypes.string,
    mainTitle: PropTypes.string,
    subTitle: PropTypes.string
}