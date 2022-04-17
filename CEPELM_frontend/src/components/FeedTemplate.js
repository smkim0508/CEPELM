import React, { useRef, useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import WritePost from './WritePost';
import Grid from '@mui/material/Grid';
import { positions } from '@mui/system';




const pages = ['Community', 'Find-Match', 'Photo-Recovery'];
const settings = ['Profile', 'Settings', 'Logout'];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 1,
  p: 0,
};


const FeedTemplate = ({children}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
    console.log("sth was clicked!");
    setAnchorElUser(null);
  };

  

  //setCookie('user', {userName: 'jefflee0127', userId : 1, isLogin: false}, { path: '/' });
  //console.log(cookies.user==undefined);

  
  var accountButton;
  var floatingButton; 
  if(cookies.user==undefined){
    accountButton = 
    <Button
    onClick={handleCloseNavMenu}
    sx={{ my: 2, color: 'white', display: 'block' }}
  >
    <Link to={'/Signin'}>Sign In</Link>
  </Button>
  }

  else 
  {
    if(cookies.user.isLogin) {
      accountButton = <Box sx={{ display: { flexGrow: 0 }}}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="user pfp" src="avatar2.png" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseNavMenu}>
            <Link to={`/`+setting}>
              <Typography textAlign="center">{setting}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>

    console.log("Current Location is : "+window.location.href);

    if(window.location.href == 'http://localhost:3001/Community' || window.location.href == 'http://localhost:3001/') {
      floatingButton = <Fab color="secondary" aria-label="edit" onClick={handleOpen}>
        <EditIcon />
      </Fab>
    }
    }
    else {
      accountButton = <Button
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      <Link to={'/Signin'}>Sign In</Link>
    </Button>
    }
  
  }
  
  /*
  useEffect(() => {
    console.log('component on screen');
    return () => {
      console.log('component not on screen');
    };
  }, []);
  */

  return (
    <div>
    <AppBar position="static" sx={{backgroundColor: 'info.main'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2,display: { xs: 'none', md: 'flex' } }}
          >
              CEPELM Adoptee Network
          </Typography>

          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            CEPELM Adoptee Network
          </Typography>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={`/`+page}>{page}</Link>
              </Button>
            ))}
          </Box>

          {accountButton}
        </Toolbar>
      </Container>
    </AppBar>

      <Box sx={{ display: 'flex', flexDirection: 'row'}}>
        <Box
          sx={{
            width: 300,
            height: 300
          }}
        >
          <Box sx={{ml: 10, position: 'fixed'}}>
            <br/>

            {floatingButton}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                  <WritePost/>
                </Box>
            </Modal>
          </Box>
        </Box> 
        <Container maxWidth="lg" fixed={true}>
            <Box sx={{ flexGrow: 1, backdisplay: { xs: 'none', md: 'flex' }, margin: 'auto'}}>
              {children}
            </Box>
        </Container>
        <Box
          sx={{
            width: 300,
            height: 300,
          }}
        >
        </Box>
      </Box>

     

    

    

    
    </div>
  );
};
export default FeedTemplate;