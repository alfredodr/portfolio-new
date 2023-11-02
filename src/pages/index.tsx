import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Quote from "@/components/home/Quote";
import Work from "@/components/home/Work";
import Portfolio from "@/components/home/Portfolio";
import Resume from "@/components/home/Resume";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Quote />
      <Work />
      <Portfolio />
      <Resume />
      <section id="section-contact" className="h-[67rem] bg-blue-50"></section>
    </>
  );
};

export default Home;
