import { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/icon-hamburger.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import {Box, Modal,List,ListItem,ListItemButton} from '@mui/material';


import ListItemText from "@mui/material/ListItemText";
import './Navbar.css';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { text: 'Pricing' },
    { text: 'Product' },
    { text: 'About Us' },
    { text: 'Careers' },
    { text: 'Community' },
  ];
  return (
    <nav className='navbar' >
      <div className="navbar-container">
        <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#community">Community</a></li>
      </ul>
      <button className="btn-get-started">Get Started</button>
      </div>
      <div className="navbar-menu-container">
        <button className="navbar-menu-button" onClick={() => setOpen(!open)}
          >
          <img src={open ? closeIcon : menuIcon} alt="Menu" />
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          sx ={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start',paddingTop: '100px',backgroundColor: 'rgba(0, 0, 0, 0.1)'}}
        >
        <Box
            sx={{
              width: 'calc(100% - 40px)',
              maxWidth: '350px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: 24,
              p: 2,

            }}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
        
          <List sx={{width:'100%',padding:0}}>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: 'center',
                    margin: '4px 0',
                    borderRadius: '4px',   
                    '&:hover': {
                      color: 'orange',
                    },
                    }}>
                  <ListItemText
                  primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
        </Box>
      </Modal>
      </div>
    </nav>
  );
};

