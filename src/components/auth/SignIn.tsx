import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseconfig'

const SignIn = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [noFill, setNoFill] = React.useState(false)

    const signIn = (e: React.FormEvent) => {
        if (email === '') {
            setNoFill(true)
        }
        if (password === '') {
            setNoFill(true)
        }
        e.preventDefault()
        try {
            const user = signInWithEmailAndPassword(auth, email, password)
        } catch {
            setNoFill(true)
        }
    }

    return (
        <div className='mb-7 py-10 flex items-center justify-center flex-col max-w-xl bg-slate-500 mx-auto'>
            <h1 className='text-white text-3xl uppercase font-semibold'>Sign In</h1>
            {noFill && <h1 className='text-lg text-red-400 uppercase font-semibold'>Incorrect email or password</h1>}
            <form className='flex flex-col my-3' onSubmit={signIn}>
                <input type="text" placeholder='E-mail' className='my-1 px-2'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' className='my-1 px-2'
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='w-full bg-sky-400 rounded-xl mt-3 py-1 text-slate-50 font-bold' type='submit'>Done</button>
            </form>
            <h1 className='text-white text-xl font-semibold'>Don't have an account yet?</h1>
            <button className='rounded-xl bg-orange-300 mt-2 py-1 px-3 text-white font-bold'>Sign Up</button>
        </div>
    )
}

export default SignIn