
function Menu() {

    const user = false

    return (
        <div className=" bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-1">
            {!user && <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer">LOGIN</h3>}
            {!user && <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer">REGISTER</h3>}
            {user && <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer">PROFILE</h3>}
            {user && <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer">CREATE</h3>}
            {user && <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer">MY BLOG</h3>}
            {user && <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer">LOGOUT</h3>}
        </div>
    )
}

export default Menu