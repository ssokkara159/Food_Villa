import React from "react";
import ReactDOM from "react-dom/client";

//react element, jsx, variable of js
// const heading = <h1>hello</h1>;
const number = 1000;

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className=" logo-container">
        <img
          className="logo"
          alt=" "
          src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
        ></img>
      </div>

      <div className="search-bar-conatiner">
        <input
          className="search"
          type="search"
          placeholder="search here..."
        ></input>

        <button className="search-button">search</button>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
      <div className="icon-container">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"></img>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
