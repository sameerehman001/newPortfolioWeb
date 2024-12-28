import { Navbar } from "./components/Navbar";
import { HeroSect } from "./components/HeroSect";
function App() {
  return (
    <>
      <div className="bg-deepBlue flex flex-col h-screen w-full font-sora overflow-x-hidden">
        <Navbar/>
        <HeroSect/>
      </div>
    </>
  );
}
export default App;