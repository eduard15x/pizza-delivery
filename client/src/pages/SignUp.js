import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {
  const [userForm, setUserForm] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  // destructure the object
  const { userName, email, phone, password } = userForm;
  // we need to invoke the return states and function from the useSignup hook
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async function (e) {
    e.preventDefault();
    await signup(userName, email, phone, password);
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
        Create an account
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
        type="text"
        name="userName"
        placeholder="Your name"
        value={userName}
        onChange={(e) => setUserForm({ ...userForm, userName: e.target.value })}
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
        Phone
      </Typography>
      <TextField
        required
        id="outlined-required"
        type="text"
        name="phone"
        placeholder="Your phone number"
        value={phone}
        onChange={(e) => setUserForm({ ...userForm, phone: e.target.value })}
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
        disabled={isLoading}
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
      {error && <p>{error}</p>}
    </Box>
  );
};

export default SignUp;
