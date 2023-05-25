import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const allProductsURL = process.env.REACT_APP_ALL_PRODUCTS;
const deleteProductURL = process.env.REACT_APP_DELETE_PRODUCT;

const AdminPanel = () => {
  // get products
  const [productsList, setProductsList] = useState([]);
  // productObj
  const [newProduct, setNewProduct] = useState({});

  // this can be created as a customHook
  async function getProducts() {
    try {
      const response = await axios.get(allProductsURL);
      setProductsList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  // update the state newProduct variable when edit form to add a new product
  const updateNewProduct = (property, value) => {
    setNewProduct({
      ...newProduct,
      [property]: value,
    });
  };

  // create new product
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(allProductsURL, newProduct);
      console.log(newProduct);
      console.log("Response:", response.data);
      // Handle the response as needed
    } catch (error) {
      console.error("Error:", error);
      // Handle the error as needed
    }
  }

  // delete product
  async function handleDelete(id) {
    try {
      const response = await axios.delete(deleteProductURL + id);
      console.log("Response:", response.data);
      getProducts();
      // Handle the response as needed
    } catch (error) {
      console.error("Error:", error);
      // Handle the error as needed
    }
  }

  console.log(newProduct);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Link to={"/contact"}>Go</Link>
      <p>Hello Admin</p>
      <p>This is admin panel</p>
      <div>
        <h1>Show all products</h1>
        {productsList.length > 0 ? (
          <ul>
            {productsList.map((item) => (
              <li key={item._id}>
                <p>{item.name}</p>
                <p onClick={() => handleDelete(item._id)}>DeleteBTN ICON</p>
                <p data-product-id={item._id}>Modify ICON</p>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>

      <div>
        <h1>Add a new product</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            required
            type="text"
            onChange={(e) => updateNewProduct("name", e.target.value)}
          />
          <label>Description</label>
          <textarea
            required
            placeholder="Description about product"
            onChange={(e) => updateNewProduct("description", e.target.value)}
          ></textarea>

          <label>Price</label>
          <input
            required
            type="number"
            onChange={(e) => updateNewProduct("price", e.target.value)}
          />

          <label>Stock Level</label>
          <input
            required
            type="number"
            onChange={(e) => updateNewProduct("stockLevel", e.target.value)}
          />

          <label>Images</label>
          <input
            required
            type="file"
            onChange={(e) =>
              updateNewProduct("images", [
                {
                  base64: "imageSRC",
                  name: "imageNAME",
                  lastModified: 3131,
                },
              ])
            }
          />

          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
