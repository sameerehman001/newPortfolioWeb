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
        <div className="form h-screen">
          <div className="px-3 mt-20">
            <div className="input-name w-full">
              <input
                className="bg-transparent border-color2 border-2 rounded-3xl py-2 px-3 w-full placeholder:text-color2/60 pl-5"
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
