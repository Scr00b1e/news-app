import React from 'react'
import { Link } from 'react-router-dom'
import Intro from '../components/Intro'
import Routing from '../components/Routing'
import { pages } from "../data/pages"
import { query, onSnapshot, collection } from 'firebase/firestore'
import { db } from '../firebaseconfig'

const Home = () => {
    const [somePages, setSomePages] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const GetPages = async () => {
            const q = query(collection(db, 'pages'))
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let pages = []
                querySnapshot.forEach((doc) => {
                    pages.push({ ...doc.data(), id: doc.id })
                })
                setSomePages(pages)
                setLoading(false)
            })
            return () => unsubscribe()
        }
        GetPages()
    }, [])

    return (
        <>
            <Intro />
            {
                pages.map((obj, i) => (
                    <Link to={`/pages/${i}`}>
                        <Routing {...obj} key={i} />
                    </Link>
                ))
            }
        </>
    )
}

export default Home