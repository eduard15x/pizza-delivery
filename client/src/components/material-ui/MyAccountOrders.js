import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { convertDate } from "../../utils/convertDate";

const MyAccountOrders = ({ userData }) => {
  const userOrdersList = userData.userOrders;

  return (
    <>
      {userOrdersList.length > 0 ? (
        <Box
          component="ul"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {userOrdersList.map((order, index) => (
            <Box
              component="li"
              key={userOrdersList.indexOf(order)}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "48%",
                border: "1px solid #888888",
                borderRadius: "8px",
                p: 1,
                my: 1,
              }}
            >
              <Typography
                component="p"
                sx={{ fontSize: "22px", fontWeight: "bold" }}
              >
                Order nr: {index + 1}
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: { md: "18px", lg: "20px", xl: "22px" },
                  fontWeight: "bold",
                }}
              >
                Order date:{" "}
                <span style={{ fontWeight: "normal" }}>
                  {convertDate(order[0].orderDate)}
                </span>
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: { md: "18px", lg: "20px", xl: "22px" },
                  fontWeight: "bold",
                }}
              >
                Order status:{" "}
                <span style={{ fontWeight: "normal" }}>Delivered</span>
              </Typography>
              <Box component="ul">
                <Typography
                  component="p"
                  sx={{
                    fontSize: { md: "18px", lg: "20px", xl: "22px" },
                    fontWeight: "bold",
                  }}
                >
                  Order details
                </Typography>
                {order.map((item) => (
                  <Box
                    key={order.indexOf(item)}
                    component="li"
                    sx={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <Typography
                      component="p"
                      sx={{
                        mr: { xs: 1.5, lg: 1.5 },
                        fontSize: { md: "18px", lg: "20px", xl: "22px" },
                        width: { md: "190px", lg: "220px", xl: "240px" },
                      }}
                    >
                      Pizza {item.name}{" "}
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        mr: { xs: 1.5, lg: 2.5 },
                        fontSize: { md: "18px", lg: "20px", xl: "22px" },
                      }}
                    >
                      Type - 600g{" "}
                    </Typography>
                    <Typography
                      component="p"
                      sx={{ fontSize: { md: "18px", lg: "20px", xl: "22px" } }}
                    >
                      Price $50{" "}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography
          component="p"
          sx={{ mt: 2, fontSize: { md: "18px", lg: "22px" } }}
        >
          You have no previous orders.
          <br />
          After submiting your first order you can keep track of all of them
          here.
          <br />
          Order's status can be seen here and also the order's number for any
          inconveniences.
        </Typography>
      )}
    </>
  );
};

export default MyAccountOrders;
