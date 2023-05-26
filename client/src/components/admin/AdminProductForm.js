const AdminProductForm = ({
  newProduct,
  handleSubmit,
  updateNewProduct,
  formTitle,
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, newProduct?._id)}>
      {formTitle !== undefined ? <h2>{formTitle}</h2> : ""}
      <label>Name</label>
      <input
        required
        type="text"
        name="name"
        defaultValue={newProduct?.name}
        onChange={(e) => updateNewProduct("name", e.target.value)}
      />
      <label>Description</label>
      <textarea
        required
        name="description"
        defaultValue={newProduct?.description}
        onChange={(e) => updateNewProduct("description", e.target.value)}
      ></textarea>
      <label>Price</label>
      <input
        required
        type="number"
        name="price"
        defaultValue={newProduct?.price}
        onChange={(e) => updateNewProduct("price", e.target.value)}
      />
      <label>Stock Level</label>
      <input
        required
        type="number"
        name="stockLevel"
        defaultValue={newProduct?.stockLevel}
        onChange={(e) => updateNewProduct("stockLevel", e.target.value)}
      />
      <label>Images</label>
      <input
        required
        type="file"
        name="images"
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
  );
};

export default AdminProductForm;
