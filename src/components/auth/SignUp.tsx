import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseconfig'

const SignUp = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [noFill, setNoFill] = React.useState(false)

    const signUp = async (e: React.FormEvent) => {
        e.preventDefault()
        if (email === '') {
            setNoFill(true)
        }
        if (password === '') {
            setNoFill(true)
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        }
        catch {
            setNoFill(true)
        }
    }

    return (
        <div className='w-full my-32 text-center'>
            <Link to={'/login'}>
                <button className='mb-4 py-1 px-2 text-sm bg-slate-400 rounded-lg'>Back</button>
            </Link>
            <div className='mb-7 py-10 flex items-center justify-center flex-col max-w-xl bg-slate-500 mx-auto'>
                <h1 className='text-white text-3xl uppercase font-semibold'>Sign Up</h1>
                {noFill && <h1 className='text-lg text-red-400 uppercase font-semibold'>Incorrect email or password</h1>}

                <form className='flex flex-col my-3' onSubmit={signUp}>
                    <input type="text" placeholder='E-mail' className='my-1 px-2'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' className='my-1 px-2'
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='w-full bg-sky-400 rounded-xl mt-3 py-1 text-slate-50 font-bold' type='submit'>Done</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp