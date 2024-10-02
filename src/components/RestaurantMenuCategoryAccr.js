import { useState } from "react";
import MenuCategoryItemListAccr from "./MenuCategoryItemListAccr";
import styles from "../styles/RestaurantMenuCategoryAccr.module.css";

const RestaurantMenuCategoryAccr = (props) => {
  const { category } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={styles.menuCategory}>
      {/**
       * Accordian Header
       */}
      <div
        className={styles.categoryHeader}
        onClick={() => setIsExpanded(!isExpanded)}
        data-testid="menuCategory"
      >
        <h3>
          {category?.title} ({category?.itemCards?.length})
        </h3>
        <button style={{}}>
          <span>{isExpanded ? "-" : "+"}</span>
        </button>
      </div>
      {/**
       * Accordian Body
       */}
      {isExpanded && <MenuCategoryItemListAccr items={category?.itemCards} />}
    </div>
  );
};

export default RestaurantMenuCategoryAccr;
