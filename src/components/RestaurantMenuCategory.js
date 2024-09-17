const RestaurantMenuCategory = (props) => {
  const { category } = props;
  return (
    <div className="menu-card">
      <h2 className="menuItemHeading">{category.title}</h2>
      {category?.itemCards?.map((card) => (
        <div className="menuItemContainer">
          <h4 style={{ width: "300px" }}>{card?.card?.info?.name}</h4>
          <span style={{ paddingRight: "10px" }}>
            <span>&#8377;</span>{" "}
            {Math.floor(
              (card?.card?.info?.price || card?.card?.info?.defaultPrice) / 100
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuCategory;
