const MenuCategoryItemListAccr = (props) => {
  const items = props.items;
  return (
    <div>
      {items.map((item) => (
        <p>{item?.card?.info?.name}</p>
      ))}
    </div>
  );
};

export default MenuCategoryItemListAccr;
