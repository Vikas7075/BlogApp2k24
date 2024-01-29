import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import Comment from '../components/Comment'

function PostDetails() {
    return (
        <div>
            <div className='px-8 md:px-[200px] mt-8'>
                <div className=' flex justify-between items-center'>
                    <h1 className='text-2xl font-bold text-black md:text-3xl'>CXcon: Experience Transformation</h1>
                    <div className=' flex items-center justify-center space-x-2'>
                        <p><BiEdit /></p>
                        <p><MdDelete /></p>
                    </div>
                </div>
                <div className=' flex items-center justify-between mt-2  md:mt-4'>
                    <p>@vikaskumar</p>
                    <div className=' flex space-x-2'>
                        <p>12/03/2023</p>
                        <p>12:00 AM</p>
                    </div>
                </div>
                <img alt='' src='https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW' />
                <p className=' mx-auto mt-8'>Where does it come from?
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <div className=' flex items-center mt-8 space-x-4 font-semibold'>
                    <p>Catogaries:</p>
                    <div className=' flex justify-center items-center space-x-2'>
                        <div className=' bg-gray-300 rounded-lg  px-3 py-1'>Tech</div>
                        <div className=' bg-gray-300 rounded-lg  px-3 py-1'>Science</div>
                        <div className=' bg-gray-300 rounded-lg  px-3 py-1'>A I</div>
                        <div className=' bg-gray-300 rounded-lg  px-3 py-1'>All.</div>
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