// TODO - Responsive design
// TODO - update DB - for the new collection "orders"
// TODO - split code and components
import { useState, useEffect } from "react";
import axios from "axios";
import { useCartContext } from "../hooks/useCartContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CardMedia from "@mui/material/CardMedia";
const getSingleProductURL = process.env.REACT_APP_SINGLE_PRODUCT;
const getSingleUserURL = process.env.REACT_APP_SINGLE_USER;
const updateUserURL = process.env.REACT_APP_UPDATE_USER;

const Cart = () => {
  const { deleteFromCart, clearCart } = useCartContext();
  const [cartProductsList, setCartProductsList] = useState([]);
  const [deliveryTax, setDeliveryTax] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));

  function getCartProducts() {
    if (cartLocalStorage) {
      const promises = cartLocalStorage.map((obj) =>
        axios.get(getSingleProductURL + obj.product)
      );

      Promise.all(promises)
        .then((responses) => {
          const products = responses.map((response) => response.data);
          setCartProductsList(products);
          // get subtotal
          const subtotalPrices = products.map(
            (item, index) =>
              (item.price + cartLocalStorage[index].type) *
              cartLocalStorage[index].quantity
          );
          const subtotalSum = subtotalPrices.reduce(
            (prev, curr) => prev + curr,
            0
          );
          setSubtotal(subtotalSum);
          // get delivery
          if (subtotalSum < 40) {
            setDeliveryTax(8);
          } else {
            setDeliveryTax(0);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  // delete btn
  const handleDelete = (e) => {
    const parentEl = e.currentTarget.parentElement;
    const productId = parentEl.dataset.productId;
    const productType = Number(parentEl.dataset.productType);
    // get index of current clicked item
    const indexToRemove = cartLocalStorage.findIndex(
      (item) => item.product === productId && item.type === productType
    );
    deleteFromCart(cartLocalStorage[indexToRemove]);
    cartLocalStorage.splice(indexToRemove, 1);
    cartProductsList.splice(indexToRemove, 1);
    // update local storage to store new array
    localStorage.setItem("cart", JSON.stringify(cartLocalStorage));
    // update UI
    getCartProducts();
  };

  // packet with handleSubmit
  const updateUserCartOnSubmit = (data, user) => {
    axios
      .patch(updateUserURL + user, {
        userOrders: data,
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          localStorage.removeItem("cart");
          clearCart();
          getCartProducts();
          console.log("Request successful");
        } else {
          console.log("Request failed");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    axios
      .get(getSingleUserURL + userLocalStorage.email)
      .then((response) => {
        const userOrder = cartLocalStorage.map((item, index) => ({
          ...item,
          name: cartProductsList[index].name,
        }));
        updateUserCartOnSubmit(userOrder, userLocalStorage.email);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCartProducts();
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
                border: "1px solid lightgray",
                p: 2,
              }}
            >
              <Typography
                component="p"
                sx={{
                  display: "flex",
                  borderBottom: "2px solid #393939",
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
                    width: "110px",
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
                    textAlign: "end",
                    width: "70px",
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
                  data-product-quantity={cartLocalStorage[index].quantity}
                  data-product-type={cartLocalStorage[index].type}
                  component="li"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    py: 1.5,
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
                      borderRadius: "5px",
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
                  >{`$${
                    item.price + cartLocalStorage[index].type
                  }`}</Typography>
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
                    {`$${
                      (item.price + cartLocalStorage[index].type) *
                      cartLocalStorage[index].quantity
                    }`}
                  </Typography>
                  <DeleteForeverIcon
                    onClick={handleDelete}
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
                  border: "1px solid lightgray",
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
                  backgroundColor: "#393939",
                  color: "whitesmoke",
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
                  border: "1px solid lightgray",
                  height: "170px",
                  p: 2,
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pb: 1,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "14px",
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
                    {`$${subtotal}`}
                  </Typography>
                </Typography>
                {/* delivery */}
                <Typography
                  component="p"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid lightgray",
                    pb: 1,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    Delivery (Free from $40)
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {`$${deliveryTax}`}
                  </Typography>
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: 1,
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
                    {`$${subtotal + deliveryTax}`}
                  </Typography>
                </Typography>
                <Button
                  onClick={handleSubmit}
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
