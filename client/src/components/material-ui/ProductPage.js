// TODO - after added product to localStorage, update the database stock
import axios from "axios";
import { useState, useEffect } from "react";
import { useCartContext } from "../../hooks/useCartContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
// rating component
import ProductRating from "./ProductRating";
const SINGLE_PRODUCT = process.env.REACT_APP_DELETE_PRODUCT;

const ProductPage = () => {
  const { addToCart } = useCartContext();
  const [productDetails, setProductDetails] = useState(null);

  const productIngredients = productDetails?.description.split(",");
  const productAllergens = productDetails?.allergens.split(",");

  const [pizzaType, setPizzaType] = useState(0);

  const handleChange = (event) => {
    setPizzaType(event.target.value);
  };
  const productID = window.location.pathname.split("/").pop();

  const handleAddToCart = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newItem = {
      product: productID,
      type: pizzaType,
      quantity: 1,
      unique: productID + pizzaType,
    };

    if (cart) {
      // check if the same product ID and same type already exista, just increasy quantity
      const existingItemIndex = cart.findIndex(
        (item) => item.product === productID && item.type === pizzaType
      );

      if (existingItemIndex !== -1) {
        // If an existing item is found, update its quantity
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        // If no existing item is found, add the new item to the cart
        const updatedCart = [...cart, newItem];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        addToCart(newItem);
      }
    } else {
      // If the cart is empty, add the new item to the cart
      localStorage.setItem("cart", JSON.stringify([newItem]));
      addToCart(newItem);
    }
  };

  function getProductDetails() {
    axios
      .get(SINGLE_PRODUCT + productID)
      .then((response) => {
        const data = response.data;
        setProductDetails({
          name: data.name,
          price: data.price,
          description: data.description,
          image: data.image,
          productType: data.productType,
          allergens: "classic crust oil, pan, vegetable oil",
        });
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <Box
      sx={{
        py: 4,
        px: 4,
        pb: { xs: "475px", sm: "325px" },
        pt: { xs: "56px", sm: "64px", md: "68px" },
      }}
    >
      {productDetails ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            pt: { xs: 3, sm: 3 },
          }}
        >
          {/* image */}
          <CardMedia
            component="img"
            image={productDetails.image}
            alt="green iguana"
            width={300}
            height={200}
            sx={{
              width: { md: 450, lg: 650, xl: 800 },
              height: "auto",
              borderRadius: "14px",
              mr: { md: 5, lg: 7, xl: 10 },
            }}
          />
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "16px", md: "28px", lg: "38px" },
                fontWeight: "bold",
                color: "#434242",
              }}
            >
              {productDetails.name}
            </Typography>
            {/* Product Rating */}
            <ProductRating />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      md: "18px",
                      lg: "22px",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Ingredients used
                </Typography>
                {productIngredients.length > 0
                  ? productIngredients.map((item, index) => (
                      <Typography
                        component="p"
                        key={index}
                        sx={{
                          pl: 1,
                          fontSize: {
                            md: "18px",
                            lg: "18px",
                            transform: "skew(-5deg)",
                          },
                        }}
                      >
                        {`- ${item}`}
                      </Typography>
                    ))
                  : null}
              </Box>
              {/* // TODO, set property to pizzas */}
              <Box sx={{ pl: 6 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      md: "18px",
                      lg: "22px",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Alerggens
                </Typography>
                {productAllergens.length > 0 &&
                  productAllergens.map((item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        pl: 1,
                        fontSize: {
                          md: "18px",
                          lg: "18px",
                          transform: "skew(-5deg)",
                        },
                      }}
                    >
                      {`- ${item}`}
                    </Typography>
                  ))}
              </Box>
            </Box>
          </Box>
          {/* Order details */}
          <Box
            sx={{
              width: "75%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              pt: 8,
            }}
          >
            {/* Pizza Type */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="p"
                sx={{ pb: 2, fontWeight: "bold", fontSize: "22px" }}
              >
                Choose your type
              </Typography>
              <FormControl sx={{ minWidth: 120 }}>
                <Select value={pizzaType} onChange={handleChange}>
                  {productDetails.productType.length > 0
                    ? productDetails.productType.map((item) => (
                        <MenuItem key={item.type} value={item.price}>
                          {item.type}
                        </MenuItem>
                      ))
                    : null}
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h2"
                sx={{ pb: 3, fontWeight: "bold", fontSize: "22px" }}
              >
                Price
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                }}
              >
                {`$${productDetails?.price + pizzaType}`}
              </Typography>
            </Box>

            <Button
              onClick={handleAddToCart}
              sx={{
                maxHeight: "50px",
                backgroundColor: "#af6408",
                color: "#ffffff",
                px: 5,
                borderRadius: "9999px",
                "&:hover": {
                  backgroundColor: "#af6408",
                  filter: "brightness(1.25)",
                },
              }}
            >
              Add to cart
            </Button>
          </Box>

          {/* COMPONENT PEOPLE REVIEWS */}
          <Box
            sx={{
              pt: 8,
              display: "flex",
              flexDirection: "column",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">Reviews</Typography>
            <ProductRating />
          </Box>
        </Box>
      ) : (
        <CircularProgress
          sx={{
            display: "flex",
            margin: "auto",
            mt: 5,
          }}
        />
      )}
    </Box>
  );
};

export default ProductPage;
