import logo from "../assets/icons/logo.svg"
import menu from "../assets/icons/menu.svg"
export const Navbar = () =>{
    return(
        <>
            <nav className="flex justify-between px-5 py-10">
                <div className="logo">
                    <img className="w-28" src={logo} alt="" />
                </div>
                <div className="menu">
                    <img className="w-8" src={menu} alt="" />
                </div>
            </nav>
        </>
    )
}