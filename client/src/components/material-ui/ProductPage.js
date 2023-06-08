import axios from "axios";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
// rating component
import ProductRating from "./ProductRating";
const SINGLE_PRODUCT = process.env.REACT_APP_DELETE_PRODUCT;

const ProductPage = () => {
  const [productDetails, setProductDetails] = useState(null);

  const productIngredients = productDetails?.description.split(",");
  const productAllergens = productDetails?.allergens.split(",");

  const [pizzaType, setPizzaType] = useState(10);

  const handleChange = (event) => {
    setPizzaType(event.target.value);
    console.log(pizzaType);
  };
  const productID = window.location.pathname.split("/").pop();

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
          allergens: "classic crust oil, pan, vegetable oil",
        });
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  // console.log(productIngredients);
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
                sx={{ pb: 3, fontWeight: "bold", fontSize: "22px" }}
              >
                Choose your type
              </Typography>
              <FormControl sx={{ minWidth: 120 }}>
                <Select
                  value={pizzaType}
                  onChange={handleChange}
                  placeholder="dada"
                >
                  <MenuItem value={10}>600 g</MenuItem>
                  <MenuItem value={20}>1000 g</MenuItem>
                  <MenuItem value={30}>1500 g</MenuItem>
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
                $20
              </Typography>
            </Box>
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
