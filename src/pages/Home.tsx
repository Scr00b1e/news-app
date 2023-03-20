import React from 'react'
import Intro from '../components/Intro'
import Routing from '../components/Routing'
import { query, onSnapshot, collection } from 'firebase/firestore'
import { db } from '../firebaseconfig'

const Home = () => {
    const [somePages, setSomePages] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        try {
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
        } catch {
            alert("Something is wrong...")
        }
    }, [])

    return (
        <>
            <Intro />
            {
                loading
                    ? <div className='w-full my-5 text-center'>
                        <h1 className='text-xl'>Loading...</h1>
                    </div>
                    : somePages.map((obj, i) => (
                        <Routing {...obj} key={i} />
                    ))
            }
        </>
    )
}

export default Home