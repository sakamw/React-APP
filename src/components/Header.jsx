import {
  FaGlassMartiniAlt,
  FaPizzaSlice,
  FaLeaf,
  FaPepperHot,
  FaIceCream,
  FaUtensils,
} from "react-icons/fa";

function Header() {
  return (
    <div className="header-container">
      <div className="category-menu">
        <div className="category-item">
          <span style={{ color: "#dc2626" }} className="icon">
            <FaUtensils />
          </span>
          <span style={{ color: "#dc2626" }}>All</span>
        </div>
        <div className="category-item">
          <span className="icon">
            <FaGlassMartiniAlt />
          </span>
          <span>Drinks</span>
        </div>
        <div className="category-item">
          <span className="icon">
            <FaPizzaSlice />
          </span>
          <span>Pizza</span>
        </div>
        <div className="category-item">
          <span className="icon">
            <FaLeaf />
          </span>
          <span>Salad</span>
        </div>
        <div className="category-item">
          <span className="icon">
            <FaPepperHot />
          </span>
          <span>Spicy</span>
        </div>
        <div className="category-item">
          <span className="icon">
            <FaIceCream />
          </span>
          <span>Sweets</span>
        </div>
      </div>
      <button className="btn-cta">View All</button>
    </div>
  );
}

export default Header;
