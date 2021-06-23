import React from "react";
import "../blog.css";
import backgroundPhoto from "../images/personal_site_background.jpg";

const Blog = () => {
  const styles = {
    background: `linear-gradient(130deg, rgba(255, 255, 255) 40%, transparent 10%), linear-gradient(to bottom, rgba(0, 0, 0,0.8) 10%, transparent), url(${backgroundPhoto})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    opacity: 0.2,
  };

  return (
    <>
      <div style={styles}></div>
    </>
  );
};

export default Blog;
