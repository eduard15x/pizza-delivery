import Box from "@mui/material/Box";
import StaffList from "../components/material-ui/StaffList";
const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 6, md: 10 },
        pt: { xs: "56px", sm: "64px", md: "68px" },
        pb: { xs: "475px", sm: "325px" },
      }}
    >
      <StaffList />
    </Box>
  );
};

export default AboutUs;
