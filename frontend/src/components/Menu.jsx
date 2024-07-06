import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

function Menu() {
    const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);

    const logoutHandler = async () => {
        setLoading(true);
        try {
            const { data } = await axios.post(`${server}/api/v1/auth/logout`, null, { withCredentials: true });
            console.log(data.message);
            toast.success(data.message);
            setIsAuthenticated(false);
        } catch (error) {
            toast.error(error.response?.data.message || 'Logout failed');
            console.error(error.response?.data.message || 'Logout failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-1">
            {!isAuthenticated && <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={'/register'}>REGISTER</Link></h3>}
            {isAuthenticated && <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={'/profile'}>PROFILE</Link></h3>}
            {isAuthenticated && <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={'/write'}>CREATE</Link></h3>}
            {isAuthenticated && <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={'/'}>MY BLOG</Link></h3>}
            {isAuthenticated ? (
                <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer"><Link onClick={logoutHandler} to={'/'}>LOGOUT</Link></h3>
            ) : (
                <h3 className=" text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={'/login'}>LOGIN</Link></h3>
            )}
        </div>
    );
}

export default Menu;
