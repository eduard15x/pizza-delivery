// TODO - split code
// TODO - create form for user information update in account settings
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
// child components
import MyAccountGeneral from "../components/material-ui/MyAccountGeneral";
import MyAccountOrders from "../components/material-ui/MyAccountOrders";
import MyAccountSettings from "../components/material-ui/MyAccountSettings";
const singleUserURL = process.env.REACT_APP_SINGLE_USER;

const MyAccount = () => {
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));
  const accountTabsList = ["general", "orders", "settings"];
  const [currentItem, setCurrentItem] = useState(accountTabsList[0]);
  const [userData, setUserData] = useState(null);
  const [responseStatus, setResponseStatus] = useState(false);
  const [error, setError] = useState("");

  const handleTabChange = (tab) => {
    setCurrentItem(tab);
  };

  const getUserData = (email) => {
    axios
      .get(singleUserURL + email)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.err);
        setResponseStatus(true);
      });
  };

  useEffect(() => {
    getUserData(userLocalStorage.email);
  }, [userLocalStorage.email]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "auto",
        maxWidth: { md: "900px", lg: "1200px", xl: "1536px" },
        px: { xs: 2, sm: 6, md: 2 },
        pt: { xs: "56px", sm: "64px", md: "68px" },
        pb: { xs: "475px", sm: "325px" },
      }}
    >
      <Typography
        gutterBottom
        component="h2"
        sx={{
          color: "#434242",
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: "bold",
          pt: { xs: 1, sm: 3 },
          mb: 0,
        }}
      >
        Our Story
      </Typography>
      <Box
        component="ul"
        sx={{
          display: "flex",
        }}
      >
        {/* Tab list */}
        {accountTabsList.map((item) => (
          <Typography
            key={accountTabsList.indexOf(item)}
            gutterBottom
            component="li"
            sx={{
              color: currentItem === item ? "#434242" : "#888888",
              cursor: "pointer",
              fontSize: { xs: "16px", md: "18px", lg: "20px" },
              textTransform: "capitalize",
              mr: { xs: 1, sm: 2.5 },
              borderBottom: currentItem === item ? "1px solid #434242" : "none",
            }}
            onClick={(e) => handleTabChange(item)}
          >
            {item}
          </Typography>
        ))}
      </Box>
      {/* Specific component for current tab */}
      {userData !== null ? (
        <>
          {userData !== null && currentItem === "general" ? (
            <MyAccountGeneral userData={userData} />
          ) : userData !== null && currentItem === "orders" ? (
            <MyAccountOrders userData={userData} />
          ) : (
            <MyAccountSettings userData={userData} />
          )}
        </>
      ) : (
        <>
          {responseStatus === false ? (
            <CircularProgress
              sx={{
                display: "flex",
                margin: "auto",
              }}
            />
          ) : (
            <Typography
              component="p"
              sx={{ mt: 2, fontSize: { md: "18px", lg: "22px" } }}
            >
              {error}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default MyAccount;
