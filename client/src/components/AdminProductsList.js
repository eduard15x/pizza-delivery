const AdminProductsList = ({ productsArray, removeIcon, modifyIcon }) => {
  return (
    <>
      <h2 className="admin-catalog--subtitle">Products list</h2>
      <p className="products-list__label">
        <span className="products-list__label--name">Name</span>
        <span className="products-list__label--description">Description</span>
        <span className="products-list__label--price">Price</span>
        <span className="products-list__label--stock">Stock</span>
        <span className="products-list__label--image">Image</span>
        <span className="products-list__label--settings">Delete / Modify</span>
      </p>
      {productsArray.length > 0 ? (
        <ul className="products-list">
          {productsArray.map((item) => (
            <li
              key={item._id}
              data-product-id={item._id}
              className="products-list__item"
            >
              <p className="products-list__item--name">{item.name}</p>
              <p className="products-list__item--description">
                {item.description}
              </p>
              <p className="products-list__item--price">{item.price}</p>
              <p className="products-list__item--stock">{item.stockLevel}</p>
              <img
                className="products-list__item--image"
                src={item.image}
                alt={item.name}
              />
              {removeIcon}
              {modifyIcon}
            </li>
          ))}
        </ul>
      ) : (
        "No products available"
      )}
    </>
  );
};

export default AdminProductsList;
