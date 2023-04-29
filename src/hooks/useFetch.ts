import { query, onSnapshot, collection } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../firebaseconfig'

const useFetch = (paging: string) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        try {
            const q = query(collection(db, paging))
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let datas: any = []
                querySnapshot.forEach((doc) => {
                    datas.push({ ...doc.data(), id: doc.id })
                })
                setData(datas)
                setLoading(false)
            })
            return () => unsubscribe()
        } catch {
            alert("Something is wrong...")
            setError(true)
        }
    }, [])

    return { data, loading, error }
}

export default useFetch