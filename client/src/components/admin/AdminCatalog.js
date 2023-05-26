import { useState, useEffect } from "react";
import axios from "axios";
// icons
import { GoTools, GoTrashcan } from "react-icons/go";
// components
import AdminProductsList from "../AdminProductsList";
import AdminProductForm from "./AdminProductForm";
import CustomModal from "../CustomModal";
const allProductsURL = process.env.REACT_APP_ALL_PRODUCTS;
const deleteProductURL = process.env.REACT_APP_DELETE_PRODUCT;
const updateProductURL = process.env.REACT_APP_DELETE_PRODUCT;

const AdminCatalog = () => {
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
  function updateNewProduct(property, value) {
    setNewProduct({
      ...newProduct,
      [property]: value,
    });
  }

  // create new product
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(allProductsURL, newProduct);
      console.log("Response:", response.data);
      getProducts();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // delete product
  async function handleDelete(e) {
    const productID = e.currentTarget.parentElement.dataset.productId;
    try {
      const response = await axios.delete(deleteProductURL + productID);
      console.log("Response:", response.data);
      getProducts();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function handleUpdate(e) {
    setNewProduct({});
    setShowModal(true);
    const productID = e.currentTarget.parentElement.dataset.productId;
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

  async function handleSubmitUpdate(e, id) {
    e.preventDefault();
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
    <div className="admin-panel__page">
      {/* Admin Products List component */}
      <AdminProductsList
        productsArray={productsList}
        removeIcon={<GoTrashcan onClick={handleDelete} />}
        modifyIcon={<GoTools onClick={handleUpdate} />}
      />

      {/* Admin Update Product Modal Form */}
      <CustomModal
        modalView={showModal}
        modalTitle="Update product"
        component={
          <AdminProductForm
            newProduct={newProduct}
            handleSubmit={handleSubmitUpdate}
            updateNewProduct={updateNewProduct}
          />
        }
        setShowModal={setShowModal}
      />

      {/* Admin New Product Form */}
      <AdminProductForm
        formTitle="Add a new product"
        handleSubmit={handleSubmit}
        updateNewProduct={updateNewProduct}
      />
    </div>
  );
};

export default AdminCatalog;
