import React, { useState } from 'react'
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
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material';


function Navbar() {

    const [open , setOpen] = useState(false);

    const Theme = useTheme();
    const isMobile = useMediaQuery(Theme.breakpoints.down("sm"))
    const menuItem = ["About", "Service", "Project", "Contact"] ;

  

return(

    <><AppBar className='Navbar' position='static'  sx={{backgroundColor:"white",  color:"black",boxShadow: "none"}}>

<Toolbar>
{isMobile ? (
    <div>
        <IconButton color='inherit' onClick={()=> setOpen(true)}>

            <MenuIcon/>

        </IconButton>
    </div>
) : (

    <>
    <Typography  sx={{flexGrow: 1, display:"flex", alignItems:"center", }}>
        <img src="degic 1.png" alt=""
        style={{
            height: "50px", // Adjust the height as needed
            width: "auto",  // Keeps aspect ratio
            display: "block",
          }} />

    </Typography>

    {
        menuItem.map((item)=>(
            <Button color='inherit' key={item} >{item}</Button>
        ))
    }
    <Button variant='outlined' sx={{
        color:"#2ab691",
        backgroundColor:"white",
        borderRadius:"10px",
        "&:hover":{
            backgroundColor:"#2ab666",
            color:'white',

        }
    }}>Sign Up</Button>
    
    </>

)
}


</Toolbar>




</AppBar>
<Drawer anchor="left" open={open} onClose={() => setOpen(false)}>

<List>
    {
        menuItem.map((item)=>(
            <ListItem key={item}component="button" color='inherit' onClick={()=> setOpen(false)}>

                <ListItemText>{item}</ListItemText>

            </ListItem>
        ))
    }

    <ListItem component="button"><ListItemText primary="Sign up" /> </ListItem>
</List>
</Drawer>






</>
)


}

export default Navbar



