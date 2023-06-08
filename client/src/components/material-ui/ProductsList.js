import { useState, useEffect } from "react";
import axios from "axios";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
const allProductsURL = process.env.REACT_APP_ALL_PRODUCTS;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductsList() {
  const [productsArray, setProductsArray] = useState([]);
  const [age, setAge] = useState("");

  const getProducts = async () => {
    try {
      const response = await axios.get(allProductsURL);
      setProductsArray(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box
      sx={{
        width: "90%",
        m: "auto",
        flexGrow: 1,
        pt: { xs: "56px", sm: "64px", md: "68px" },
        pb: { xs: "475px", sm: "325px" },
      }}
    >
      <Box
        component="div"
        sx={{ py: "40px", display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "28px", md: "42px" },
            fontWeight: "bold",
            color: "#434242",
          }}
        >
          Pizza
        </Typography>
        <FormControl sx={{ minWidth: 180 }}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            placeholder="dada"
          >
            <MenuItem disabled value="">
              <em>SORT BY</em>
            </MenuItem>
            <MenuItem value={10}>Alphabetical</MenuItem>
            <MenuItem value={20}>Price (Low to High)</MenuItem>
            <MenuItem value={30}>Price (High to Low)</MenuItem>
            <MenuItem value={40}>Most bought</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {productsArray.length > 0 ? (
        <Grid
          container
          spacing={{ xs: 3, sm: 3, md: 4, lg: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {productsArray.map((item, index) => (
            <Grid xs={4} sm={4} md={4} key={item._id}>
              <CardMedia
                component="img"
                loading={"lazy"}
                image={item.image}
                alt={`Pizza ${item.name} image`}
                sx={{
                  borderRadius: "15px 15px 0px 0px",
                }}
              />

              <Item
                sx={{
                  textAlign: "start",
                  filter: "brightness(0.975)",
                  borderRadius: "15px",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "16px", md: "18px", lg: "20px" },
                    fontWeight: "bold",
                    color: "#434242",
                  }}
                >
                  {`Pizza ${item.name}`}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    py: { xs: 1, sm: 2 },
                    color: "#6d4009",
                    minHeight: { sm: "96px", md: "105px", xl: "80px" },
                  }}
                >
                  {item.description}
                </Typography>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontWeight: "bold",
                      color: "#434242",
                      fontSize: { xs: "20px", md: "22px", lg: "24px" },
                    }}
                  >
                    {`$${item.price}`}
                  </Typography>
                  <Button
                    size="medium"
                    sx={{
                      backgroundColor: "#af6408",
                      color: "#ffffff",
                      px: 3,
                      borderRadius: "25px",
                      "&:hover": {
                        backgroundColor: "#af6408",
                        filter: "brightness(1.25)",
                      },
                    }}
                    href={`/menu/${item._id}`}
                  >
                    ORDER
                  </Button>
                </CardActions>
              </Item>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress
            sx={{
              display: "flex",
              margin: "auto",
            }}
          />
        </Box>
      )}
    </Box>
  );
}
