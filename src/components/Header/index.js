import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import {
   AppBar,
   Badge,
   Box,
   Button,
   DialogActions,
   DialogContent,
   IconButton,
   Menu,
   MenuItem,
   Toolbar,
   Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { makeStyles } from '@mui/styles';
import SignIn from 'features/Auth/components/SignIn';
import SignUp from 'features/Auth/components/SignUp';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logout } from 'features/Auth/userSlice';
import MailIcon from '@mui/icons-material/Mail';
import { selectTotalQquant } from 'features/Cart/selectors';
const useStyles = makeStyles({
   header_link: {
      textDecoration: 'none',
      color: 'white',
   },
   open_modal: {
      color: 'red',
   },
});

const Header = (props) => {
   const dispatch = useDispatch();
   const { current } = useSelector((state) => state.user);
   const cartTotal = useSelector(selectTotalQquant);
   const isLoggedIn = !!current.id;
   const classes = useStyles();
   const [open, setOpen] = useState(false);
   const [selectedValue, setSelectedValue] = useState();
   //open auth form
   const handleClickOpen = () => {
      setOpen(true);
   };
   // close auth form
   const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
   };
   const [anchorEl, setAnchorEl] = useState(null);
   const openMenu = Boolean(anchorEl);
   // click on menu
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleCloseMenu = () => {
      setAnchorEl(null);
   };
   const handleLogoutClick = () => {
      const action = logout();
      dispatch(action);
   };
   return (
      <AppBar position='static'>
         <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
               <CodeIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
               HT Shop
            </Typography>
            <NavLink className={classes.header_link} to={'/cart'}>
               <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
                  <Badge badgeContent={cartTotal} color='error'>
                     <MailIcon />
                  </Badge>
               </IconButton>
            </NavLink>
            <NavLink className={classes.header_link} to={''}>
               <Button color='inherit'>Home Page</Button>
            </NavLink>
            <NavLink className={classes.header_link} to={'/products'}>
               <Button color='inherit'>Products</Button>
            </NavLink>
            <NavLink className={classes.header_link} to={'/todo-list'}>
               <Button color='inherit'>Todo List</Button>
            </NavLink>
            <NavLink className={classes.header_link} to={'/photos'}>
               <Button color='inherit'>Photo</Button>
            </NavLink>
            {isLoggedIn ? (
               <>
                  <Button
                     color='inherit'
                     id='basic-button'
                     aria-controls={openMenu ? 'basic-menu' : undefined}
                     aria-haspopup='true'
                     aria-expanded={openMenu ? 'true' : undefined}
                     onClick={handleClick}
                  >
                     <AccountCircleIcon />
                  </Button>
                  {/* <Button>Dashboard</Button> */}
                  <Menu
                     id='basic-menu'
                     anchorEl={anchorEl}
                     open={openMenu}
                     onClose={handleCloseMenu}
                     MenuListProps={{
                        'aria-labelledby': 'basic-button',
                     }}
                  >
                     <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                     <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                     <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                  </Menu>
               </>
            ) : (
               <Button onClick={handleClickOpen} color='inherit'>
                  Sign In
               </Button>
            )}
         </Toolbar>
         <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      </AppBar>
   );
};

Header.propTypes = {};

export default Header;

const SIGN_IN = 'sign_in';
const SIGN_UP = 'sign_up';
function SimpleDialog(props) {
   const [currentForm, setCurrentForm] = useState(SIGN_IN);
   const { onClose, open } = props;
   const handleClose = (event, reason) => {
      if (!(reason === 'escapeKeyDown' || reason === 'backdropClick')) {
         onClose();
      }
   };
   const handleChangeForm = () => {
      setCurrentForm((prevForm) => {
         return prevForm === SIGN_IN ? SIGN_UP : SIGN_IN;
      });
   };
   return (
      <div>
         <Dialog open={open} onClose={handleClose}>
            <DialogActions>
               <Button onClick={handleClose}>
                  <CloseIcon></CloseIcon>
               </Button>
            </DialogActions>
            {/* <DialogTitle textAlign='center'>SignUp Form</DialogTitle> */}
            <DialogContent sx={{ pt: 0 }}>
               {currentForm === SIGN_IN ? (
                  <SignIn onClose={handleClose}></SignIn>
               ) : (
                  <SignUp onClose={handleClose}></SignUp>
               )}
               <Box>
                  <Button
                     onClick={handleChangeForm}
                     type='submit'
                     sx={{ padding: 1.2, mt: 2 }}
                     variant='text'
                     fullWidth
                  >
                     {currentForm === SIGN_IN
                        ? "You don't have acount. => Sign Up now"
                        : 'you already have an account. => Sign In'}
                  </Button>
               </Box>
            </DialogContent>
         </Dialog>
      </div>
   );
}

SimpleDialog.propTypes = {
   onClose: PropTypes.func.isRequired,
   open: PropTypes.bool.isRequired,
};
