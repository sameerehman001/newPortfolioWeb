import logo from "../assets/icons/logo.svg";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import { useState } from "react";
export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="flex justify-between px-5 py-10">
        <div className="logo">
          <img className="w-24" src={logo} alt="" />
        </div>
        <div onClick={() => setToggle(!toggle)} className="menu">
          <img className="w-8" src={menu} alt="" />
        </div>
      </nav>
      <div className={`${toggle ? "flex" : "hidden"} flex-col items-center absolute w-screen h-screen rounded-md bg-black/30 z-40 backdrop-blur-md gap-y-20`}>
      <div className="close">
        <img onClick={() => setToggle(!toggle)}  className="w-10 absolute right-4 top-8" src={close} alt="" />
      </div>
        <div className="text text-white capitalize text-5xl font-light flex flex-col gap-10 h-full">
          <div className="Home">Home</div>
          <div className="Home">Projects</div>
          <div className="Home">About Me</div>
          <div className="buttons w-full flex flex-col items-center text-white mt-3 gap-3 text-[11px] tracking-widest">
                <button className="text-[#80FFD2] border-2 border-[#80FFD2] hover:bg-[#80FFD2] hover:text-[#161B23] rounded-3xl w-[70vw] py-3 uppercase text-center font-semibold cursor-pointer">
                  Get in Touch
                </button>
          </div>
        </div>
      </div>
    </>
  );
};
