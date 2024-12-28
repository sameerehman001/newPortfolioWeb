import heroIllustration from "../assets/images/Hero-illustrations.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import scrollIcon from  "../assets/icons/scroll-animation.svg";
export const HeroSect = () => {
  return (
    <>
      <div className="hero-section flex justify-between relative h-full">
        <div className="heroText h-full">
          <div className="flex flex-col text-white pl-5">
            <span className="font-semibold text-2xl">Hi! I&apos;m Irfan,</span>
            <span className="font-semibold text-2xl">A Web <span className="bg-fontBlue text-transparent bg-clip-text">Developer</span></span>
            <span className="text-[#989898] font-normal text-[10px]">
              Combining development skills with creative design, <br />I transform
              concepts into dynamic, user-centered <br /> web solutions.
            </span>
          </div>
          <div className="social-icons flex w-8 gap-3 h-20 ml-5">
             <img className="w-7" src={linkedin} alt="" />
             <img src={github} alt="" />
          </div>
          <div className="scroll-icon absolute bottom-52 w-full flex flex-col items-center">
            <img className="w-5" src={scrollIcon} alt="" />
          </div>
          <div className="buttons absolute bottom-20 w-full flex flex-col items-center text-white mt-3 gap-3 text-[11px] tracking-widest">
                <button className="bg-[#6A57E0] hover:bg-[#563ef4] w-[70vw] py-3 rounded-3xl uppercase text-center font-semibold cursor-pointer">Explore Projects</button>
                <button className="text-[#80FFD2] border-2 border-[#80FFD2] hover:bg-[#80FFD2] hover:text-[#161B23] rounded-3xl w-[70vw] py-3 uppercase text-center font-semibold cursor-pointer">
                  Get in Touch
                </button>
          </div>
        </div>
        <div className="heroIllustration absolute w-full z-10">
          <img
            className="w-[90%] absolute top-10 left-8 right-0"
            src={heroIllustration}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
