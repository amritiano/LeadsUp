import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './menu';
import ShortMenu from './shortmenu';
import logo from '../../assets/logo.png'; 
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
const drawerWidth = 240;
const shortdrawerWidth = 80;
export default function Navbar({content}) {

  const[isbigmenu, setIsBigMenu] =useState(true);
  const toggleMenu = () => {
    setIsBigMenu(!isbigmenu);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
         <IconButton marginRight='30px' color='white' onClick={toggleMenu}>
          {isbigmenu ? <MenuOpenIcon /> : <MenuIcon />}
         </IconButton>
         <img src={logo} width={"5%"} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent" 
        sx={{
          width:isbigmenu ? drawerWidth : shortdrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: isbigmenu ? drawerWidth : shortdrawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        {isbigmenu ? <Menu /> : <ShortMenu />}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
       {content}
      </Box>
    </Box>
  );
}
