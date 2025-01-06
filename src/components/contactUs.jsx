import msgIcon from "../assets/icons/mail.png"
import { Footer } from "./footer";
export const ContactUs = () => {
  return (
    <>
      <div id="Contact" className="h-screen">
        <div className="project-title text-7xl md:text-9xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex items-center md:justify-center">
          <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
          <p className="z-30 animate-pulse pl-5">
            Get <br className="md:hidden" /> in <br className="md:hidden" /> Touch
          </p>
        </div>
        <div className="form h-screen py-10 px-3 flex max-md:flex-col mt-10 gap-5">
          <div className="illustration w-full flex justify-center items-center h-1/4 md:h-full">
            <img className="w-3/4 max-md:max-w-[20rem] md:w-[30rem]" src={msgIcon} alt="" />
          </div>
          <div className="flex flex-col gap-8 py-10 px-3 w-full items-center h-full rounded-xl">
            <div className="input-name w-full md:w-3/4">
              <input
              autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <input
               autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="text"
                name="name"
                placeholder="Enter Your Email ID"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <input
               autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="text"
                name="name"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <textarea
                rows={5}
               autoComplete="off"
                className="bg-transparent border-color2 border-b rounded-none py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2 resize-none"
                type="text"
                name="name"
                placeholder="Subject"
              />
            </div>
            <button className="bg-color2 text-color3 hover:bg-color2/80 hover:scale-105 transition duration-200 rounded-xl text-center font-semibold cursor-pointer w-2/3 h-[5vh] tracking-wide self-center md:w-[15rem]">
              Send it Now
            </button>
          </div>
        </div>
      <Footer />
      </div>
    </>
  );
};