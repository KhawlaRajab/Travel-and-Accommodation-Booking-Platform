import { AppBar, Toolbar, Box, Typography, Button, styled, IconButton, Stack, Drawer, List, ListItem, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import { useState } from "react";


const StyledIconButton = styled(IconButton)(({ theme }) => ({
    '&:focus': {
      outline: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none', 
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block', 
    },
  }));

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const toggleDrawer = (isOpen:boolean) => {
        setOpen(isOpen);
    }
    const drawerItems = [
        { label: "Cities", path: "/Cities" },
        { label: "Hotels", path: "/Hotels" },
        { label: "Rooms", path: "/Rooms" },
      ];
    
    return (
    <>
       <AppBar position="fixed">

         <Toolbar >
            <Box sx={{display:'flex',alignItems: 'center', flexGrow: 1, justifyContent:'space-between'  }}>               
                <Stack direction={'row'} alignItems={'center'} spacing={1} >
                    <StyledIconButton edge='end' onClick={()=>toggleDrawer(!open)}>
                        <MenuIcon sx={{color:'white',fontSize:'30px'}} />
                    </StyledIconButton>        
                   <Typography variant="h6" component='span' sx={{ paddingRight: '130px' }}>
                    TravelZ
                    </Typography>
               
                  <Box sx={{ display: { xs: 'none',md:'flex'}}}>     
                    <Button color='inherit' onClick={()=>navigate('/Cities')}>Cities</Button>
                    <Button color='inherit' onClick={() => navigate('/Hotels')}>Hotels</Button>
                    <Button color='inherit' onClick={() => navigate('/Rooms')}>Rooms</Button>
                   </Box>  
                 </Stack>               
                  <Button color='inherit' onClick={()=>navigate('/')} sx={{left:'10px'}}>logout</Button>            
            </Box>     
         </Toolbar>
       </AppBar>
       <Drawer anchor="left" open={open} onClose={()=>toggleDrawer(false)}>
          <Box sx={{ width: 250 ,textAlign:'center', paddingTop:2}}>
                <Typography variant="h6"  marginBottom={2}>TravelZ</Typography>
                <Divider/>
                <List>
                  {drawerItems.map((item) => (
                   <ListItem sx={{textAlign:'center'}}  key={item.label} onClick={() => navigate(item.path)}>
                   <ListItemText primary={item.label} />
                   </ListItem>
                  ))}
                </List>
            </Box>
      </Drawer>     
    </>             
    )
}

export default Navbar;