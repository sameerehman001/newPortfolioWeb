import github from "../assets/icons/github.svg"
import linkedin from "../assets/icons/linkedin.svg"
import telegram from "../assets/icons/telegram.svg"
export const Footer = () =>{
    return(
        <>
            <div className="flex flex-col w-full my-20">
                <div className="w-full h-[1px] bg-white/20"></div>
                <div className="nav-items w-full flex justify-center gap-5 text-white text-center text-xs font-light uppercase mt-5">
                    <div className="nav-option">Home</div>
                    <div className="nav-option">About Us</div>
                    <div className="nav-option">Projects</div>
                    <div className="nav-option">Blog</div>
                </div>
                <div className="icons w-full flex justify-center mt-5 items-center gap-5">
                    <div className="icon">
                        <img src={github} alt="" />
                    </div>
                    <div className="icon">
                        <img src={linkedin} alt="" />
                    </div>
                    <div className="icon">
                        <img src={telegram} alt="" />
                    </div>
                </div>
                <div className="text-white font-extralight text-xs text-center my-5">
                    <div className="title">©2025 Irfan Naikwade. All rights reserved.</div>
                    <div className="title">Bringing ideas to life with code.</div>
                    <div className="title">Thanks for visiting!.</div>
                </div>
            </div>
        </>
    )
}