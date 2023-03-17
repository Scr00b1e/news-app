import React from 'react'

type ItemsProps = {
    title: string
    description: string
}

const Items: React.FC<ItemsProps> = ({ title, description }) => {
    return (
        <div className='w-full mx-3 cursor-pointer'>
            <img src="https://blog.openreplay.com/images/how-to-build-your-react-app-using-vite/images/hero.png" alt=""
                className='w-full h-auto' />
            <div className='mt-1'>
                <h1 className='text-xl font-bold'>{title}</h1>
                <p className='text-base'>{description}</p>
            </div>
        </div>
    )
}

export default Items