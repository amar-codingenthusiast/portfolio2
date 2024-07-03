import React from "react";
import image from "../images/bg3.jpg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "iNoteBook - A secured notebook on cloud",
    description:
      "iNoteBook is a secure cloud-based notebook using the MERN stack with Bcrypt.js for authentication and JWT for user verification. It offers flexible note creation with timestamps and a responsive design via Bootstrap and Font Awesome.",
    url: "https://amar-codingenthusiast.github.io/inotebook",
  },
  {
    title: "My Portflio",
    description:
      "My portfolio showcases my skills and projects using React.js, featuring responsive design, smooth scrolling, animated elements, and a dynamic navbar. It includes sections for introduction, skills, projects, achievements, education, and contact information.",
    url: "https://amar-codingenthusiast.github.io/portfolio",
  },
  {
    title: "News Monkey - A news app with Fetch-API",
    description:
      "News Monkey is a React.js-based app fetching top headlines from the GNews API, featuring nine categories, search, Infinite Scroll, and a Top Loading Bar. Bootstrap ensures a responsive design, making it accessible across all device sizes.",
    url: "https://amar-codingenthusiast.github.io/news-monkey3",
  },
  {
    title: "Currency Converter - A clone of Google Currency Converter",
    description:
      "Currency Converter uses HTML, CSS, JavaScript, and Fetch API for real-time exchange rates to convert over 150 currencies. It features a responsive design and has its source code available on GitHub.",
    url: "https://amar-codingenthusiast.github.io/currency-converter",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
