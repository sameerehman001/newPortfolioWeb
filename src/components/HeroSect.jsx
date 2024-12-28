import heroIllustration from "../assets/images/Hero-illustrations.png";
export const HeroSect = () => {
  return (
    <>
      <div className="hero-section flex justify-between relative">
        <div className="heroText pl-3">
          <div className="flex flex-col text-white">
            <span className="font-semibold text-xl">Hi! I&apos;m Irfan,</span>
            <span className="font-semibold text-xl">A Web <span className="bg-fontBlue text-transparent bg-clip-text">Developer</span></span>
            <span className="text-[#989898] font-normal text-[8px]">
              Combining development skills with creative design, <br />I transform
              concepts into dynamic, user-centered <br /> web solutions.
            </span>
          </div>
          <div className="buttons flex flex-col text-white mt-3 gap-2 text-[9px]">
                <button className="bg-[#6A57E0] hover:bg-[#aa9ff4] w-[40vw] py-2 rounded-3xl uppercase text-center font-semibold cursor-pointer">Explore Projects</button>
                <button className="text-[#80FFD2] border-2 border-[#80FFD2] hover:bg-[#80FFD2] rounded-3xl w-[40vw] py-2 uppercase text-center font-semibold cursor-pointer">Get in Touch</button>
          </div>
        </div>
        <div className="heroIllustration absolute w-full z-10">
          <img
            className="w-[90%] absolute right-0"
            src={heroIllustration}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
