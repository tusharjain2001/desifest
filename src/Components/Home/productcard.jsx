const ProductCard = ({
    image,
    title,
    price,
    shopLink,
    badgeText = "SHOP NOW",
  }) => {
    return (
      <div className="w-[338px] h-[416px] bg-[#26193A] p-2 relative text-white shadow-lg">
        
        {/* IMAGE AREA */}
        <div className=" bg-white p-6 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="max-h-[200px] object-contain"
          />
  
          {/* BADGE */}
          <span className="absolute top-0 right-0  bg-neon-yellow text-black text-xs font-bold px-3 py-2 ">
            {badgeText}
          </span>
        </div>
  
        {/* CONTENT */}
        <div className="p-5 space-y-2">
          <h3 className="text-base font-medium leading-snug">
            {title}
          </h3>
  
          <p className="text-xl font-bold">
            ${price}
          </p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  