import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react'
// Main
import './App.css';
import MainHeader from './components/common/MainHeader'
import MainFooter from './components/common/MainFooter'
// Auth Pages
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Logout from './pages/auth/Logout'
// Post Pages
import Feed from './pages/posts/Feed'
import PostDetails from './pages/posts/PostDetails'
// Post Components
import Posts from './components/posts/Posts'
// Contexts
import { UserAuthContext } from './contexts/auth/UserAuthContext'
import { PostsContext } from './contexts/posts/PostsContext'

function App() {
  // Set posts
  const [posts, setPosts] = useState([]);
  // Create user email state for context
  const [userEmail, setUserEmail] = useState('');
  // Set the value of the user email state
  if (localStorage.getItem('token') === null) {
    window.location.replace('http://localhost:3000/login');
  } else {
    fetch('http://127.0.0.1:8000/api/v1/accounts/auth/user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUserEmail(data.email);
      });
  }
  // End get user email
  
  return (
    <BrowserRouter>
          <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />

      <link href=" https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.min.css " rel="stylesheet"></link>

      <div className="wrapper"> 
        <UserAuthContext.Provider value={{userEmail,setUserEmail}} >
        <PostsContext.Provider value={{posts, setPosts}} >
          <MainHeader/> 
          <Routes>
            <Route path='/login' element={<Login/>} exact />
            <Route path='/signup' element={<Signup/>} exact />
            <Route path='/logout' element={<Logout/>} exact />
            <Route path="/" element={<Feed />} exact/>
            <Route path='/posts' element={<Posts/>} />
            <Route path='/post/:postId' element={<PostDetails/>} />
          </Routes>
          <MainFooter/> 
        </PostsContext.Provider>
        </UserAuthContext.Provider>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>

    </BrowserRouter>
  );
}

export default App;
