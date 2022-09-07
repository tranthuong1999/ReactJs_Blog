import "./style.css";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const getClassName = (level) => {
  switch (level) {
    case 2:
      return "head2";
    case 3:
      return "head3";
    case 4:
      return "head4";
    default:
      return null;
  }
};

function TableOfContent() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const tests = Array.from(document.querySelectorAll("h2, h3, h4"));
    console.log("Heading root elements", tests);

    const elements = Array.from(document.querySelectorAll("h2, h3, h4")).map(
      (elem) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
      })
    );
    setHeadings(elements);
    // }
  }, []);

  return (
    <nav>
      <ul>
        {headings.map((heading) => {
          console.log("Heading table", heading);

          return (
            <li key={heading.id} className={getClassName(heading.level)}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${heading.id}`).scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default TableOfContent;
