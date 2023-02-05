import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


import PerfilUsuario from '../PerfilUsuario';
import menucompra from '../../config/menucompra.json';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,    
  },
  list: {
    width: 250,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  fullList: {
    width: 'auto',
  },
}));



export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Typography variant="h6" style={{ textAlign: 'center' }} className={classes.title}>
        Modulo de Compras
      </Typography>
      <Divider />
      <List>
        {menucompra.map((item, index) => (
          <ListItem button key={item.id} component={Link} to={item.link}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={item.menu} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Sair'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" onClick={toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/home"  color="inherit" >Nome do Sistema</Link>
            {/* <Button component={Link} to="home">Nome do Sistema</Button> */}
          </Typography>
          <Button color="inherit" style={{ fontSize: 10 }}>
            {/* <span style={{ marginRight: 10 }}>Empresa Logada</span> */}            
            <PerfilUsuario style={{ marginLeft: 10 }} />
          </Button>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>

    </div>
  );
}
