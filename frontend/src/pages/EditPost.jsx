import React, { useState } from 'react';
import { ImCross } from 'react-icons/im'

function EditPost() {

    const [cat, setCat] = useState("");
    const [cats, setCats] = useState([]);

    const deleteCategory = (i) => {
        let updatedCats = [...cats]
        updatedCats.splice(i)
        setCats(updatedCats)
    }

    const addCategory = () => {
        let updatedCats = [...cats]
        updatedCats.push(cat)
        setCat("")
        setCats(updatedCats)
    }

    return (
        <div>
            <div className='px-6 md:px-[200px] mt-8'>
                <h1 className="font-bold md:text-2xl text-xl mb-4">Create a post</h1>
                <div>
                    <div className='px-6 md:px-[200px] mt-8'>
                        <h1 className="font-bold md:text-2xl text-xl mb-4">Upadate a post</h1>
                        <form className="w-full flex flex-col space-y-4 md:space-y-8">
                            <input placeholder='Enter post Title' type="text" className='px-4 py-2 outline-none' />
                            <input placeholder='Enter image' type="file" className='px-4' />
                            <div className="flex flex-col">
                                <div className="flex items-center space-x-4 md:space-x-8">
                                    <input value={cat} onChange={(e) => setCat(e.target.value)} placeholder='Enter post category' type="text" className='px-4 py-2 outline-none' />
                                    <div onClick={addCategory} className="bg-black text-white px-4 py-2 font-semibold cursor-pointer" >Add</div>
                                </div>
                                {/* {categories} */}
                                <div className=' flex px-4 mt-3'>
                                    {cats?.map((c, i) => (
                                        <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
                                            <p>{c}</p>
                                            <p onClick={() => deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross /></p>
                                        </div>
                                    ))}



                                </div>

                            </div>
                            <textarea rows={15} cols={30} placeholder='Enter post description' className='px-4 py-2 outline-none' />
                            <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg" >Upadate</button>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default EditPost