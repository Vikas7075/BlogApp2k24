import React, { useContext, useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import Comment from '../components/Comment'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Context, server } from '../main'

function PostDetails() {


    const postId = useParams().id;
    const [post, setPost] = useState({});
    const { isAuthenticated } = useContext(Context);
    const fetchPost = async () => {
        try {
            const { data } = await axios.get(`${server}/api/v1/post/` + postId, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });

            console.log(data.user)
            setPost(data.user);

        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        fetchPost();
    }, [postId])
    return (
        <div>
            <div className='px-8 md:px-[200px] mt-8'>
                <div className=' flex justify-between items-center'>
                    <h1 className='text-2xl font-bold text-black md:text-3xl'>{post.title}</h1>


                    {
                        isAuthenticated?._id === post?.userId && <div className=' flex items-center justify-center space-x-2'>
                            <p><BiEdit /></p>
                            <p><MdDelete /></p>
                        </div>
                    }



                </div>
                <div className=' flex items-center justify-between mt-2  md:mt-4'>
                    <p>@{post.username}</p>
                    <div className=' flex space-x-2'>
                        <p>6 July 2024</p>


                    </div>
                </div>
                <img alt='' src={post.photo} />
                <p className=' mx-auto mt-8'> {post.desc}</p>
                <div className=' flex items-center mt-8 space-x-4 font-semibold'>
                    <p>Catogaries:</p>
                    <div className=' flex justify-center items-center space-x-2'>
                        {
                            post.categories?.map((c, i) => (
                                <div key={i} className=' bg-gray-300 rounded-lg  px-3 py-1'>{c}</div>
                            ))
                        }


                    </div>
                </div>
                <div className='flex flex-col mt-4'>
                    <h3 className=' mt-6 mb-4 font-semibold'>Comments : </h3>
                    <Comment />
                    <Comment />
                    <Comment />


                </div>
                {/* {write a comments} */}
                <div className=' w-full flex  flex-col mt-4 md:flex-row'>
                    <input type='text' placeholder='write a comments....' className=' md:w-[80%] outline-none px-4 py-2 mt-4 md:mt-0' />
                    <button className=' bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0'>Add Comments</button>
                </div>
            </div>
        </div>
    )
}

export default PostDetails