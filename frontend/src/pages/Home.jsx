import React, { useEffect, useState } from 'react';
import HomePost from '../components/HomePost';
import axios from 'axios';
import { Context, server } from '../main';
import { Link, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import { useContext } from 'react';


function Home() {
    const { search } = useLocation();

    const [posts, setPosts] = useState([" "]);
    const [noResults, setNoResults] = useState(false);
    const [loader, setLoader] = useState(false);
    const { isAuthenticated } = useContext(Context);


    useEffect(() => {
        const fetchPost = async () => {
            setLoader(true);
            try {
                const { data } = await axios.get(`${server}/api/v1/post/` + search, { withCredentials: true });

                setPosts(data.user);
                if (data.user.length === 0) { setNoResults(true) } else { setNoResults(false) }
                setLoader(false);
            } catch (error) {
                console.log(error);
                setLoader(false);
            }
        };

        fetchPost();
    }, [search]); // Empty dependency array means this useEffect runs only once, similar to componentDidMount

    // const posts =
    //     [
    //         { "id": 1, "title": "Jai Shree Ram", "desc": "This is belong to Ayodhya nagar Ram ki Janm Bhhomi Where Ram has born and bot up.", "image": "https://www.bhagwanwallpapers.com/uploads/2023/03/lord-rama-god-rama-bhagwan-ram-hd-image-pic-for-phone-mobile-wallpaper-ufoa-1680189562.jpg" },
    //         { "id": 2, "title": "Jai Shree Ram", "desc": "This is belong to Ayodhya nagar Ram ki Janm Bhhomi Where Ram has born and bot up.", "image": "https://www.bhagwanwallpapers.com/uploads/2023/03/lord-rama-god-rama-bhagwan-ram-hd-image-pic-for-phone-mobile-wallpaper-ufoa-1680189562.jpg" },
    //         { "id": 3, "title": "Jai Shree Ram", "desc": "This is belong to Ayodhya nagar Ram ki Janm Bhhomi Where Ram has born and bot up.", "image": "https://www.bhagwanwallpapers.com/uploads/2023/03/lord-rama-god-rama-bhagwan-ram-hd-image-pic-for-phone-mobile-wallpaper-ufoa-1680189562.jpg" }

    //     ]


    return (
        <div className=' px-0 md:px-[100px] min-h-[80vh]'>

            {
                loader ? <div className='h-[40vh] flex justify-center items-center'><Loader /></div> : !noResults ? posts.map((post) => (
                    <>
                        <Link key={post._id} to={isAuthenticated ? `/posts/post/${post._id}` : "/login"}>
                            <HomePost key={post._id} title={post.title} image={post.photo} desc={post.desc}
                                username={post.username}
                            />
                        </Link>
                    </>

                )) : <h3 className=' text-center font-extrabold mt-20'>No posts Available</h3>
            }
        </div>
    );
}

export default Home;
