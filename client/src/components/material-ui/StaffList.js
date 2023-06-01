import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const staffArray = [
  {
    name: "Manager",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Chef",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Chef",
    img: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Cashier",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Waiter",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Waiter",
    img: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    name: "Delivery",
    img: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Delivery",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

export default function StaffList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        gutterBottom
        component="h2"
        sx={{
          textAlign: "center",
          color: "#434242",
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: "bold",
          py: { xs: 1, sm: 3 },
        }}
      >
        Our Story
      </Typography>
      <Typography
        gutterBottom
        component="p"
        sx={{
          textAlign: "justify",
          color: "#434242",
          fontSize: { xs: "16px", md: "18px", lg: "20px" },
          lineHeight: 1.75,
          letterSpacing: 1.5,
          px: { xs: 2, sm: 4, md: 6, lg: 12, xl: 16 },
          transform: "skew(-2deg)",
        }}
      >
        [ Restaurant name ] is buried in a maze of narrow streets in the
        historical heart of the city, serving pizzas – ranging from the simple
        and traditional to the elaborate and creative – that are simply glorious
        and expertly prepared by some of the best Italian pizzaioli. You’ll find
        all the classics here – margherita, bianca al cotto (ham and cheese),
        calzone and more. The venue is always packed, with the waiting time
        easily amounting to a full hour, especially at night – but the most
        patient will not regret it.
      </Typography>
      <Typography
        gutterBottom
        component="h2"
        sx={{
          textAlign: "center",
          color: "#434242",
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: "bold",
          py: 4,
        }}
      >
        The Staff
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 12, lg: 12 }}
        sx={{ px: { xs: 0, sm: 2, md: 4, xl: 10 } }}
      >
        {staffArray.map((item, index) => (
          <Grid item xs={2} sm={3} md={4} lg={3} key={index}>
            <Item sx={{ p: 0, py: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <CardMedia
                component="img"
                image={item.img}
                alt={`${item.name} - image`}
                sx={{ width: "75%", margin: "auto", borderRadius: "50%" }}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
