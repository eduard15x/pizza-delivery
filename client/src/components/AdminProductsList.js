const AdminProductsList = ({ productsArray, removeIcon, modifyIcon }) => {
  return (
    <div>
      <h2>Show all products</h2>
      {productsArray.length > 0 ? (
        <ul>
          {productsArray.map((item) => (
            <li key={item._id} data-product-id={item._id}>
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <p>{item.stockLevel}</p>
              <p>{item.images.base64}</p>
              {removeIcon}
              {modifyIcon}
            </li>
          ))}
        </ul>
      ) : (
        "No products available"
      )}
    </div>
  );
};

export default AdminProductsList;
