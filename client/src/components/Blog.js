import React, { useEffect, useState } from "react";
import "../blog.css";
import backgroundPhoto from "../images/personal_site_background.jpg";

const Blog = () => {
  const [text, setText] = useState("I am a ");
  const styles = {
    background: `linear-gradient(130deg, rgba(255, 255, 255) 40%, transparent 10%), linear-gradient(to bottom, rgba(0, 0, 0,0.8) 10%, transparent), url(${backgroundPhoto})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    opacity: 0.6,
    zIndex: -1,
  };

  const speed = 10000;
  const adjectives = ["Problem Solver", "Developer", "Engineer"];

  const changeText = () => {
    let newText;
    for (let i = 0; i < adjectives.length; i++) {
      newText = text + adjectives[i];
      setText(newText);
      setTimeout(changeText, speed);
    }
  };

  useEffect(() => {
    changeText();
  }, []);

  return (
    <>
      <div style={styles}>
        <h1 className="title__message">{text}</h1>
      </div>
    </>
  );
};

export default Blog;
