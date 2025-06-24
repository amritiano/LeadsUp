import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {Link, useLocation} from 'react-router';


export default function ShortMenu() {

const location = useLocation();
const path = location.path;
  return (
    <>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >

      <ListItemButton component={Link} to="/" selected={path === '/'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ListItemIcon sx={{ minWidth: 'unset', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <DashboardCustomizeIcon />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton component={Link} to="/create" selected={path === '/create'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ListItemIcon sx={{ minWidth: 'unset', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AddBoxIcon />
        </ListItemIcon>
      </ListItemButton>
     
    </List>
    </>
  );
}
