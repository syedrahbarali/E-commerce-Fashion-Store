import "./category.css";
import { category } from "../../data";

const Category = () => {
  return (
    // <div className="category scrollbar-none">
    //   <div className="container">
    //     <div className="slider">
    //       {Object.keys(category).map((image, index) => (
    //         <div className="category-item" key={index}>
    //           <img height={"60px"} src={category[image][0]} />
    //           <p className="label">{category[image][1]}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="category">
      <div className="slider scrollbar-none">
        {Object.keys(category).map((item, index) => (
          <div key={index} className="category__item">
            <img src={category[item][0]} alt={category[item][1]} />
            <p className="label">{category[item][1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
