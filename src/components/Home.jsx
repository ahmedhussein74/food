import burger from "../images/bigBurger.png";

const Home = () => {
  return (
    <section id="home" className="py-5 flex justify-around items-center">
      <div className="font-bold text-2xl md:text-4xl">
        <h2>GET</h2>
        <h2>
          Free <span className="text-amber-400">Food</span>
        </h2>
        <h2>in the Syria</h2>
      </div>
      <img src={burger} className="w-56 h-65 md:w-96 md:h-96" />
    </section>
  );
};

export default Home;
