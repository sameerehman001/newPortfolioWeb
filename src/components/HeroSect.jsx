import heroIllustration from "../assets/images/Hero-illustrations.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import scrollIcon from "../assets/icons/scroll-animation.svg";
export const HeroSect = () => {
  return (
    <>
      <div id="Home" className="flex justify-center">
        <div className="hero-section w-full h-[80vh] flex justify-between relative max-w-[60rem]">
          <div className="heroText h-full w-full z-30 flex flex-col md:justify-center">
            <div className="flex flex-col text-white pl-5 tracking-wide md:gap-1">
              <span className="font-semibold text-2xl md:text-4xl">
                Hi! I&apos;m Irfan,
              </span>
              <span className="font-semibold text-2xl md:text-4xl">
                A Web &nbsp;
                <span className="bg-fontBlue text-transparent bg-clip-text">
                  Developer
                </span>
              </span>
              <span className="text-[#989898] font-normal text-[10px] md:text-sm md:w-[50%]">
                Combining development skills with creative design, <br />I
                transform concepts into dynamic, user-centered <br /> web
                solutions.
              </span>
            </div>
            <div className="buttons max-sm:absolute bottom-10 w-full flex max-sm:items-center max-md:flex-col text-white gap-3 text-[10px] tracking-widest pl-4 md:pl-5 mt-5">
              <a href="#Projects">
                <button className="bg-color1 hover:bg-color1Hover w-[14rem] md:w-[12rem] rounded-3xl uppercase text-center font-semibold cursor-pointer py-2">
                  Explore Projects
                </button>
              </a>
              <a href="#Contact">
                <button className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 rounded-3xl w-[14rem] md:w-[12rem] uppercase text-center font-semibold cursor-pointer py-2">
                  Get in Touch
                </button>
              </a>
            </div>
            <div className="social-icons w-20 flex justify-center items-center gap-3 h-10 mt-5 ml-5">
              <a className="" href="https://www.linkedin.com/in/irfan-naikwade/" target="_blank">
                <img className="w-7 cursor-pointer" src={linkedin} alt="" />
              </a>
              <a className="" href="https://github.com/IrfanNaikwade28" target="_blank">
                <img className="w-9 cursor-pointer" src={github} alt="" />
              </a>
            </div>
          </div>
          <div className="heroIllustration flex flex-col items-center w-full h-full absolute">
            <img
              className="min-w-[20rem] max-sm:w-[25rem] absolute top-10 md:-top-24 sm:-top-10 -right-10 md:w-2/3 md:-right-20"
              src={heroIllustration}
              alt=""
            />
            <div className="absolute bottom-40 md:bottom-5">
              <div className="scroll-icon">
                <img className="w-5" src={scrollIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
