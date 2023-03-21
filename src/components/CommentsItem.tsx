import React from 'react'

type CommentsType = {
    text: string
}

const CommentsItem: React.FC<CommentsType> = ({ text }) => {
    return (
        <div className='w-full flex items-center border-2 border-black p-3 my-3'>
            <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt=""
                className='w-10 h-10 border-2 border-black rounded-3xl p-1' />
            <p className='ml-3'>{text}</p>
        </div>
    )
}

export default CommentsItem