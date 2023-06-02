import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import im1 from "../../assets/products/bascaiola.jpg";
import im2 from "../../assets/products/capriciossa.jpg";
import im3 from "../../assets/products/american-hot.jpg";

export default function RecommendedList({ recommendedProductsArr }) {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        pt: 12,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "26px", md: "38px" },
          fontWeight: "bold",
          textAlign: "center",
          color: "#434242",
          position: "absolute",
          mt: { xs: -5, md: -7 },
        }}
      >
        Recommended products
      </Typography>
      {recommendedProductsArr?.map((item) => (
        <Card
          key={item._id}
          sx={{
            width: "100%",
            maxWidth: { xs: 240, sm: 265, lg: 350, xl: 430 },
            mx: { xs: 1, md: 1 },
            mt: 3,
          }}
        >
          <CardActionArea
            sx={{
              filter: "brightness(0.75)",
              "&:hover": {
                filter: "brightness(1)",
              },
            }}
          >
            <CardMedia
              loading="lazy"
              component="img"
              image={item.image}
              alt="green iguana"
              sx={{
                maxHeight: 260,
              }}
            />
            <CardContent sx={{ pb: 0, pt: 1, px: 3 }}>
              <Typography
                gutterBottom
                variant="h6"
                fontWeight="bold"
                component="div"
                color="#434242"
                textAlign="center"
              >
                {`Pizza ${item.name}`}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{
              px: 3,
              py: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="p"
              fontWeight="bold"
              color="#434242"
              fontSize="24px"
            >
              {item.price}
            </Typography>
            <Button
              size="medium"
              sx={{
                backgroundColor: "#af6408",
                color: "#ffffff",
                px: 4,
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#af6408",
                  filter: "brightness(1.25)",
                },
              }}
            >
              ORDER
            </Button>
          </CardActions>
        </Card>
      ))}

      {/* <Card
        sx={{
          width: "100%",
          maxWidth: { xs: 240, sm: 265, lg: 350, xl: 430 },
          mx: { xs: 1, md: 1 },
          mt: 3,
        }}
      >
        <CardActionArea
          sx={{
            filter: "brightness(0.75)",
            "&:hover": {
              filter: "brightness(1)",
            },
          }}
        >
          <CardMedia
            component="img"
            image={im2}
            alt="green iguana"
            sx={{
              maxHeight: 260,
            }}
          />
          <CardContent sx={{ pb: 0, pt: 1, px: 3 }}>
            <Typography
              gutterBottom
              variant="h6"
              fontWeight="bold"
              component="div"
              color="#434242"
              textAlign="center"
            >
              Pizza Capriciossa
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            px: 3,
            py: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="p"
            fontWeight="bold"
            color="#434242"
            fontSize="24px"
          >
            $15
          </Typography>
          <Button
            size="medium"
            sx={{
              backgroundColor: "#af6408",
              color: "#ffffff",
              px: 4,
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#af6408",
                filter: "brightness(1.25)",
              },
            }}
          >
            ORDER
          </Button>
        </CardActions>
      </Card> */}
      {/* Comp 3 */}
      {/* <Card
        sx={{
          width: "100%",
          maxWidth: { xs: 240, sm: 265, lg: 350, xl: 430 },
          mx: { xs: 1, md: 1 },
          mt: 3,
        }}
      >
        <CardActionArea
          sx={{
            filter: "brightness(0.75)",
            "&:hover": {
              filter: "brightness(1)",
            },
          }}
        >
          <CardMedia
            component="img"
            image={im3}
            alt="green iguana"
            sx={{
              maxHeight: 260,
            }}
          />
          <CardContent sx={{ pb: 0, pt: 1, px: 3 }}>
            <Typography
              gutterBottom
              variant="h6"
              fontWeight="bold"
              component="div"
              color="#434242"
              textAlign="center"
            >
              Pizza American Hot
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            px: 3,
            py: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="p"
            fontWeight="bold"
            color="#434242"
            fontSize="24px"
          >
            $15
          </Typography>
          <Button
            size="medium"
            sx={{
              backgroundColor: "#af6408",
              color: "#ffffff",
              px: 4,
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#af6408",
                filter: "brightness(1.25)",
              },
            }}
          >
            ORDER
          </Button>
        </CardActions>
      </Card> */}
    </Box>
  );
}
