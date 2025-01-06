import closeBtn from "../assets/icons/close.svg";

export const ProjectInsights = () =>{
    return(
        <>
         <div
          className={`"project-insights ${
            stopScroll ? "flex" : "hidden"
          } fixed top-0 w-full h-full justify-center items-center z-[100] bg-black/20 backdrop-blur-sm overflow-hidden"`}
        >
          <div className="bg-deepBlue backdrop-blur-md rounded-2xl h-fit w-[20rem] z-[101] relative text-white font-semibold border-2 border-white py-3">
            <div className="absolute right-3 top-3 border-2 border-white rounded-full p-1">
              <img
                onClick={() => handleInsightPanel(false)}
                className="w-6 cursor-pointer"
                src={closeBtn}
                alt=""
              />
            </div>
            <div className="project-insight-text flex flex-col h-full p-4 gap-y-5 mt-5">
              <div className="Project-name text-3xl">OncoScence</div>
              <div className="Project-overview flex flex-col">
                <span className="text-lg">Overview</span>
                <span className="text-xs text-justify">
                  OncoScence is a lung cancer detection system designed to
                  analyze X-ray images efficiently. This project simplifies the
                  diagnostic process by providing real-time insights, improving
                  accuracy, and reducing diagnostic time for doctors.
                </span>
              </div>
              <div className="category text-lg flex flex-col">
                Category{" "}
                <span className="font-light text-xs">
                  Healthcare, AI/ML, Web Application
                </span>
              </div>
              <div className="project-tech-stack flex flex-col gap-1">
                <div className="title text-lg">Tech Stack</div>
                <div className="tech-icons grid grid-cols-4 gap-5">
                  <img className="w-10" src={icon1} alt="" />
                  <img className="w-10" src={icon2} alt="" />
                  <img className="w-10" src={icon3} alt="" />
                  <img className="w-10" src={icon4} alt="" />
                  <img className="w-10" src={icon5} alt="" />
                  <img className="w-10" src={icon6} alt="" />
                  <img className="w-10" src={icon7} alt="" />
                  <img className="w-10" src={icon8} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <span className="text-white text-xs">Get the detailed Report</span>
                <button className="border-2 border-color2 text-color2 rounded-full w-1/2 py-2 text-xs hover:bg-color2 hover:text-color3">Download Now</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}