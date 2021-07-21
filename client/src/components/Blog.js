import React, { useEffect, useState } from "react";
import "../blog.css";
import backgroundPhoto from "../images/personal_site_background.jpg";

const Blog = () => {
  const [typedTextSpan, setTypedText] = useState("");
  const [cursor, setCursor] = useState(false);
  const styles = {
    background: `linear-gradient(130deg, rgba(255, 255, 255) 40%, transparent 10%), linear-gradient(to bottom, rgba(0, 0, 0,0.8) 10%, transparent), url(${backgroundPhoto})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    opacity: 0.6,
    zIndex: -1,
  };
  const textArray = [" Problem Solver", " Developer", "n Engineer"];
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

  useEffect(() => {
    setTimeout(type, 2000);
  }, []);

  return (
    <>
      <div style={styles}>
        <h1 className="title__message">
          I am a<span className="typed-text">{typedTextSpan}</span>
          <span className={cursor ? "cursor typing" : "cursor"}>&nbsp;</span>
        </h1>
      </div>
    </>
  );
};

export default Blog;
