import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsPage from "./components/NewsPage";
import { auth, db } from "./firebaseconfig";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Pages from "./pages/Pages";

function App() {
  const [somePages, setSomePages] = useState([])
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  useEffect(() => {
    try {
      const q = query(collection(db, 'pages'))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let pages: any = []
        querySnapshot.forEach((doc) => {
          pages.push({ ...doc.data(), id: doc.id })
        })
        setSomePages(pages)
      })
      return () => unsubscribe()
    } catch {
      alert("Something is wrong...")
    }
  })

  return (
    <div className="w-full relative pt-12">
      <Header user={user} />
      <main className="w-full max-w-4xl my-0 mx-auto flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          {
            somePages?.map((obj: any, id) => (
              <Route path={`/${obj.page}`} element={<Pages {...obj} key={id} />} />
            ))
          }

          {
            somePages?.map((obj, i) => (
              <Route path={`/${obj.page}/:id`} element={<NewsPage key={i} />} />
            ))
          }
          <Route path="/login" element={<Login user={user} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
