import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const UserForm = ({ formTitle }) => {
  const pathName = window.location.pathname;
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        mt: 12,
        px: 2,
        pb: { xs: "475px", sm: "325px" },
        minWidth: { xs: "300px", sm: "450px", md: "550px" },
        maxWidth: { sm: "550px" },
      }}
    >
      <Typography
        component="p"
        sx={{
          fontSize: { xs: "20px", sm: "24px", md: "30px" },
          textAlign: "center",
          fontWeight: "bold",
          pb: 3,
        }}
      >
        {formTitle}
      </Typography>
      {/* Name input condition */}
      {pathName === "/signup" ? (
        <>
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
            type="text"
            name="name"
            placeholder="Your name"
          />
        </>
      ) : (
        ""
      )}
      {/* Phone number condition */}
      {pathName === "/signup" ? (
        <>
          <Typography
            component="label"
            sx={{
              fontSize: { xs: "18px", md: "24px" },
              pt: 1.5,
              pb: 0.5,
            }}
          >
            Phone
          </Typography>
          <TextField
            required
            id="outlined-required"
            type="tel"
            name="phone"
            placeholder="Your phone number"
          />
        </>
      ) : (
        ""
      )}
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
        placeholder="Your email"
      />
      <Typography
        component="label"
        sx={{
          fontSize: { xs: "18px", md: "24px" },
          pt: 1.5,
          pb: 0.5,
        }}
      >
        Password
      </Typography>
      <TextField
        required
        id="outlined-required"
        type="password"
        name="password"
        placeholder="Your password"
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
};

export default UserForm;
