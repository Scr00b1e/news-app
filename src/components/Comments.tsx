import React from 'react'
import CommentsItem from './CommentsItem'

const Comments = () => {
    return (
        <div className='w-full'>
            <h1 className='text-xl font-bold'>Comments</h1>
            <input type="text" placeholder='Add a comment'
                className='w-full border-b-2 border-black text-xl focus:outline-none' />
            <button className='px-3 text-xl font-bold uppercase bg-cyan-400 rounded-xl text-white
            hover:bg-cyan-600 duration-200 mt-3'>Submit</button>
            <div className='my-5'>
                <CommentsItem />
                <CommentsItem />
                <CommentsItem />
                <CommentsItem />
            </div>
        </div>
    )
}

export default Comments