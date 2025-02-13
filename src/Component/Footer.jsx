import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Typography, Link, Container, Grid, IconButton, Grid2 } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";


function Footer() {
    const FooterData = [
        {
            Title:"Home",
            links:[ "About Us", "Careers", "Press", "Blog"]

        },
        {
            Title:"Products",
            links:[ "Design Systems",


               " Themes & Templates",
                
               " Mockups",
                
                "Presentations",
                
                "Wireframes Kits",
                
               " UI Kits"]

        },
        {
            Title:"Legals",
            links:["License",

               " Refund Policy",
                
                "About Us",
                
                "Contacts"]

        },
        {
            Title:"Blog",
            links:["Business Stories",

                "Digital Store",
                
               " Learning",
                
              "Social Media"]

        },
    ]

    const SocialIconn = [
        {icon: <FacebookIcon/>, href:"#" },
        {icon: <InstagramIcon/>, href:"#" },
        {icon: <TwitterIcon/>, href:"#" }
    ]
  return (

    <Box sx={{ backgroundColor:"#000",color:"#fff", py:"4" }}>
      <Container maxWidth="lg">
   <Grid container borderBottom={1} spacing={4}>

   <Grid item xs={7} md={3}>
            <Typography><img src="degic(1) 1.png" alt=""  /></Typography>

        </Grid>

        {

            FooterData.map((Data,index)=>(
                <Grid item md={2} xs={6}
                 key={index}>
                   < Typography>
                   {Data.Title}
                   
                   </Typography>

                   < Typography>
                   {Data.links.map((link, linkIndex)=>(
                    <Box key={linkIndex}>
                        <Link href="#" underline='none' color='inherit' display="block" sx={{my:1}}>
                        {link}
                        </Link>

                    </Box>



                   ))}
                   
                   </Typography>

                </Grid>
            ))


        }
   </Grid>
   <Box py={2} display='flex'  sx={{justifyContent:"space-between",  alignItems:"center"}} gap={2} >
    <Typography
>
Copyright Degic ©{new Date().getFullYear()}
    </Typography>
       <Box>

       {
       SocialIconn.map((social,socialIndex)=>(
            <IconButton key={socialIndex} color='inherit'>
                {social.icon}
            </IconButton>

        ))
    }
       </Box>


   </Box>


      </Container>

    </Box>
   
);
  
    
  
}

export default Footer