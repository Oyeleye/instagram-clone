import './App.css';
import Post from "./components/post/Post"

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage" 
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>Hello</h1>
      {<Post/>}
      {<Post/>}
      {<Post/>}
    </div>
  );
}

export default App;
