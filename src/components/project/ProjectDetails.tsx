import Image from "next/image";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { Nunito } from "next/font/google";
import { LuExternalLink } from "react-icons/lu";
import { BiLogoTypescript } from "react-icons/bi";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "200",
});

const ProjectDetails = ({ data }: { data: any }) => {
  const { id, img, name, description, category, createdAt, updatedAt, slug } =
    data;

  let stacks = (id: number) => {
    if (id === 2) {
      return (
        <div
          className={`text-[#ffffff] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${nunito.variable} font-nunito`}
        >
          <span className="flex flex-col items-center">
            <DiHtml5 style={{ fontSize: 40 }} />
            <span>HTML</span>
          </span>
          <span className="flex flex-col items-center">
            <DiCss3 style={{ fontSize: 40 }} />
            <span>CSS</span>
          </span>
          <span className="flex flex-col items-center">
            <DiSass style={{ fontSize: 40 }} />
            <span>SASS</span>
          </span>
          <span className="flex flex-col items-center">
            <DiJavascript style={{ fontSize: 40 }} />
            <span>JavaScript</span>
          </span>
          <span className="flex flex-col items-center">
            <DiWordpress style={{ fontSize: 40 }} />
            <span>Wordpress</span>
          </span>
        </div>
      );
    } else if (id === 6) {
      return (
        <div
          className={`text-[#ffffff] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${nunito.variable} font-nunito`}
        >
          <span className="flex flex-col items-center">
            <DiHtml5 style={{ fontSize: 40 }} />
            <span>HTML</span>
          </span>
          <span className="flex flex-col items-center">
            <DiCss3 style={{ fontSize: 40 }} />
            <span>CSS</span>
          </span>
          <span className="flex flex-col items-center">
            <DiJavascript style={{ fontSize: 40 }} />
            <span>JavaScript</span>
          </span>
          <span className="flex flex-col items-center">
            <DiReact style={{ fontSize: 40 }} />
            <span>React</span>
          </span>
          <span className="flex flex-col items-center">
            <svg
              fill="#ffffff"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Material-UI icon</title>
              <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z" />
            </svg>
            <span>Material UI</span>
          </span>
        </div>
      );
    } else if (id === 5) {
      return (
        <div
          className={`text-[#ffffff] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${nunito.variable} font-nunito`}
        >
          <span className="flex flex-col items-center">
            <DiHtml5 style={{ fontSize: 40 }} />
            <span>HTML</span>
          </span>
          <span className="flex flex-col items-center">
            <DiCss3 style={{ fontSize: 40 }} />
            <span>CSS</span>
          </span>
          <span className="flex flex-col items-center">
            <DiJavascript style={{ fontSize: 40 }} />
            <span>JavaScript</span>
          </span>
          <span className="flex flex-col items-center">
            <BiLogoTypescript style={{ fontSize: 40 }} />
            <span>TypesCript</span>
          </span>
          <span className="flex flex-col items-center">
            <DiReact style={{ fontSize: 40 }} />
            <span>React</span>
          </span>
          <span className="flex flex-col items-center">
            <SiNextdotjs style={{ fontSize: 40 }} />
            <span>Next.js</span>
          </span>
          <span className="flex flex-col items-center">
            <SiTailwindcss style={{ fontSize: 40 }} />
            <span>Tailwindcss</span>
          </span>
        </div>
      );
    } else if (id === 1) {
      return (
        <div
          className={`text-[#ffffff] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${nunito.variable} font-nunito`}
        >
          <span className="flex flex-col items-center">
            <DiHtml5 style={{ fontSize: 40 }} />
            <span>HTML</span>
          </span>
          <span className="flex flex-col items-center">
            <DiCss3 style={{ fontSize: 40 }} />
            <span>CSS</span>
          </span>
          <span className="flex flex-col items-center">
            <DiJavascript style={{ fontSize: 40 }} />
            <span>JavaScript</span>
          </span>
          <span className="flex flex-col items-center">
            <DiReact style={{ fontSize: 40 }} />
            <span>React</span>
          </span>
          <span className="flex flex-col items-center">
            <SiNextdotjs style={{ fontSize: 40 }} />
            <span>Next.js</span>
          </span>
          <span className="flex flex-col items-center">
            <DiMongodb style={{ fontSize: 40 }} />
            <span>Mongodb</span>
          </span>
          <span className="flex flex-col items-center">
            <SiTailwindcss style={{ fontSize: 40 }} />
            <span>Tailwindcss</span>
          </span>
          <span className="flex flex-col items-center">
            <FaNodeJs style={{ fontSize: 40 }} />
            <span>Node.js</span>
          </span>
          <span className="flex flex-col items-center">
            <SiExpress style={{ fontSize: 40 }} />
            <span>Express.js</span>
          </span>
        </div>
      );
    } else if (id === 4) {
      return (
        <div
          className={`text-[#ffffff] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${nunito.variable} font-nunito`}
        >
          <span className="flex flex-col items-center">
            <DiHtml5 style={{ fontSize: 40 }} />
            <span>HTML</span>
          </span>
          <span className="flex flex-col items-center">
            <DiCss3 style={{ fontSize: 40 }} />
            <span>CSS</span>
          </span>
          <span className="flex flex-col items-center">
            <DiJavascript style={{ fontSize: 40 }} />
            <span>JavaScript</span>
          </span>
          <span className="flex flex-col items-center">
            <DiReact style={{ fontSize: 40 }} />
            <span>React</span>
          </span>
          <span className="flex flex-col items-center">
            <SiNextdotjs style={{ fontSize: 40 }} />
            <span>Next.js</span>
          </span>
          <span className="flex flex-col items-center">
            <DiMongodb style={{ fontSize: 40 }} />
            <span>Mongodb</span>
          </span>
          <span className="flex flex-col items-center">
            <SiTailwindcss style={{ fontSize: 40 }} />
            <span>Tailwindcss</span>
          </span>
          <span className="flex flex-col items-center">
            <FaNodeJs style={{ fontSize: 40 }} />
            <span>Node.js</span>
          </span>
          <span className="flex flex-col items-center">
            <SiExpress style={{ fontSize: 40 }} />
            <span>Express.js</span>
          </span>
        </div>
      );
    } else if (id === 3) {
      return (
        <div
          className={`text-[#ffffff] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${nunito.variable} font-nunito`}
        >
          <span className="flex flex-col items-center">
            <DiHtml5 style={{ fontSize: 40 }} />
            <span>HTML</span>
          </span>
          <span className="flex flex-col items-center">
            <DiCss3 style={{ fontSize: 40 }} />
            <span>CSS</span>
          </span>
          <span className="flex flex-col items-center">
            <DiJavascript style={{ fontSize: 40 }} />
            <span>JavaScript</span>
          </span>
          <span className="flex flex-col items-center">
            <BiLogoTypescript style={{ fontSize: 40 }} />
            <span>TypesCript</span>
          </span>
          <span className="flex flex-col items-center">
            <DiReact style={{ fontSize: 40 }} />
            <span>React</span>
          </span>
          <span className="flex flex-col items-center">
            <SiNextdotjs style={{ fontSize: 40 }} />
            <span>Next.js</span>
          </span>

          <span className="flex flex-col items-center">
            <SiTailwindcss style={{ fontSize: 40 }} />
            <span>Tailwindcss</span>
          </span>
        </div>
      );
    }
  };

  let externalLinks = (id: number) => {
    if (id === 2) {
      return (
        <>
          <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
            <div className="flex items-center">
              <span className="text-[#ffffff] text-3xl">
                <LuExternalLink />
              </span>
              <h3
                className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mx-2`}
              >
                Preview:
              </h3>
            </div>
            <span className="text-[#ffffff] text-3xl">
              <Link
                href={
                  "https://www.univistainsurance.com/location/univista-insurance-hialeah-fl-33010-2/"
                }
                passHref
                target="_blank"
                className={`text-[#cf1f1f] text-base ${nunito.variable} font-nunito font-normal `}
              >
                univistainsurance.com
              </Link>
            </span>
          </li>
        </>
      );
    } else if (id === 6) {
      return (
        <>
          <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
            <div className="flex items-center">
              <span className="text-[#ffffff] text-3xl">
                <AiFillGithub />
              </span>
              <h3
                className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mx-2`}
              >
                Github:
              </h3>
            </div>
            <span className="text-[#ffffff] text-3xl">
              <Link
                href={"https://github.com/alfredodr/breaking-bad-quotes"}
                passHref
                target="_blank"
                className={`text-[#cf1f1f] text-base ${nunito.variable} font-nunito font-normal `}
              >
                github.com/alfredodr/breaking-bad-quotes
              </Link>
            </span>
          </li>
          <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
            <div className="flex items-center">
              <span className="text-[#ffffff] text-3xl">
                <LuExternalLink />
              </span>
              <h3
                className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mx-2`}
              >
                Preview:
              </h3>
            </div>
            <span className="text-[#ffffff] text-3xl">
              <Link
                href={"https://breaking-bad-quotes-lime.vercel.app/"}
                passHref
                target="_blank"
                className={`text-[#cf1f1f] text-base ${nunito.variable} font-nunito font-normal `}
              >
                breaking-bad-quotes-lime.vercel.app
              </Link>
            </span>
          </li>
        </>
      );
    } else if (id === 5) {
      return (
        <>
          <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
            <div className="flex items-center">
              <span className="text-[#ffffff] text-3xl">
                <AiFillGithub />
              </span>
              <h3
                className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mx-2`}
              >
                Github:
              </h3>
            </div>
            <span className="text-[#ffffff] text-3xl">
              <Link
                href={"https://github.com/alfredodr/portfolio-new"}
                passHref
                target="_blank"
                className={`text-[#cf1f1f] text-base ${nunito.variable} font-nunito font-normal `}
              >
                github.com/alfredodr/portfolio-new
              </Link>
            </span>
          </li>
        </>
      );
    } else if (id === 1) {
      return (
        <>
          <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
            <div className="flex items-center">
              <span className="text-[#ffffff] text-3xl">
                <AiFillGithub />
              </span>
              <h3
                className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mx-2`}
              >
                Github:
              </h3>
            </div>
            <span className="text-[#ffffff] text-3xl">
              <Link
                href={"https://github.com/alfredodr/fishing-shirts"}
                passHref
                target="_blank"
                className={`text-[#cf1f1f] text-base ${nunito.variable} font-nunito font-normal `}
              >
                github.com/alfredodr/fishing-shirts
              </Link>
            </span>
          </li>
          <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
            <div className="flex items-center">
              <span className="text-[#ffffff] text-3xl">
                <LuExternalLink />
              </span>
              <h3
                className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mx-2`}
              >
                Preview:
              </h3>
            </div>
            <span className="text-[#ffffff] text-3xl">
              <Link
                href={"https://alfredojdominguez.com.com/"}
                passHref
                target="_blank"
                className={`text-[#cf1f1f] text-base ${nunito.variable} font-nunito font-normal `}
              >
                alfredojdominguez.com.com
              </Link>
            </span>
          </li>
        </>
      );
    } else if (id === 4) {
      return (
        <>
          <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
            <div className="flex items-center">
              <span className="text-[#ffffff] text-3xl">
                <AiFillGithub />
              </span>
              <h3
                className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mx-2`}
              >
                Github:
              </h3>
            </div>
            <span className="text-[#ffffff] text-3xl">
              <Link
                href={"https://github.com/alfredodr/todo-tasker"}
                passHref
                target="_blank"
                className={`text-[#cf1f1f] text-base ${nunito.variable} font-nunito font-normal `}
              >
                github.com/alfredodr/todo-tasker
              </Link>
            </span>
          </li>
          <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
            <div className="flex items-center">
              <span className="text-[#ffffff] text-3xl">
                <LuExternalLink />
              </span>
              <h3
                className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mx-2`}
              >
                Preview:
              </h3>
            </div>
            <span className="text-[#ffffff] text-3xl">
              <Link
                href={"https://todo-tasker.vercel.app/"}
                passHref
                target="_blank"
                className={`text-[#cf1f1f] text-base ${nunito.variable} font-nunito font-normal `}
              >
                todo-tasker.vercel.app
              </Link>
            </span>
          </li>
        </>
      );
    } else if (id === 3) {
      return (
        <>
          <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
            <div className="flex items-center">
              <span className="text-[#ffffff] text-3xl">
                <AiFillGithub />
              </span>
              <h3
                className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mx-2`}
              >
                Github:
              </h3>
            </div>
            <span className="text-[#ffffff] text-3xl">
              <Link
                href={
                  "https://github.com/alfredodr/conversion-lab-landing-page"
                }
                passHref
                target="_blank"
                className={`text-[#cf1f1f] text-base ${nunito.variable} font-nunito font-normal `}
              >
                github.com/alfredodr/conversion-lab-landing-page
              </Link>
            </span>
          </li>
          <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
            <div className="flex items-center">
              <span className="text-[#ffffff] text-3xl">
                <LuExternalLink />
              </span>
              <h3
                className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mx-2`}
              >
                Preview:
              </h3>
            </div>
            <span className="text-[#ffffff] text-3xl">
              <Link
                href={"https://conversion-lab-landing-page.vercel.app/"}
                passHref
                target="_blank"
                className={`text-[#cf1f1f] text-base ${nunito.variable} font-nunito font-normal `}
              >
                conversion-lab-landing-page.vercel.app
              </Link>
            </span>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <NextSeo
        title="Alfredo J Dominguez - Web Developer"
        description={`${description}`}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
        openGraph={{
          type: "article",
          article: {
            publishedTime: `${createdAt}`,
            modifiedTime: `${updatedAt}`,
          },
          title: `${name} - Sun Protective - Fishing Shirts Now`,
          description: `${description}`,
          url: `https://alfredojdominguez.com.com/${slug}/`,
          images: [
            {
              url: img,
              width: 500,
              height: 500,
              alt: `${name}`,
              type: "image/jpeg",
            },
          ],
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Home",
            item: "https://alfredojdominguez.com/",
          },
          {
            position: 2,
            name: "Store",
            item: `https://alfredojdominguez.com/${slug}/`,
          },
        ]}
      />
      <div className="max-w-[76rem] min-h-screen flex flex-col justify-center items-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-40">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={img}
              alt="Project Image"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl text-[#ffffff] font-bold mb-6">{name}</h1>
            <p
              className={`${nunito.variable} font-nunito font-normal text-base sm:text-lg text-[#aaaaaa] mb-5`}
            >
              {description}
            </p>
            <ul>
              <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
                <div className="flex items-center">
                  <span className="text-[#ffffff] text-3xl">
                    <BiCategory />
                  </span>
                  <h3
                    className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mr-10 ml-2`}
                  >
                    Category:
                  </h3>
                </div>

                <p className={`text-[#ffffff] ${nunito.variable} font-nunito`}>
                  {category}
                </p>
              </li>
              <li className="flex items-center justify-between text-[#aaaaaa] border border-[#ffffff1a] border-t-transparent border-l-transparent border-r-transparent py-2">
                <div className="flex items-center">
                  <span className="text-[#ffffff] text-3xl">
                    <FaLaptopCode />
                  </span>
                  <h3
                    className={`text-[#aaaaaa] text-base ${nunito.variable} font-nunito font-normal mx-2`}
                  >
                    Stacks Used:
                  </h3>
                </div>

                {stacks(id)}
              </li>
              {externalLinks(id)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
