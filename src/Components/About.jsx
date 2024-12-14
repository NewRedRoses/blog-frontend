import "../Styles/about.css";
import { Helmet } from "react-helmet";
export default function About() {
  const links = [
    {
      label: "Email:",
      url: "mailto:mark@lutheria.blog",
      word: "mark@lutheria.blog",
    },
    {
      label: "Github:",
      url: "https://github.com/NewRedRoses",
      word: "NewRedRoses",
    },
    {
      label: "Photography (IG):",
      url: "https://www.instagram.com/smoochychasm/",
      word: "SmoochyChasm",
    },
  ];
  return (
    <div className="content">
      <Helmet>
        <title>About - Lutheria</title>
      </Helmet>
      <h1>About</h1>
      <p>
        Hello! My name&apos;s <b>Mark</b> and this is a simple blog site where I
        plan on sharing my thoughts about things I find interesting.
      </p>
      <p>
        Initially this project came about practicing REST API stuff but I plan
        on growing it more into a fleshed out blog.
      </p>
      <div className="contact-container">
        <h1>Reaching Out</h1>
        <p>Below are some ways you can get in touch with me.</p>
        <ul className="contact-list">
          {links.map((link, index) => {
            return (
              <li className="contact-list-item" key={index}>
                {link.label}
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.word}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
