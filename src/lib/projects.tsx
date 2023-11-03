import img1 from "../../public/women-searching.jpg";
import img2 from "../../public/breaking-bad.jpg";
import img3 from "../../public/alfredo-headshot-portfolio.webp";
import img4 from "../../public/boat-fishing.jpg";
import img5 from "../../public/paper.jpg";
import img6 from "../../public/consulting.jpg";

const desc1 =
  "A landing page built using vanilla HTML, CSS, SASS, Javascript, and then put into production in WordPress. You may find the project on the client's website as a template on all the find an agent pages. It is a fully responsive page that improves user experience with a fresh design and easy-to-understand architecture. It shows client reviews google for each business location and a form to get a free quote and agent details. Feel free to navigate to the page using the button below";
const desc2 =
  "A react application that serves quotes from the famous Breaking Bad tv show. You can get a quote, see the recent quotes, archive quotes, and remove quotes.";
const desc3 =
  "A fully responsive portfolio website built using React, Typescript, Tailwind and the Next.js framework makes it fast, user-friendly, and SEO-friendly.";
const desc4 =
  "A full stack website showing real data from Amazon built using the MERN stack, so users can find a find high quality fishing shirts and then purchase on Amazon";
const desc5 =
  "A full stack app buit using the MERN stack to helps user manage their tasks. Each user registers by verifying their email, and they have access to manage their tasks. Admin users can manage other users";
const desc6 =
  "A conversion landing page built using React, Typescript and Next, to attract high quality leads to the business.";

export const projects = [
  {
    id: 2,
    name: "Find an Agent",
    img: img1,
    description: desc1,
    category: "HTML, CSS, JS, Wordpress",
  },
  {
    id: 6,
    name: "Breaking Bad Quotes",
    img: img2,
    description: desc2,
    category: "HTML, CSS, JS, React, Material UI",
  },
  {
    id: 5,
    name: "Portfolio Website",
    img: img3,
    description: desc3,
    category: "HTML, CSS, JS, React, Next.js",
  },
  {
    id: 1,
    name: "Fishing Shirts Website",
    img: img4,
    description: desc4,
    category:
      "HTML, CSS, JS, Next.js, Mongodb, Express.js, React.js, Node.js, Tailwindcss",
  },
  {
    id: 4,
    name: "Todo Tasker App",
    img: img5,
    description: desc5,
    category:
      "HTML, CSS, JS, Next.js, Mongodb, Express.js, React.js, Node.js, Tailwindcss",
  },
  {
    id: 3,
    name: "Conversionlab",
    img: img6,
    description: desc6,
    category: "HTML, CSS, JS, TS, React, Next.js, Tailwindcss",
  },
];
