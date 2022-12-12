import "./App.css";
import FetchPosts from "./components/FetchPosts";
import React, { useState, useEffect } from "react";
import { PostsView } from "./components/PostsView";
import { RegisterForm } from "./components/Register";
import { fetchMe } from "./api/auth";
import { LogIn } from "./components/LogInOut";
import { UserInfo } from "./components/UserInfo";
import { NewPostForm } from "./components/NewPost";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState({});
  const [post, setPost] = useState([]);

  useEffect(() => {
    FetchPosts(setPost)

  }, []);

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUserData(data);
      console.log(userData)
    };
    if (token) {
      getMe();
    }
  }, [token]);
  return (<div className="App">
    <Nav userData={userData}></Nav>
      <Routes>
        <Route path="/register" element={<RegisterForm setToken={setToken} />}></Route>
        <Route path="/login" element={<LogIn setToken={setToken} />}></Route>
        <Route path="/" element={<PostsView posts={post} token={token}/>}></Route>
        <Route path="/userinfo" element={<UserInfo userData={userData} token={token} />}></Route>
        <Route path="/createpost" element={<NewPostForm token={token} />}></Route>
      </Routes>
  </div>
  )
}



export default App;