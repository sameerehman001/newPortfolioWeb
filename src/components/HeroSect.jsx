import heroIllustration from "../assets/images/Hero-illustrations.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import scrollIcon from "../assets/icons/scroll-animation.svg";
export const HeroSect = () => {
  return (
    <>
      <div className="hero-section w-full h-full flex justify-between relative">
        <div className="heroText h-full w-full z-30">
          <div className="flex flex-col text-white pl-5">
            <span className="font-semibold text-2xl">Hi! I&apos;m Irfan,</span>
            <span className="font-semibold text-2xl">
              A Web{" "}
              <span className="bg-fontBlue text-transparent bg-clip-text">
                Developer
              </span>
            </span>
            <span className="text-[#989898] font-normal text-[10px]">
              Combining development skills with creative design, <br />I
              transform concepts into dynamic, user-centered <br /> web
              solutions.
            </span>
          </div>
          <div className="social-icons flex w-8 gap-3 h-20 ml-5">
            <img className="w-7" src={linkedin} alt="" />
            <img src={github} alt="" />
          </div>
          <div className="buttons absolute w-full bottom-10 flex items-center flex-col text-white gap-3 text-[10px] tracking-widest">
            <button className="bg-color1 hover:bg-color1Hover w-2/3 py-3 rounded-3xl uppercase text-center font-semibold cursor-pointer">
              Explore Projects
            </button>
            <button className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 rounded-3xl w-2/3 py-3 uppercase text-center font-semibold cursor-pointer">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="heroIllustration flex flex-col items-center w-full h-full absolute">
          <img
            className="min-w-[100vw] absolute top-6 left-14"
            src={heroIllustration}
            alt=""
          />
          <div className="absolute bottom-36">
            <div className="scroll-icon">
              <img className="w-5" src={scrollIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
