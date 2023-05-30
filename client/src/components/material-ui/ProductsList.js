import * as React from "react";
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
// image for test
import im2 from "../../assets/products/capriciossa.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductsList() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

  return (
    <Box
      sx={{
        width: "90%",
        m: "auto",
        pb: "100px",
        flexGrow: 1,
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
      <Grid
        container
        spacing={{ xs: 3, sm: 3, md: 4, lg: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={4} sm={4} md={4} key={index}>
            <CardMedia
              component="img"
              image={im2}
              alt="green iguana"
              sx={{
                maxHeight: 280,
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
                Pizza Prosciutto Efunghi
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  py: { xs: 1, sm: 2 },
                  color: "#6d4009",
                }}
              >
                Creamy pizza sauce, mozzarella, chicken, corn, spinach leaves,
                cheddar, tomatoes, basil
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
                  $19
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
                >
                  ORDER
                </Button>
              </CardActions>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
