import React from "react";
import "../about.css";
const About = () => {
  return (
    <>
      <div className="about-section">
        <h1 id="section-title">Hi, I'm Liam Richens</h1>
        <div className="about">
          <div className="about-text">
            <h2>Bio</h2>
            <p>
              My name is Liam and I am a Software Developer. I began my journey
              into software development while undertaking my master’s degree in
              Aerospace Engineering. I decided to learn python for academic
              projects which led me to create small personal projects to help my
              work flow.
            </p>
            <p>
              From this initial exposure to programming I was hooked and so I
              began to learn JavaScript to build on the foundation i had learnt
              with Python and begin building more ambitious web applications
              with frameworks and libraries such as Express and React.
            </p>
            <p>
              I found a sincere passion for software development and what it
              means to be a software engineer. Although I am at the beginning of
              my Software Development Journey, I am fully committed to being a
              great engineer.
            </p>
            <p>
              Feel free to check out my projects and contact me if you have any
              questions.
            </p>
          </div>
          <div className="about-img"></div>
        </div>
        <div className="timeline about">
          <h2>Timeline</h2>
        </div>
        <div className="skills about">
          <h2>Software Knowledge</h2>
        </div>
        <div className="interests about">
          <h2>Other Interests</h2>
          <p>
            I really enjoy learning about space which motivated me to take my
            masters in Aerospace. I've always enjoyed learning how things work
            and being massively in to science fiction from a young age prompted
            the curiosity to learn more about space, specifically how travel in
            space.
          </p>
          <p>
            Outside of software development I also enjoy Weight lifting, Rugby,
            Table Tennis and Film. I also work on home automation projects with
            my Raspberry Pi that can be found on my github.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
