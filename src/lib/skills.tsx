import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiRailway } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const materialUIIcon = (
  <svg
    fill="#000000"
    width="80px"
    height="80px"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Material-UI icon</title>
    <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z" />
  </svg>
);

export const skills = [
  { id: 1, name: "HTML", icon: <DiHtml5 size="5rem" />, description: "HTML" },
  { id: 2, name: "CSS", icon: <DiCss3 size="5rem" />, description: "CSS" },
  { id: 3, name: "SASS", icon: <DiSass size="5rem" />, description: "SASS" },
  {
    id: 4,
    name: "JAVASCRIPT",
    icon: <DiJavascript size="5rem" />,
    description: "JAVASCRIPT",
  },
  {
    id: 5,
    name: "REACT",
    icon: <DiReact size="5rem" />,
    description: "REACT",
  },
  {
    id: 6,
    name: "NEXT.JS",
    icon: <SiNextdotjs size="5rem" />,
    description: "NEXT.JS",
  },
  {
    id: 7,
    name: "MATERIAL UI",
    icon: materialUIIcon,
    description: "MATERIAL UI",
  },
  { id: 8, name: "GIT", icon: <DiGit size="5rem" />, description: "GIT" },
  {
    id: 9,
    name: "GITHUB",
    icon: <DiGithubBadge size="5rem" />,
    description: "GITHUB",
  },
  { id: 10, name: "NPM", icon: <DiNpm size="5rem" />, description: "NPM" },
  {
    id: 11,
    name: "WORDPRESS",
    icon: <DiWordpress size="5rem" />,
    description: "WORDPRESS",
  },
  {
    id: 12,
    name: "NODE",
    icon: <FaNodeJs size="5rem" />,
    description: "NODE",
  },
  {
    id: 13,
    name: "EXPRESS",
    icon: <SiExpress size="5rem" />,
    description: "EXPRESS",
  },
  {
    id: 14,
    name: "MONGODB",
    icon: <DiMongodb size="5rem" />,
    description: "MONGODB",
  },
  {
    id: 15,
    name: "TAILWIND",
    icon: <SiTailwindcss size="5rem" />,
    description: "TAILWIND",
  },
  {
    id: 16,
    name: "Vercel",
    icon: <SiVercel size="5rem" />,
    description: "Vercel",
  },
  {
    id: 17,
    name: "Railway",
    icon: <SiRailway size="5rem" />,
    description: "Railway",
  },
];
