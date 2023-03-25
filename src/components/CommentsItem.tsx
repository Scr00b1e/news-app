import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebaseconfig'

type CommentsType = {
    text: string
}

const CommentsItem: React.FC<CommentsType> = ({ text }) => {
    const [user, setUser] = React.useState({})

    onAuthStateChanged(auth, (currentUser: any) => {
        setUser(currentUser)
    })

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
        <div className='w-full flex items-center border-2 border-black p-3 my-3'>
            <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt=""
                className='w-10 h-10 border-2 border-black rounded-3xl p-1' />
            <div className='text-start ml-3'>
                <h1 className='font-bold text-lg'>{user?.email}</h1>
                <p className='text-xl'>{text}</p>
            </div>
        </div>
    )
}

export default CommentsItem