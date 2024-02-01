import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import Menu from './Menu';

function Navbar() {

    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(!menu);
    }

    const user = true
    return (
        <div className=' flex items-center justify-between px-6 md:px-[200px] py-4 bg-orange-400'>
            <h1 className='text-lg md:text-xl font-extrabold'><Link to={'/'}>Bloging World.</Link></h1>

            <div className='flex items-center justify-center  mx-5 space-x-2'>
                <p><BsSearch /></p>
                <input className=' outline-none px-2 md:px-5' type='text' placeholder=' Search a Post.' />
            </div>

            <div className=' md:flex hidden items-center justify-center space-x-2 md:space-x-4'>
                {user ? <h3><Link to={'/create'}>WRITE</Link></h3> : <h3><Link to={'/login'}>LOGIN</Link></h3>}
                {user ? <div>
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

export default Navbar

// {
//     import React, { useState } from "react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className={`flex w-full items-center bg-white dark:bg-dark`}>
//       <div className="container">
//         <div className="relative -mx-4 flex items-center justify-between">
//           <div className="w-60 max-w-full px-4">
//             <a href="/#" className="block w-full py-5">
//               <img
//                 src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
//                 alt="logo"
//                 className="dark:hidden"
//               />
//               <img
//                 src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
//                 alt="logo"
//                 className="hidden dark:block"
//               />
//             </a>
//           </div>
//           <div className="flex w-full items-center justify-between px-4">
//             <div>
//               <button
//                 onClick={() => setOpen(!open)}
//                 id="navbarToggler"
//                 className={` ${
//                   open && "navbarTogglerActive"
//                 } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
//               >
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//               </button>
//               <nav
//                 // :className="!navbarOpen && 'hidden' "
//                 id="navbarCollapse"
//                 className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
//                   !open && "hidden"
//                 } `}
//               >
//                 <ul className="block lg:flex">
//                   <ListItem NavLink="/#">Home</ListItem>
//                   <ListItem NavLink="/#">Payment</ListItem>
//                   <ListItem NavLink="/#">About</ListItem>
//                   <ListItem NavLink="/#">Blog</ListItem>
//                 </ul>
//               </nav>
//             </div>
//             <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
//               <a
//                 href="/#"
//                 className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
//               >
//                 Sign in
//               </a>

//               <a
//                 href="/#"
//                 className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
//               >
//                 Sign Up
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// const ListItem = ({ children, NavLink }) => {
//   return (
//     <>
//       <li>
//         <a
//           href={NavLink}
//           className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
//         >
//           {children}
//         </a>
//       </li>
//     </>
//   );
// };

// }