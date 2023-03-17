import { collection, onSnapshot, query } from 'firebase/firestore'
import React from 'react'
import PagesItem from '../components/PagesItem'
import { db } from '../firebaseconfig'

const Pages = () => {
    const [somePages, setSomePages] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        try {
            const q = query(collection(db, 'others'))
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
        <div className='w-full'>
            <h1 className='text-2xl font-bold text-center'>Welcome to Pages!</h1>
            {
                loading
                    ? <div className='w-full text-center'><h1 className='text-xl'>Loading...</h1></div>
                    : somePages.map((obj, i) => (
                        <PagesItem {...obj} key={i} />
                    ))
            }
        </div>
    )
}

export default Pages