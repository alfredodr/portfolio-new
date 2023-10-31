import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Quote from "@/components/home/Quote";
import Work from "@/components/home/Work";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Quote />
      <Work />
      <section
        id="section-portfolio"
        className="h-[67rem] bg-green-50"
      ></section>
      <section
        id="section-resume"
        className="h-[72.82rem] bg-pink-50"
      ></section>
      <section id="section-contact" className="h-[67rem] bg-blue-50"></section>
    </>
  );
};

export default Home;
