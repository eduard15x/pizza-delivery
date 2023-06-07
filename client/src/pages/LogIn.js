import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useLogin } from "../hooks/useLogin";

const LogIn = () => {
  const { login, isLoading, error } = useLogin();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  // destructure object
  const { email, password } = userForm;

  const handleSubmit = async function (e) {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
        Welcome back!
      </Typography>

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
        value={email}
        onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
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
        value={password}
        onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
      />

      <Button
        variant="contained"
        type="submit"
        disabled={isLoading}
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
        Log in
      </Button>
      {error && <p>{error}</p>}
    </Box>
  );
};

export default LogIn;
