import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Routing from "./components/Routing";
import { pages } from "./data/pages"

function App() {

  return (
    <div className="w-full relative pt-12">
      <Header />
      <main className="w-full max-w-4xl my-0 mx-auto">
        <Intro />
        {
          pages.map((obj, i) => (
            <Routing text={obj.text} key={i} />
          ))
        }
      </main>
      <Footer />
    </div>
  )
}

export default App
