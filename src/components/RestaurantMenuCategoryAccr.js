const RestaurantMenuCategoryAccr = (props) => {
  const { category } = props;
  return (
    /**
     * Accordian Header
     */
    <div className="menu-category">
      <h3 style={{ margin: "20px" }}>
        {category?.title} ({category?.itemCards?.length})
      </h3>
      <span style={{ fontSize: "large", margin: "auto 20px", color: "gray" }}>
        +
      </span>
    </div>
    /**
     * Accordian Body
     */
  );
};

export default RestaurantMenuCategoryAccr;
