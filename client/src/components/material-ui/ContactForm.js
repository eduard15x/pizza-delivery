import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactForm() {
  return (
    <Box
      component="form"
      action="https://formsubmit.co/precupeduard99@gmail.com"
      method="POST"
      sx={{
        display: "flex",
        flexDirection: "column",
        px: { xs: 1, md: 3 },
        my: 8,
        py: 3,
        minWidth: { xs: "300px", sm: "450px", md: "600px" },
        maxWidth: { md: "600px" },
        borderTop: "3px solid #af6408",
      }}
    >
      <input type="hidden" name="_subject" value="Email from Pizza Eduardo" />
      <input
        type="hidden"
        name="_next"
        value="https://www.youtube.com/watch?v=vN4Vc9T8QQc&ab_channel=Hollts"
      />
      <Typography
        component="p"
        sx={{
          fontSize: { xs: "20px", sm: "24px", md: "30px" },
          textAlign: "center",
          fontWeight: "bold",
          pb: 3,
        }}
      >
        Get in touch with us
      </Typography>
      <Typography
        component="label"
        sx={{
          fontSize: { xs: "18px", md: "24px" },
          pb: 0.5,
        }}
      >
        Name
      </Typography>
      <TextField
        required
        id="outlined-required"
        name="name"
        placeholder="Your name"
      />
      <Typography
        component="label"
        sx={{
          fontSize: { xs: "18px", md: "24px" },
          pt: 1.5,
          pb: 0.5,
        }}
      >
        Email
      </Typography>
      <TextField
        required
        id="outlined-required"
        type="email"
        name="email"
        placeholder="example@yahoo.com"
      />
      <Typography
        component="label"
        sx={{
          fontSize: { xs: "18px", md: "24px" },
          pt: 1.5,
          pb: 0.5,
        }}
      >
        Message
      </Typography>
      <TextField
        required
        id="outlined-multiline-static"
        name="message"
        multiline
        inputProps={{ maxLength: 150 }}
        placeholder="Write your message..."
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          mt: 3,
          py: 1,
          fontSize: "18px",
          backgroundColor: "#af6408",
          "&:hover": {
            backgroundColor: "#af6408",
          },
          "&:active": {
            transform: "scale(1)",
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
