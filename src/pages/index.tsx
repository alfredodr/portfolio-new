import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Quote from "@/components/home/Quote";
import Work from "@/components/home/Work";
import Portfolio from "@/components/home/Portfolio";
import Resume from "@/components/home/Resume";
import Contact from "@/components/home/Contact";
import { NextSeo, WebPageJsonLd } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Alfredo J Dominguez - Web Developer"
        description="Alfredo J Dominguez Web Developer Portfolio"
        additionalMetaTags={[
          {
            property: "article:publisher",
            content: "https://alfredojdominguez.com/",
          },
          {
            property: "article:modified_time",
            content: "2021-01-16T04:25:05+00:00",
          },
        ]}
        openGraph={{
          type: "website",
          title: "Alfredo J Dominguez - Web Developer",
          description: "Alfredo J Dominguez Home Page",
          url: "https://alfredojdominguez.com/",
          images: [
            {
              url: "/alfredo-headshot-1.webp",
              width: 1920,
              height: 1080,
              alt: "Alfredo J Dominguez",
              type: "image/webp",
            },
          ],
        }}
      />
      <WebPageJsonLd
        name="Alfredo J Dominguez"
        description="Alfredo J Dominguez Web Developer Portfolio"
        id="https://alfredojdominguez.com/#corporation"
        publisher="https://alfredojdominguez.com/#organization"
      />
      <Hero />
      <About />
      <Quote />
      <Work />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
