import { collection, onSnapshot, query } from 'firebase/firestore'
import React from 'react'
import { Link } from 'react-router-dom'
import PagesItem from '../components/PagesItem'
import { db } from '../firebaseconfig'

interface PagesProps {
    page: string
}

const Pages: React.FC<PagesProps> = ({ page }) => {
    const [somePages, setSomePages] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        try {
            const q = query(collection(db, `${page}`))
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
        <div className='w-full'>
            <Link to={'/'}>
                <button className='py-1 px-2 text-sm bg-slate-400 rounded-lg text-start'>Back</button>
            </Link>
            <h1 className='text-2xl font-bold text-center'>Welcome to {page}!</h1>
            {
                loading
                    ? <div className='w-full text-center'><h1 className='text-xl'>Loading...</h1></div>
                    : somePages.map((obj, i) => (
                        <PagesItem {...obj} key={i} page={page} i={i} />
                    ))
            }
        </div>
    )
}

export default Pages