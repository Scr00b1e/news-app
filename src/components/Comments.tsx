import { addDoc, collection, onSnapshot, query } from 'firebase/firestore'
import React from 'react'
import { auth, db } from '../firebaseconfig'
import CommentsItem from './CommentsItem'
import { onAuthStateChanged } from 'firebase/auth'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Comments = () => {
    const [input, setInput] = React.useState('')

    const [user, setUser] = React.useState({})

    onAuthStateChanged(auth, (currentUser: any) => {
        setUser(currentUser)
    })

    //add
    const onAdd = async (e: any) => {
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
    const { data, loading } = useFetch('comments')

    if (!user) {
        return (
            <div className='w-full flex items-center border-2 border-black p-3 my-3'>
                <Link to={'/login'}>
                    <h1 className='font-bold text-xl underline'>Sign up to be able to comment</h1>
                </Link>
            </div>
        )
    }

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
                        : data.map((obj: any, i) => (
                            <CommentsItem {...obj} key={i} />
                        ))
                }
            </div>
        </div>
    )
}

export default Comments