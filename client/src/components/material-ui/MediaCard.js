import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: "90%", sm: 550, md: 425, lg: 540 },
          minWidth: { xs: 320, sm: 550, md: 425, lg: 540 },
          m: { xs: 2, md: 1, lg: 3 },
          py: 3,
          px: 2,
          borderRadius: "16px",
          background:
            "url(https://images.unsplash.com/photo-1610653216265-74079d187414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundClip: "initial",
          backgroundSize: "cover",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{
              fontSize: { xs: "26px", sm: "38px" },
              fontWeight: "bold",
              color: "darkslategray",
            }}
          >
            About us
          </Typography>
          <Typography variant="body2" color="black" maxWidth={400}>
            From generations to generations expanding and thanking people with
            best quality.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            href="/about-us"
            size="medium"
            sx={{
              borderRadius: "25px",
              px: 5,
              backgroundColor: "darkslategray",
              color: "whitesmoke",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#3d8383",
                color: "white",
                filter: "brightness(1)",
              },
              "&:active": {
                backgroundColor: "#bce6e6",
                color: "darkslategray",
              },
            }}
          >
            See more
          </Button>
        </CardActions>
      </Card>
      {/* Component 2 */}
      <Card
        sx={{
          maxWidth: { xs: "90%", sm: 550, md: 425, lg: 540 },
          minWidth: { xs: 320, sm: 550, md: 425, lg: 540 },
          m: { xs: 2, md: 1, lg: 3 },
          py: 3,
          px: 2,
          borderRadius: "16px",
          background:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1603623898160-a611b90151ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundClip: "initial",
          backgroundSize: "cover",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{
              fontSize: { xs: "26px", sm: "38px" },
              fontWeight: "bold",
              color: "whitesmoke",
            }}
          >
            Our locations
          </Typography>
          <Typography variant="body2" color="whitesmoke" maxWidth={400}>
            Along the time we extended around the world and become one of the
            top pizzeria around the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            sx={{
              backgroundColor: "whitesmoke",
              borderRadius: "25px",
              px: 5,
              color: "darkslategray",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "gray",
                color: "white",
                filter: "brightness(1)",
              },
              "&:active": {
                backgroundColor: "gray",
                color: "white",
                filter: "brightness(1.5)",
              },
            }}
          >
            Check it out
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
