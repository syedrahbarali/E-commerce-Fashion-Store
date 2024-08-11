import { useEffect, useState } from "react";
import "./best_deals.css";
import ProductCard from "../product_card/ProductCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";

const BestDeals = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((store) => store.product.data);

  return (
    <div className="best__deals">
      <button className="scroll__btn scroll__left">
        <FaAngleLeft />
      </button>
      <button className="scroll__btn scroll__right">
        <FaAngleRight />
      </button>

      <p className="title">Best Deals on Beauty</p>
      <div className="slider scrollbar-none">
        {products?.map((product, index) => {
          return product.category === "beauty" ? (
            <ProductCard
              key={index}
              image={product?.images[0]}
              title={product?.title}
              desc={product?.description}
              price={product?.price}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default BestDeals;
