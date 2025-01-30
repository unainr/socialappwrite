import PostForm from '@/components/forms/PostForm'
import React from 'react'

const CreatePostComponent = () => {
  return (
    <>
    <div className='flex justify-center items-center flex-col'>
      <h1 className=' my-5 text-2xl font-bold '>
        Create Post
      </h1>
        
        
    <div  className='my-10 '>
            <PostForm />
        </div>
    </div>
    </>
  )
}

export default CreatePostComponent