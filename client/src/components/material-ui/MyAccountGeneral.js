import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { convertDate } from "../../utils/convertDate";

const MyAccountGeneral = ({ userData }) => {
  return (
    <Box
        component="ul"
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}
    >
        <Typography component="p" sx={{fontSize: {md: "18px", lg: "20px", xl: "22px"}, fontWeight: "bold"}}>
            Account created date: <span style={{fontWeight: "normal"}}>{convertDate(userData.createdAt)}</span>
        </Typography>
        <Typography component="p" sx={{fontSize: {md: "18px", lg: "20px", xl: "22px"}, fontWeight: "bold"}}>
            Your name: <span style={{fontWeight: "normal"}}>{userData.userName}</span>
        </Typography>
        <Typography component="p" sx={{fontSize: {md: "18px", lg: "20px", xl: "22px"}, fontWeight: "bold"}}>
            Your email: <span style={{fontWeight: "normal"}}>{userData.email}</span>
        </Typography>
        <Typography component="p" sx={{fontSize: {md: "18px", lg: "20px", xl: "22px"}, fontWeight: "bold"}}>
            Your number: <span style={{fontWeight: "normal"}}>{userData.phone}</span>
        </Typography>
        <Typography component="p" sx={{fontSize: {md: "18px", lg: "20px", xl: "22px"}, fontWeight: "bold"}}>
            Total orders: <span style={{fontWeight: "normal"}}>{userData.userOrders.length}</span>
        </Typography>
    </Box>
  );
};

export default MyAccountGeneral;
