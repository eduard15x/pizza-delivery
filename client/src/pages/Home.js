import { useState } from "react";
import DemoCarousel from "../components/BannerCarousel";
import RecommendedList from "../components/material-ui/RecommendedList";
import MediaCard from "../components/material-ui/MediaCard";

const Home = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  return (
    <div>
      <DemoCarousel />
      {/* {recommendedProducts.length > 0*/}
      <RecommendedList title="Recommended products" />
      <MediaCard />
      <p onClick={() => setRecommendedProducts([1, 2])}>hello</p>
    </div>
  );
};

export default Home;
