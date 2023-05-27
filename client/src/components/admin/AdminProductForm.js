const AdminProductForm = ({
  className,
  newProduct,
  handleSubmit,
  updateNewProduct,
  formTitle,
}) => {
  return (
    <form
      onSubmit={(e) => handleSubmit(e, newProduct?._id)}
      className={`${className} admin-catalog__form`}
    >
      {formTitle !== undefined ? (
        <h2 className="form-title">{formTitle}</h2>
      ) : (
        ""
      )}
      <label>Product Name</label>
      <input
        required
        type="text"
        name="name"
        className={`${className}--input`}
        defaultValue={newProduct?.name}
        onChange={(e) => updateNewProduct("name", e.target.value)}
      />
      <label>Product Description</label>
      <textarea
        required
        maxLength="100"
        name="description"
        className={`${className}--description`}
        defaultValue={newProduct?.description}
        onChange={(e) => updateNewProduct("description", e.target.value)}
      ></textarea>
      <label>Product Price</label>
      <input
        required
        type="number"
        name="price"
        className={`${className}--input`}
        defaultValue={newProduct?.price}
        onChange={(e) => updateNewProduct("price", e.target.value)}
      />
      <label>Product Stock Level</label>
      <input
        required
        type="number"
        name="stockLevel"
        className={`${className}--input`}
        defaultValue={newProduct?.stockLevel}
        onChange={(e) => updateNewProduct("stockLevel", e.target.value)}
      />
      <label>Product Image</label>
      <input
        required
        type="file"
        name="images"
        className={`${className}--input`}
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
      <input type="submit" value="Save" className={`${className}--submit`} />
    </form>
  );
};

export default AdminProductForm;
