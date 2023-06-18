import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const updateUserDataURL = process.env.REACT_APP_UPDATE_USER_DATA;

const MyAccountSettings = ({ userData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userForm, setUserForm] = useState({
    userName: userData.userName,
    email: userData.email,
    phone: userData.phone,
  });
  // destructure object
  const { userName, email, phone } = userForm;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .patch(updateUserDataURL + userData._id, userForm)
      .then((response) => {
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 2,
        minWidth: { xs: "300px", sm: "400px" },
        maxWidth: { sm: "400px" },
      }}
    >
      {/* User Name */}
      <Typography
        component="label"
        sx={{
          fontSize: { xs: "18px", md: "24px" },
          pt: 1.5,
          pb: 0.5,
        }}
      >
        User Name
      </Typography>
      <TextField
        required
        id="outlined-required"
        type="tex\"
        name="userName"
        placeholder="Your name"
        value={userName}
        onChange={(e) => setUserForm({ ...userForm, userName: e.target.value })}
      />
      {/* <Typography
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
      /> */}
      {/* Email */}
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
      {/* Phone number */}
      <Typography
        component="label"
        sx={{
          fontSize: { xs: "18px", md: "24px" },
          pt: 1.5,
          pb: 0.5,
        }}
      >
        Phone Number
      </Typography>
      <TextField
        required
        id="outlined-required"
        type="tel"
        name="phone"
        placeholder="Your phone number"
        value={phone}
        onChange={(e) => setUserForm({ ...userForm, phone: e.target.value })}
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
        Save new data
      </Button>
      {error && <p>{error}</p>}
    </Box>
  );
};

export default MyAccountSettings;
