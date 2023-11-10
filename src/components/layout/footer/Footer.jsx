
/* const Footer = () => {
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "black", height: "10vh" }}>
        <h4 style={{ color: "white" }}>Este es el footer</h4>
      </div>
    </>
  );
};

export default Footer; */

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} align="center">
            <Typography variant="h6" color="text.primary" gutterBottom>
              Consolas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PS5 <br/> XBOX <br/> PC
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} align="center">
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contacto
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              Email: teopertuso2000@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Teléfono: +59899743316
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4} align="center">
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Redes
            </Typography>
            <Link href="https://www.facebook.com/" color="secondary">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="secondary"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="secondary">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit">
              Mateo Pertuso
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}