// TODO - create global state for cart length products icon in navbar
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useLogout } from "../../hooks/useLogout";
import { useAuthenticationContext } from "../../hooks/useAuthenticationContext";

const pages = [
  {
    itemName: "Home",
    href: "/",
  },
  {
    itemName: "Menu",
    href: "/menu",
  },
  {
    itemName: "About us",
    href: "/about-us",
  },
  {
    itemName: "Contact",
    href: "/contact",
  },
];
const settings = ["Account", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const length = JSON.parse(localStorage.getItem("cart")).length;
  const [it, setIt] = useState(length);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { logout } = useLogout();
  const { user } = useAuthenticationContext();
  console.log(user);

  const handleLogout = () => logout();

  return (
    <AppBar
      sx={{
        backgroundColor: "#af6408",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography component="a" href={page.href} textAlign="center">
                    {page.itemName}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                href={page.href}
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 2,
                  color: "white",
                  display: "block",
                  "&:hover": { filter: "brightness(0.85)" },
                }}
              >
                {page.itemName}
              </Button>
            ))}
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open user menu">
                <PersonIcon
                  onClick={handleOpenUserMenu}
                  sx={{
                    cursor: "pointer",
                    fontSize: "30px",
                    mr: 3,
                    "&:hover": { filter: "brightness(0.85)" },
                  }}
                />
              </Tooltip>

              <Menu
                sx={{ mt: "30px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      component="a"
                      textAlign="center"
                      href={setting === "Account" ? "/my-account" : null}
                      onClick={setting === "Logout" ? handleLogout : null}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <>
              <Typography
                component="a"
                href="/login"
                sx={{
                  textAlign: "center",
                  color: "white",
                  "&:hover": { filter: "brightness(0.85)" },
                }}
              >
                Login
              </Typography>
              <Typography
                component="a"
                href="/signup"
                sx={{
                  textAlign: "center",
                  color: "white",
                  mx: 4,
                  "&:hover": { filter: "brightness(0.85)" },
                }}
              >
                Sign up
              </Typography>
            </>
          )}

          <Box sx={{ position: "relative" }}>
            <Tooltip title="Navigate to cart">
              <Typography
                component="a"
                href="/cart"
                sx={{ color: "whitesmoke" }}
              >
                <ShoppingCartIcon
                  sx={{
                    fontSize: "30px",
                    cursor: "pointer",
                    "&:hover": { filter: "brightness(0.85)" },
                  }}
                />
              </Typography>
            </Tooltip>
            <Typography
              component="span"
              sx={{
                position: "absolute",
                top: "-8px",
                right: "-12px",
                fontSize: "10px",
                color: "white",
                border: "2px solid white",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {it}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
