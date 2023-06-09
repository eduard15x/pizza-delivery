import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import CardMedia from "@mui/material/CardMedia";
const getSingleProductURL = process.env.REACT_APP_SINGLE_PRODUCT;

const Cart = () => {
  const [cartProductsList, setCartProductsList] = useState([]);

  const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));

  console.log(cartLocalStorage);
  // console.log(userLocalStorage);
  function getCartProducts() {
    if (cartLocalStorage) {
      const promises = cartLocalStorage.map((obj) =>
        axios.get(getSingleProductURL + obj.product)
      );

      Promise.all(promises)
        .then((responses) => {
          console.log(responses);
          const products = responses.map((response) => response.data);
          console.log(products);
          setCartProductsList(products);
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    getCartProducts();
    console.log(cartProductsList);
  }, []);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pb: { xs: "475px", sm: "325px" },
        pt: { xs: "56px", sm: "64px", md: "68px" },
      }}
    >
      {cartLocalStorage && cartProductsList.length > 0 ? (
        <>
          {/* TITLE */}
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "20px", sm: "24px", md: "30px" },
              textAlign: "center",
              fontWeight: "bold",
              pb: 3,
            }}
          >
            Shopping Cart
          </Typography>
          {/* INFO CONTAINER */}
          <Box
            sx={{
              display: "flex",
            }}
          >
            {/* Cart current products */}
            <Box
              component="ul"
              sx={{
                border: "1px solid lightblue",
                p: 2,
              }}
            >
              <Typography
                component="p"
                sx={{
                  display: "flex",
                  borderBottom: "1px solid blue",
                  pb: 1,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    width: "120px",
                    minWidth: "120px",
                    mr: 4,
                  }}
                ></Typography>
                <Typography
                  component="span"
                  sx={{
                    width: "120px",
                    mr: 4,
                    fontWeight: "bold",
                  }}
                >
                  Name
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    width: "60px",
                    mr: 3,
                    fontWeight: "bold",
                  }}
                >
                  Price
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    width: "60px",
                    mr: 3,
                    fontWeight: "bold",
                  }}
                >
                  Quantity
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    width: "60px",
                    mr: 3,
                    fontWeight: "bold",
                  }}
                >
                  Subtotal
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    width: "60px",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </Typography>
              </Typography>
              {cartProductsList.map((item, index) => (
                <Box
                  key={index}
                  data-product-id={item._id}
                  data-product-stock={1}
                  component="li"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    py: 1,
                    borderBottom: "1px solid lightgray",
                  }}
                >
                  <CardMedia
                    component="img"
                    loading="lazy"
                    image={item.image}
                    alt={`${item.name} - image`}
                    width={50}
                    height={50}
                    sx={{
                      width: "120px",
                      height: "auto",
                      mr: 4,
                    }}
                  />
                  <Typography
                    component="p"
                    sx={{
                      width: "120px",
                      mr: 4,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      width: "60px",
                      mr: 3,
                    }}
                  >{`$${item.price}`}</Typography>
                  <Typography
                    component="p"
                    sx={{
                      width: "60px",
                      mr: 3,
                    }}
                  >
                    {cartLocalStorage[index].quantity}
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      width: "60px",
                      mr: 3,
                    }}
                  >
                    {`$${item.price * cartLocalStorage[index].quantity}`}
                  </Typography>
                  <DeleteForeverIcon
                    sx={{
                      fontSize: "26px",
                      color: "#af6408",
                      cursor: "pointer",
                      "&:hover": { filter: "brightness(1.2)" },
                      width: "60px",
                    }}
                  />
                </Box>
              ))}
              {/* Button under list */}
              <Button
                href="/menu"
                sx={{
                  maxHeight: "50px",
                  backgroundColor: "whitesmoke",
                  border: "1px solid lightgrey",
                  color: "black",
                  px: 3,
                  mt: 2,
                  borderRadius: "5px",
                  "&:hover": {
                    filter: "brightness(0.85)",
                  },
                }}
              >
                Continue shopping
              </Button>
            </Box>
            {/* Cart other info */}
            <Box
              component="div"
              sx={{
                width: "250px",
                ml: 8,
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "lightgrey",
                  px: 2,
                  py: 1,
                }}
              >
                CART TOTALS
              </Typography>
              {/* menu */}
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid grey",
                  height: "150px",
                  p: 2,
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid lightblue",
                    pb: 1,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Subtotal
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    $200,40
                  </Typography>
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Grand Total
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    $200,40
                  </Typography>
                </Typography>
                <Button
                  sx={{
                    maxHeight: "50px",
                    backgroundColor: "#af6408",
                    color: "#ffffff",
                    px: 4,
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#af6408",
                      filter: "brightness(1.25)",
                    },
                  }}
                >
                  Submit payment
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </Box>
  );
};

export default Cart;
