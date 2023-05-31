import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// rating component

import StarIcon from "@mui/icons-material/Star";

// another components

// image for test
import im2 from "../../assets/products/capriciossa.jpg";
import ProductRating from "./ProductRating";

export default function ProductPage() {
  // rating component

  // rating component end

  const [productDetails, setProductDetails] = useState({
    name: "Prosciutto Efunghi",
    price: 20,
    description:
      "tomato sauce, tsausages, mozzarella, garlic, mujei, conion, porjd",
    image: im2,
  });

  const productIngredients = productDetails?.description.split(",");

  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

  console.log(productIngredients);
  return (
    <Box
      sx={{
        py: 4,
        px: 4,
      }}
      //   sx={{
      //     width: "100%",
      //     backgroundColor: "primary.dark",
      //     "&:hover": {
      //       backgroundColor: "primary.main",
      //       opacity: [0.9, 0.8, 0.7],
      //     },
      //   }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* image */}
        <CardMedia
          component="img"
          image={im2}
          alt="green iguana"
          sx={{
            width: { md: 450, lg: 650, xl: 800 },
            // maxHeight: 280,
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
                      - {item}
                    </Typography>
                  ))
                : null}
            </Box>
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
              <Typography
                sx={{
                  pl: 1,
                  fontSize: {
                    md: "18px",
                    lg: "18px",
                    transform: "skew(-5deg)",
                  },
                }}
              >
                - classic crust oil
              </Typography>
              <Typography
                sx={{
                  pl: 1,
                  fontSize: {
                    md: "18px",
                    lg: "18px",
                    transform: "skew(-5deg)",
                  },
                }}
              >
                - pan
              </Typography>
              <Typography
                sx={{
                  pl: 1,
                  fontSize: {
                    md: "18px",
                    lg: "18px",
                    transform: "skew(-5deg)",
                  },
                }}
              >
                - vegetable oil
              </Typography>
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
              <Select value={age} onChange={handleChange} placeholder="dada">
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
    </Box>
  );
}
