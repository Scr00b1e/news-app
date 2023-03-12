import CultureHome from "./components/CultureHome";
import FutureHome from "./components/FutureHome";
import Header from "./components/Header";
import Intro from "./components/Intro";
import OthersHome from "./components/OthersHome";
import SportHome from "./components/SportHome";
import TravelHome from "./components/TravelHome";

function App() {

  return (
    <div className="w-full relative pt-12">
      <Header />
      <main className="w-full max-w-4xl my-0 mx-auto">
        <Intro />
        <TravelHome />
        <CultureHome />
        <SportHome />
        <FutureHome />
        <OthersHome />
      </main>
    </div>
  )
}

export default App
