import "./style.css";
import { useEffect, useState } from "react";
import slugify from "react-slugify";

// const getClassName = (level) => {
//   switch (level) {
//     case 2:
//       return "head2";
//     case 3:
//       return "head3";
//     case 4:
//       return "head4";
//     default:
//       return null;
//   }
// };

function TableOfContent() {
  const [headings, setHeadings] = useState([]);

  const getSlug = (content) =>
    slugify(content, {
      replacement: "-",
      remove: /[*+~.()?'"!:@/]/g,
      lower: true,
      strict: false,
      locale: "vi",
    });

  useEffect(() => {
    const tests = Array.from(document.querySelectorAll("h2, h3"));

    // console.log("Heading root elements", tests);

    tests.forEach((heading) => {
      console.log("Heading root elements 111111111", heading);

      const title = heading.textContent;
      const id = getSlug(title);
      heading.id = id;

      console.log("Title", title);
      console.log("id--", id);
    });

    // console.log("Get slug", getSlug("_2react@-la-@gi-1!!!"));

    const elements = Array.from(document.querySelectorAll("h2, h3")).map(
      (elem) => ({
        id: slugify(elem.innerText),
        text: elem.innerText,
        // level: Number(elem.nodeName.charAt(1)),
      })
    );
    setHeadings(elements);
  }, []);

  return (
    <nav>
      <ul>
        {headings.map((heading) => {
          console.log("Heading table", heading);
          return (
            <li key={heading.id}>
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
