import img1 from "../images/burger.jpg";
import img2 from "../images/cake.jpg";
import img3 from "../images/lasagna.jpg";

const Gallery = () => {
  const imgs = [img1, img2, img3, img3, img1, img2];
  return (
    <section id="gallery" className="py-5">
      <h1 className="text-center text-2xl md:text-3xl font-bold">
        Our <span className="text-amber-400">Gallery</span>
      </h1>
      <div className="py-5 flex justify-center flex-wrap">
        {imgs.map((element, index) => (
          <img key={index} src={element} className="w-56 h-44 m-3" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
