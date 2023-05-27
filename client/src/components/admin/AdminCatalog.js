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
  function updateNewProduct(property, value, e) {
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
      setShowModal(false);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleAddFiles = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64string = reader.result;

        setNewProduct({
          ...newProduct,
          image: base64string,
        });
      };
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="admin-panel__page admin-catalog">
      <h1 className="admin-catalog--title">Admin - Catalog</h1>
      {/* Admin Products List component */}
      <AdminProductsList
        productsArray={productsList}
        removeIcon={
          <GoTrashcan
            onClick={handleDelete}
            className="products-list__item--icon"
          />
        }
        modifyIcon={
          <GoTools
            onClick={handleUpdate}
            className="products-list__item--icon"
          />
        }
      />

      {/* Admin Update Product Modal Form */}
      <CustomModal
        modalView={showModal}
        modalTitle="Update product"
        component={
          <AdminProductForm
            className="form-update-product"
            newProduct={newProduct}
            handleSubmit={handleSubmitUpdate}
            updateNewProduct={updateNewProduct}
            handleAddFiles={handleAddFiles}
          />
        }
        setShowModal={setShowModal}
      />

      {/* Admin New Product Form */}
      <AdminProductForm
        className="form-add-product"
        formTitle="Add a new product"
        handleSubmit={handleSubmit}
        updateNewProduct={updateNewProduct}
        handleAddFiles={handleAddFiles}
      />
    </div>
  );
};

export default AdminCatalog;
