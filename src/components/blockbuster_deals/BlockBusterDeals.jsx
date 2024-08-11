import { useSelector } from "react-redux";
import "./blockbuster_deals.css";
import ProductCard from "../product_card/ProductCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef } from "react";

const BlockBusterDeals = () => {
  const products = useSelector((store) => store.product.data)?.filter(
    (product) => product.discountPercentage > 11.0
  );

  const slide = useRef();

  const scrollLeft = () => {
    slide.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    slide.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="blockbuster__deals">
      <p className="title">Blockbuster Deals</p>

      {/* Scroll buttons */}
      <button onClick={scrollLeft} className="scroll__btn scroll__left">
        <FaAngleLeft />
      </button>
      <button onClick={scrollRight} className="scroll__btn scroll__right">
        <FaAngleRight />
      </button>

      <div ref={slide} className="slider scrollbar-none">
        {products?.map((product, index) => (
          <ProductCard
            key={index}
            image={product.images[0]}
            price={product.price}
            title={product.title}
            discount={product.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default BlockBusterDeals;
