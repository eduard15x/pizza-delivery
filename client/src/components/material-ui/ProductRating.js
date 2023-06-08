import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const ProductRating = () => {
  const value = 3.5;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        my: { md: 0.5 },
        mb: { xl: 2 },
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />}
      />
      <Typography
        component="p"
        sx={{ ml: 1, fontSize: "18px", color: "#6d4009", fontWeight: "bold" }}
      >
        {labels[value]}
      </Typography>
    </Box>
  );
};

export default ProductRating;
