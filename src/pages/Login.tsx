import React from 'react'

const Login = () => {
    return (
        <div className='w-full h-40 my-48'>
            <div className='mb-7 py-10 flex items-center justify-center flex-col max-w-xl bg-slate-500 mx-auto'>
                <h1 className='text-white text-3xl uppercase font-semibold'>Login</h1>
                <form action="" className='flex flex-col my-3'>
                    <input type="text" placeholder='E-mail' className='my-1 px-2' />
                    <input type="password" placeholder='Password' className='my-1 px-2' />
                    <button className='w-full bg-sky-400 rounded-xl mt-3 py-1 text-slate-50 font-bold'>Done</button>
                </form>
            </div>
        </div>
    )
}

export default Login