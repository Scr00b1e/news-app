import { addDoc, collection, onSnapshot, query } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebaseconfig'
import CommentsItem from './CommentsItem'

const Comments = () => {
    const [comments, setComments] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [input, setInput] = React.useState('')

    //add
    const onAdd = async (e: any) => {
        e.preventDefault()
        if (input === '') {
            alert('You havent wrote anything')
            return
        }
        await addDoc(collection(db, 'comments'), {
            text: input
        })
        setInput('')
    }

    //fetch
    React.useEffect(() => {
        try {
            const q = query(collection(db, 'comments'))
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let comments: any = []
                querySnapshot.forEach((doc) => {
                    comments.push({ ...doc.data(), id: doc.id })
                })
                setComments(comments)
                setLoading(false)
            })
            return () => unsubscribe()
        } catch {
            alert('Something is wrong')
        }
    })

    return (
        <div className='w-full'>
            <h1 className='text-xl font-bold'>Comments</h1>
            <input type="text" placeholder='Add a comment'
                className='w-full border-b-2 border-black text-xl focus:outline-none'
                value={input} onChange={(e) => setInput(e.target.value)} />
            <button className='px-3 text-xl font-bold uppercase bg-cyan-400 rounded-xl text-white
            hover:bg-cyan-600 duration-200 mt-3' onClick={onAdd}>Submit</button>
            <div className='my-5'>
                {
                    loading
                        ? <div className='w-full text-center'><h1 className='text-xl'>Loading...</h1></div>
                        : comments.map((obj: any, i) => (
                            <CommentsItem {...obj} key={i} />
                        ))
                }
            </div>
        </div>
    )
}

export default Comments