import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';
import toast, { Toaster } from 'react-hot-toast';
import { useContext, useEffect } from 'react';
import { Context, server } from './main';
import axios from 'axios';
function App() {

  const { setUser, user, setIsAuthenticated, isAuthenticated, setLoading } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${server}/api/v1/user/profile`, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        });
        console.log(data.user);
        setUser(data.user);
        toast.success("data.success");
        setIsAuthenticated(true);
      } catch (error) {
        toast.error("error.response.data.message");
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }
    if (isAuthenticated) {
      fetchData();
    }

  }, [setUser, setIsAuthenticated, setLoading]);
  console.log(user);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/write' element={<CreatePost />} />
          <Route exact path='/posts/post/:id' element={<PostDetails />} />
          <Route exact path='/edit/:id' element={<EditPost />} />
          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </div>
  )
}

export default App
