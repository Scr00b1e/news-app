import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsPage from "./components/NewsPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pages from "./pages/Pages";

function App() {

  return (
    <div className="w-full relative pt-12">
      <Header />
      <main className="w-full max-w-4xl my-0 mx-auto flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/pages/:id" element={<NewsPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
