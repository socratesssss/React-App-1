import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link,useNavigate  } from 'react-router-dom';  // <-- Import Link for routing

const drawerWidth = 240;
const navItems = ["Home", "About", "Service", "Project", "Contact"];
const pathItem = ["/", "/about", "/service", "/project", "/contact"];

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const navigate = useNavigate();

    const handleSignUpClick = () => {
      // Navigate to the "Sign Up" page or any other page
      navigate('/signup'); // Replace '/signup' with the actual route
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img
                    src="degic 1.png"
                    alt=""
                    style={{
                        height: "50px",
                        width: "auto",
                        display: "block",
                    }}
                />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <Link to={pathItem[index]} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemText primary={item} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <img
                            src="degic 1.png"
                            alt=""
                            style={{
                                height: "50px",
                                width: "auto",
                                display: "block",
                            }}
                        />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, index) => (
                            <Button key={index} sx={{ color: 'black' }}>
                                <Link to={pathItem[index]} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {item}
                                </Link>
                            </Button>
                        ))}
                         <Button
      variant="outlined"
      sx={{
        color: "#2ab691",
        backgroundColor: "white",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "#2ab666",
          color: 'white',
        }
      }}
      onClick={handleSignUpClick}  // Add event handler for click
    >
      Sign Up
    </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;
