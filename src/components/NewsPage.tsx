import React from 'react'
import { Link } from 'react-router-dom'
import Comments from './Comments'

const NewsPage = () => {
    return (
        <>
            <Link to={'/'}>
                <button className='py-1 px-2 text-sm bg-slate-400 rounded-lg text-start'>Back</button>
            </Link>
            <div className='w-full text-center'>
                <h1 className='text-3xl font-bold my-3'>Recent events...</h1>
                <img src="https://cdn.vox-cdn.com/thumbor/k2CRMllTGQxi9DX9_KVr-32rsmY=/0x0:1584x891/1200x800/filters:focal(841x310:1093x562)/cdn.vox-cdn.com/uploads/chorus_image/image/71950445/rick_and_morty_s4_image.0.png" alt="" className='w-full' />
                <p className='text-xl text-start my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ducimus sit omnis quisquam minus ullam voluptatum officiis culpa? Laboriosam pariatur ex corporis modi quaerat magni quo dolorum, odio ad praesentium!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ducimus sit omnis quisquam minus ullam voluptatum officiis culpa? Laboriosam pariatur ex corporis modi quaerat magni quo dolorum, odio ad praesentium!
                </p>
                <Comments />
            </div>
        </>
    )
}

export default NewsPage