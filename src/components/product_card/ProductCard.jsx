import "./product_card.css";

const ProductCard = ({ image, title, desc, price, discount }) => {
  return (
    <div className="product__card">
      <div className="product__image">
        <img src={image} alt={title} />
      </div>

      <div className="product__info">
        {discount ? (
          <div className="discount">{Math.floor(discount)}%</div>
        ) : null}
        <p className="product__title">{title}</p>
        <h6 className="product__price">From price $ {price}</h6>
      </div>
    </div>
  );
};

export default ProductCard;
