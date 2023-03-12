import React from 'react'

const Items: React.FC = () => {
    return (
        <div className='w-full mx-3 cursor-pointer'>
            <img src="https://blog.openreplay.com/images/how-to-build-your-react-app-using-vite/images/hero.png" alt=""
                className='w-full h-auto' />
            <div className='mt-1'>
                <h1 className='text-xl font-bold'>Hey</h1>
                <p className='text-base'>some stuff some stuff some stuff some stuff some stuff some stuff</p>
            </div>
        </div>
    )
}

export default Items