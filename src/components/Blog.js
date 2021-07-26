import React, { useEffect, useState } from "react";
import "../blog.css";
import backgroundPhoto from "../images/personal_site_background.jpg";

const Blog = () => {
  const [typedTextSpan, setTypedText] = useState("");
  const [cursor, setCursor] = useState(false);
  const styles = {
    background: ` linear-gradient(to top, rgba(0, 0, 0,0.9) 20%, transparent),url(${backgroundPhoto})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    overflow: "hidden",
  };
  const textArray = [
    "Software Developer.",
    "Problem Solver.",
    "Programmer.",
    "Tech Enthusiast.",
  ];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 1000;
  let textArrayIndex = 0;
  let charIndex = 0;
  let textSpanCopy = typedTextSpan;

  const type = () => {
    if (charIndex < textArray[textArrayIndex].length) {
      textSpanCopy += textArray[textArrayIndex].charAt(charIndex);
      setCursor(true);
      setTypedText(textSpanCopy);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  };

  const erase = () => {
    if (charIndex > 0) {
      setTypedText(textArray[textArrayIndex].substring(0, charIndex - 1));
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      textSpanCopy = "";
      setCursor(false);
      setTimeout(type, typingDelay + 1100);
    }
  };
  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    setTimeout(type, 2000);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div style={styles}>
        <h1 className="title__message">
          I am a <span className="typed-text">{typedTextSpan}</span>
          <span
            className={cursor ? "cursor typing" : "cursor"}
            style={{ fontStyle: "italic" }}
          >
            &nbsp;
          </span>
        </h1>
        <div className="welcome">
          <h1>Hi there, I'm Liam!</h1>
          <p>
            I am a Software Developer with passion for learning and finding
            solutions to challenging problems. Checkout my
            <span>
              <a href="/projects">Portfolio</a>
            </span>{" "}
            to see what I have been working on or visit my
            <span>
              <a href="https://github.com/Li-Ri">Github</a>
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
