import { useRef, useState } from "react";
import ProductCard from "./productcard";

// IMAGES
import windbreaker from "@/Assets/home/Shop/Shop1.png";
import hoodieBlue from "@/Assets/home/Shop/Shop2.png";
import hoodieBlack from "@/Assets/home/Shop/Shop3.png";
import cap from "@/Assets/home/Shop/Shop4.png";

const ShopSection = () => {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [grabbing, setGrabbing] = useState(false);

  const products = [
    {
      id: 1,
      title: "DESIFEST Unisex Windbreaker",
      price: "30.00",
      image: windbreaker,
      link: "/shop/windbreaker",
    },
    {
      id: 2,
      title: "Desifest Hoodie Blue",
      price: "29.00",
      image: hoodieBlue,
      link: "/shop/hoodie-blue",
    },
    {
      id: 3,
      title: "Desifest Hoodie Black",
      price: "29.00",
      image: hoodieBlack,
      link: "/shop/hoodie-black",
    },
    {
      id: 4,
      title: "Desifest Vintage Cotton Twill Cap",
      price: "25.00",
      image: cap,
      link: "/shop/vintage-cap",
    },
  ];

  const handleMouseDown = (e) => {
    isDown.current = true;
    setGrabbing(true);
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    setGrabbing(false);
  };

  const handleMouseUp = () => {
    isDown.current = false;
    setGrabbing(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2; // scroll speed
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="relative bg-blue-black py-10 sm:py-14 pl-4 px-4 overflow-hidden">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3 sm:gap-4 w-full">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-[oswald] text-white whitespace-nowrap">
            SHOP
          </h2>
          <span className="h-0.75 flex-1 rounded-full bg-white/80" />
        </div>

        <a
          href="/shop"
          className="text-neon-yellow  font-[oswald] text-3xl whitespace-nowrap hover:underline"
        >
          VIEW ALL
        </a>
      </div>

      {/* PRODUCTS – GRAB & DRAG */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`
          flex flex-nowrap gap-6
          overflow-x-auto
          scrollbar-hide
          scroll-smooth
          pb-4
          select-none
          ${grabbing ? "cursor-grabbing" : "cursor-grab"}
        `}
      >
        {products.map((product) => (
          <div key={product.id} className="shrink-0">
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              shopLink={product.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopSection;
