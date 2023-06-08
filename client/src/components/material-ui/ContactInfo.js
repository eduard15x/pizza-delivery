import { Fragment } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ContactInfo = () => {
  const contactInfo = [
    {
      name: "Phone",
      val: "+40743423909",
    },
    {
      name: "Email",
      val: "bestintown@pizzeria.com",
    },
    {
      name: "Location 1",
      val: "Via Guantai Nuovi 85, Sorrento, Napoli",
    },
    {
      name: "Location 2",
      val: "Lungodora Napoli 19, Cesuna, Napoli",
    },
    {
      name: "Location 3",
      val: "Viale Maria Cristina di Savoia 55, Pisa, Pisa",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Contact Info */}
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {contactInfo.map((item, index) => (
          <Fragment key={index}>
            <Typography
              component="p"
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: "bold",
                width: { xs: "100%", sm: "40%", lg: "45%" },
                pt: 2,
                pb: 1,
                pr: { sm: 2, md: 4 },
                textAlign: { xs: "center", sm: "end" },
              }}
            >
              {item.name}
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                width: { xs: "100%", sm: "60%", lg: "55%" },
                pl: { sm: 2, md: 4 },
                pt: { sm: 2 },
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              {item.val}
            </Typography>
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};
export default ContactInfo;
