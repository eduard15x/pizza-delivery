// TODO - finish things with rendering components
// TODO - check load of page performance and look for optimizations
import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import RecommendedList from "../components/material-ui/RecommendedList";
import MediaCard from "../components/material-ui/MediaCard";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
const allProductsURL = process.env.REACT_APP_ALL_RECOMMENDED_PRODUCTS;
// lazy load component for the carousel to avoid white screen and display a loading circle
const DemoCarousel = lazy(() => import("../components/BannerCarousel"));

const Home = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  async function getRecommendedProducts() {
    try {
      const response = await axios.get(allProductsURL);
      setRecommendedProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecommendedProducts();
  }, []);

  return (
    <Box
      sx={{
        pb: { xs: "475px", sm: "325px" },
        pt: { xs: "56px", sm: "64px", md: "68px" },
      }}
    >
      {/* CarouselComponent */}
      <Suspense
        fallback={
          <CircularProgress
            sx={{
              mt: 3,
              display: "flex",
              margin: "auto",
            }}
          />
        }
      >
        <DemoCarousel />
      </Suspense>
      {/* Recommended List condition */}
      {recommendedProducts.length > 0 ? (
        <RecommendedList recommendedProductsArr={recommendedProducts} />
      ) : (
        <CircularProgress
          sx={{
            mt: 3,
            display: "flex",
            margin: "auto",
          }}
        />
      )}
      {/* Small banners/ad */}
      <MediaCard />
    </Box>
  );
};

export default Home;
