import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {

  return (
    <div className="w-full relative pt-12">
      <Header />
      <main className="w-full max-w-4xl my-0 mx-auto">
        <Intro />
      </main>
    </div>
  )
}

export default App
