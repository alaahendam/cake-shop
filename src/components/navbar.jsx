import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: pink[700],
    },
    secondary: {
      main: green[500],
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          // Add your custom styles here
          // For example, you can make it look like a normal button
          padding: "8px 16px",
          borderRadius: "4px",
          color: "white",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});
import Link from "next/link";
const pages = ["Products", "About", "Blog", "Contact", "Login"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" style={{ height: "80px" }}>
        <Container maxWidth="xl" sx={{ height: "100%" }}>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Link href="/" className="demo">
              Glorious
            </Link>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <IconButton
                  key={page}
                  sx={{
                    fontSize: "17px",
                  }}
                >
                  <Link href={`/${page.toLocaleLowerCase()}`}>{page}</Link>
                </IconButton>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{
                  fontSize: "17px",
                }}
              >
                <Link href="/signup">Sign Up</Link>
              </IconButton>
              <IconButton
                sx={{
                  fontSize: "17px",
                }}
              >
                ENG
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="success">
                  <Link href="/shop">
                    <ShoppingCartIcon />
                  </Link>
                </Badge>
              </IconButton>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ fontSize: "40px" }} />
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
                {pages.map((page) => (
                  <Button key={page} sx={{ my: 2, display: "block" }}>
                    <Link href={`/${page.toLocaleLowerCase()}`}>{page}</Link>
                  </Button>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
