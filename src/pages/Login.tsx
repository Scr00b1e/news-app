import { onAuthStateChanged, signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import { auth } from '../firebaseconfig'

type LoginProp = {
    user: any
}

const Login: React.FC<LoginProp> = ({ user }) => {
    const onLogout = async () => {
        await signOut(auth)
    }

    const Account = () => {
        return (
            <>
                <Link to={'/'}>
                    <button className='py-1 px-2 text-sm bg-slate-400 rounded-lg'>Back</button>
                </Link>
                <h1 className='text-2xl font-bold my-1'>Welcome! {user?.email}</h1>
                <p className='text-xl text-gray-700 mb-3'>Now you can comment</p>
                <button className='text-white py-1 px-2 text-sm bg-orange-400 rounded-lg text-center'
                    onClick={onLogout}>Logout</button>
            </>
        )
    }

    return (
        <div className='w-full h-40 my-48 text-center'>
            {user
                ? <Account />
                : <SignIn />
            }
        </div>
    )
}

export default Login