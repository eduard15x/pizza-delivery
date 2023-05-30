import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    container: {
      backgroundColor: "#393939",
    },
    text: {
      primary: "#e5e5e5",
      secondary: "#d4d4d4",
    },
  },
});

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{
          backgroundColor: theme.palette.container.backgroundColor,
          p: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: { xs: "flex" },
                justifyContent: { xs: "center" },
                alignItems: { xs: "center", sm: "flex-start" },
                flexDirection: { xs: "column" },
              }}
            >
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: info@example.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              sx={{
                textAlign: { xs: "center", sm: "end" },
                mt: { xs: 4, sm: 0 },
              }}
            >
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ pb: 1 }}>
                Check the news on social media.
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              align="center"
              sx={{
                pt: 6,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {"Copyright © "}
                <Link color="inherit" href="https://your-website.com/">
                  Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
