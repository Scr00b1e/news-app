import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsPage from "./components/NewsPage";
import Home from "./pages/Home";
import Pages from "./pages/Pages";

function App() {

  return (
    <div className="w-full relative pt-12">
      <Header />
      <main className="w-full max-w-4xl my-0 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/newspage" element={<NewsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
