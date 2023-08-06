import img1 from "../images/burger.jpg";
import img2 from "../images/cake.jpg";
import img3 from "../images/lasagna.jpg";

const Menu = () => {
  const imgs = [img1, img2, img3, img3, img1, img2];
  return (
    <section id="menu" className="py-5">
      <h1 className="text-center text-2xl md:text-3xl font-bold">
        Our <span className="text-amber-400">menu</span>
      </h1>
      <div className="py-5 flex justify-center flex-wrap">
        {imgs.map((element, index) => (
          <div
            key={index}
            className="w-56 text-center m-3 pb-3 border-2 border-gray-300 rounded shadow-lg"
          >
            <img
              src={element}
              className="w-full h-36"
            />
            <h2 className="font-bold text-xl text-amber-400 my-3">Burger</h2>
            <p className="text-gray-500 mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-amber-400"></i>
            </p>
            <button className="btn bg-slate-900 text-amber-400 px-3 py-1 mt-2 rounded">Order now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
