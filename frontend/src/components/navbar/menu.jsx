import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Link, useLocation} from 'react-router';


export default function Menu() {
    const [open, setOpen] = React.useState(true); 

  const handleClick = () => {
    setOpen(!open);
  };
const location = useLocation();
const path = location.path;
  return (
    <>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Football clubs
        </ListSubheader>
      }
    >
     
      <ListItemButton onClick={handleClick} component={Link} to="/" selected={path === '/'}>
        <ListItemIcon>
          <DashboardCustomizeIcon />
        </ListItemIcon>
        <ListItemText primary="All clubs" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              < DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Spain" />
          </ListItemButton>
           <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              < DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Germany" />
          </ListItemButton>
           <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="United kingdom" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Create records
        </ListSubheader>
      }
    >
     
      <ListItemButton component={Link} to="/create" selected={path === '/create'}>
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="create clubs" />
        
      </ListItemButton>
     
    </List>
    </>
  );
}
