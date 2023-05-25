import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
const allProductsURL = process.env.REACT_APP_ALL_PRODUCTS;
const deleteProductURL = process.env.REACT_APP_DELETE_PRODUCT;
const updateProductURL = process.env.REACT_APP_DELETE_PRODUCT;

const AdminPanel = () => {
  // get products
  const [productsList, setProductsList] = useState([]);
  // productObj
  const [newProduct, setNewProduct] = useState({});
  // updateProduct modal
  const [showModal, setShowModal] = useState(false);

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
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // delete product
  async function handleDelete(id) {
    try {
      const response = await axios.delete(deleteProductURL + id);
      console.log("Response:", response.data);
      getProducts();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  console.log(newProduct);

  function handleUpdate(e) {
    setShowModal(true);
    const productID = e.target.dataset.productId;
    const { _id, name, description, price, stockLevel, images } =
      productsList.find((item) => item._id === productID);
    setNewProduct({
      _id,
      name,
      description,
      price,
      stockLevel,
      images,
    });
  }

  async function handleSubmitUpdate(id) {
    try {
      const response = await axios.patch(updateProductURL + id, newProduct);
      console.log("Response:", response.data);
      getProducts();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="admin-panel">
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
                <p data-product-id={item._id} onClick={handleUpdate}>
                  Modify ICON
                </p>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>

      <div className={`${showModal ? "" : "d-none"}`}>
        <button onClick={() => setShowModal(false)}>Close</button>
        <p>Title of the modal</p>
        <form
          onSubmit={() => {
            handleSubmitUpdate(newProduct._id);
          }}
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Product Name"
            defaultValue={newProduct.name}
            onChange={(e) => updateNewProduct("name", e.target.value)}
          />
          <textarea
            required
            name="description"
            placeholder="Product Description"
            defaultValue={newProduct.description}
            onChange={(e) => updateNewProduct("description", e.target.value)}
          ></textarea>
          <input
            required
            type="number"
            name="price"
            placeholder="Product Price"
            defaultValue={newProduct.price}
            onChange={(e) => updateNewProduct("price", e.target.value)}
          />
          <input
            required
            type="number"
            name="stockLevel"
            placeholder="Product Stock"
            defaultValue={newProduct.stockLevel}
            onChange={(e) => updateNewProduct("stockLevel", e.target.value)}
          />
          <input
            required
            type="file"
            name="images"
            placeholder="Product Image"
            defaultValue=""
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
