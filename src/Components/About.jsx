import React from "react";
import image from "../images/bg2.jpg";

const description =
  "Full stack developer with expertise in Java, C++, DSA and MERN stack, seeking to kickstart a career journey in the world of coding.";

const skillsList = [
  "Full stack developer",
  "MERN stack developer",
  "Java developer",
  "C++ developer",
  "Frontend developer",
  "Backend developer",
];

const detailOrQuote =
  "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt="bg2" />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
