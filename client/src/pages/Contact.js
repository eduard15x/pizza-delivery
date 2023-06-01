import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactInfo from "../components/material-ui/ContactInfo";
import ContactForm from "../components/material-ui/ContactForm";

const Contact = () => {
  return (
    // formsubmit.co
    <Box
      sx={{
        px: { sx: 2, sm: 4, md: 8, xl: 16 },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pb: { xs: "475px", sm: "325px" },
        pt: { xs: "56px", sm: "64px", md: "68px" },
      }}
    >
      <Typography
        component="p"
        sx={{
          fontSize: { xs: "20px", sm: "22px", md: "26px" },
          textAlign: "center",
          fontWeight: "bold",
          pt: { xs: 3, sm: 3 },
          pb: { xs: 1, sm: 2 },
        }}
      >
        Below, you can find our contact information
      </Typography>
      {/* Contact Info Component */}
      <ContactInfo />
      {/* Contact Form */}
      <ContactForm />
    </Box>
  );
};

export default Contact;
