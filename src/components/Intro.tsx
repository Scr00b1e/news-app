import React from 'react'
import { routings } from '../data/routings'

type RoutingsType = {
    img: any
    text: string
}

const Intro = () => {
    const Routings = ({ img, text }: RoutingsType) => {
        return (
            <div className='w-full h-20 my-5 bg-center bg-no-repeat bg-cover rounded-lg'
                style={img}>
                <h1 className='mt-4 text-3xl font-bold text-center'>{text}</h1>
            </div>
        )
    }

    return (
        <div className='w-full py-3 px-5 bg-gray-800 rounded-2xl'>
            <div className='text-center text-slate-100'>
                <h1 className='text-3xl'>Welcome to News!</h1>
                <p className='text-xl'>Here you got</p>
            </div>
            <div className='h-15 max-w-20 items-center flex justify-center flex-wrap text-slate-200'>
                {
                    routings.map((obj, i) => (
                        <Routings {...obj} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default Intro