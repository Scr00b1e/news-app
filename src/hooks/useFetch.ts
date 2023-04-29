import { query, onSnapshot, collection } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../firebaseconfig'

const useFetch = (paging: string) => {
    const [somePages, setSomePages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        try {
            const q = query(collection(db, paging))
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
            setError(true)
        }
    }, [])

    return { somePages, loading, error }
}

export default useFetch