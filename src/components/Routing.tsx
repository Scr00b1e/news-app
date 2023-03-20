import { collection, onSnapshot, query } from 'firebase/firestore'
import React from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebaseconfig'
import Items from './Items'

type RoutingType = {
    text: string
    page: string
}

const Routing: React.FC<RoutingType> = ({ text, page }) => {
    const [items, setItems] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        try {
            const q = query(collection(db, `${page}`))
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let someItems: any = []
                querySnapshot.forEach((doc) => {
                    someItems.push({ ...doc.data(), id: doc.id })
                })
                setItems(someItems)
                setLoading(false)
            })
            return () => unsubscribe()
        } catch {
            alert("Something is wrong...")
        }
    }, [])

    return (
        <div className='w-full my-5'>
            <Link to={`/${page}`}>
                <p className='text-2xl font-bold'>{text}</p>
            </Link>
            <div className='mt-3 w-full flex justify-between items-center'>
                {
                    loading
                        ? <div className='w-full my-5 text-center'>
                            <h1 className='text-xl'>Loading...</h1>
                        </div>
                        : items.map((obj, i) => (
                            <Link to={`/${page}/${i}`}>
                                <Items {...obj} />
                            </Link>
                        ))
                }
            </div>
        </div>
    )
}

export default Routing