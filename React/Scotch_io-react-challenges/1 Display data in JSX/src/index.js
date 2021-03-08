import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <img alt="" src={user.avatar} />

        <h3>
          <a href=" ">{user.name}</a>
        </h3>
        <p>
          <strong>Location</strong>
          {user.location}
          <br />
          <br />

          <strong>Eats</strong>
          {user.foodType}
          <br />
          <br />

          <strong>Age</strong>
          {user.age}
          <br />
          <br />

          <strong>Likes</strong>
          {user.likes}
          <br />
          <br />

          <strong>Twitter</strong>
          <a href=" ">@{user.twitterUsername}</a>
          <br />
          <br />
        </p>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
