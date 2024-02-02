import React, { useEffect, useState } from 'react';
import HomePost from '../components/HomePost';
import axios from 'axios';
import { server } from '../main';

function Home() {
    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
        try {
            const { data } = await axios.get(`${server}/api/v1/post/`, { withCredentials: true });
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div>
            <HomePost />
            {Array.isArray(posts) && posts.length > 0 && (
                <ul>
                    {posts.map((post) => (
                        <li key={post._id}>{post.title}</li>
                    ))}
                </ul>
            )}

        </div>
    );
}

export default Home;
