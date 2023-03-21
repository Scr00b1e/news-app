import React from 'react'
import Intro from '../components/Intro'
import Routing from '../components/Routing'
import { query, onSnapshot, collection } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../firebaseconfig'

const Home = () => {
    const [somePages, setSomePages] = useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        try {
            const q = query(collection(db, 'pages'))
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let pages: any = []
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
                    : somePages.map((obj: any, i) => (
                        <Routing {...obj} key={i} />
                    ))
            }
        </>
    )
}

export default Home