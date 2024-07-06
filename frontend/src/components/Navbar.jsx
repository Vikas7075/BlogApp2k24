import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import Menu from './Menu';
import { Context } from '../main';

function Navbar() {

    const [menu, setMenu] = useState(false);
    const [prompt, setPrompt] = useState("");
    const { isAuthenticated } = useContext(Context);

    const navigate = useNavigate()

    const showMenu = () => {
        setMenu(!menu);
    }


    return (
        <div className=' flex items-center justify-between px-6 md:px-[200px] py-4 bg-orange-400'>
            <h1 className='text-lg md:text-xl font-extrabold'><Link to={'/'}>Bloging World.</Link></h1>

            <div className='flex items-center justify-center  mx-5 space-x-2'>
                <p onClick={() => navigate(prompt ? "?search=" + prompt : navigate('/'))} className=' cursor-pointer'><BsSearch /></p>
                <input onChange={(e) => { setPrompt(e.target.value) }} className=' outline-none px-2 md:px-5' type='text' placeholder=' Search a Post.' />
            </div>

            <div className=' md:flex hidden items-center justify-center space-x-2 md:space-x-4'>
                {isAuthenticated ? <h3><Link to={'/create'}>WRITE</Link></h3> : <h3><Link to={'/login'}>LOGIN</Link></h3>}
                {isAuthenticated ? <div>
                    <p onClick={showMenu} className='cursor-pointer relative'><FaBars /></p>
                    {menu && <Menu />}

                </div> : <h3><Link to={'/register'}>REGISTER</Link></h3>}
            </div>
            <div onClick={showMenu} className=' md:hidden text-lg hover:text-blue-700'>
                <p className=' cursor-pointer relative'><FaBars /></p>
                {menu && <Menu />}
            </div>
        </div>
    )
}

export default Navbar;