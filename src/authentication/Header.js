import CodeIcon from '@mui/icons-material/Code';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
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
   const classes = useStyles();
   return (
      <AppBar position='static'>
         <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
               <CodeIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
               HT Shop
            </Typography>
            <NavLink className={classes.header_link} to={''}>
               <Button color='inherit'>Login</Button>
            </NavLink>
         </Toolbar>
      </AppBar>
   );
};

Header.propTypes = {};

export default Header;
