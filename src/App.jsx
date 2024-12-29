import { Navbar } from "./components/Navbar";
import { HeroSect } from "./components/HeroSect";
import { ProjectSection } from "./components/ProjectSection";
import { AboutMe } from "./components/AboutMe";
function App() {
  return (
    <>
      <div className="bg-deepBlue flex flex-col w-full h-full font-sora overflow-x-hidden relative">
        <Navbar/>
        <HeroSect/>
        <ProjectSection/>
        <AboutMe/>
      </div>
    </>
  );
}
export default App;