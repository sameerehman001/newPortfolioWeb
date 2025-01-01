import msgIcon from "../assets/icons/mail.png"
import { Footer } from "./footer";
export const ContactUs = () => {
  return (
    <>
      <div className="h-screen">
        <div className="project-title text-7xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex items-center">
          <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
          <p className="z-30 animate-pulse pl-5">
            Get <br /> in <br /> Touch
          </p>
        </div>
        <div className="form h-screen py-10 px-3 flex flex-col">
          <div className="illustration w-full flex justify-center items-center h-1/4">
            <img className="w-3/4" src={msgIcon} alt="" />
          </div>
          <div className="flex flex-col gap-8 py-10 px-3 w-full h-full rounded-xl">
            <div className="input-name w-full">
              <input
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="input-name w-full">
              <input
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="text"
                name="name"
                placeholder="Enter Your Email ID"
              />
            </div>
            <div className="input-name w-full">
              <input
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="text"
                name="name"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="input-name w-full">
              <textarea
                rows={5}
                className="bg-transparent border-color2 border-b rounded-none py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2 resize-none"
                type="text"
                name="name"
                placeholder="Subject"
              />
            </div>
            <button className="bg-color2 text-color3 hover:bg-color2/80 hover:scale-105 transition duration-200 rounded-xl text-center font-semibold cursor-pointer w-2/3 h-[5vh] tracking-wide self-center">
              Send it Now
            </button>
          </div>
        </div>
      <Footer />
      </div>
    </>
  );
};