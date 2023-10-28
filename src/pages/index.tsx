import Hero from "@/components/home/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <section id="section-about" className="h-[67rem] bg-slate-600"></section>
      <section
        id="section-services"
        className="h-[67rem] bg-orange-200"
      ></section>
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
