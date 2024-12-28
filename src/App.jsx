import { Navbar } from "./components/Navbar";
import { HeroSect } from "./components/HeroSect";
function App() {
  return (
    <>
      <div className="bg-deepBlue h-svh w-full font-sora">
        <Navbar/>
        <HeroSect/>
      </div>
    </>
  );
}
export default App;