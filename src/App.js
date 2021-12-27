import './App.css';
import Post from "./components/post/Post";
import { useState, useEffect } from 'react';
import nakel from "../src/images/nakel.png";
import neks from "../src/images/neks.png";
import wiz from "../src/images/wiz.png";

function App() {
  const [posts, setPosts] = useState([
    {
      username:"Oxy", 
      imageUrl:"https://img.huffingtonpost.com/asset/5d037306240000300f91f7b1.jpeg?ops=1778_1000", 
      caption: ": My first caption"
    },
    {
      username:"Oxy", 
      imageUrl:"https://img.huffingtonpost.com/asset/5d037306240000300f91f7b1.jpeg?ops=1778_1000", 
      caption: ": My first caption"
    }
  ]);

  useEffect(() => {

  }, []);
  
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage" 
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
        />
      </div>
      <h1>Hello</h1>

      {
      posts.map(post=>(
        <Post username={post.username} imageUrl={post.imageUrl} caption={post.caption}/>
        ))
      }
      <Post username="Bj Nakel" imageUrl={nakel} caption=": Welcome here, guys"/>
      <Post username="Anampopiyu" imageUrl={wiz} caption=": Thanks, my bro!"/>
      <Post username="Neks" imageUrl={neks} caption=": Glad to be here"/>
    </div>
  );
}

export default App;
