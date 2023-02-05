import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {/* <Avatar alt="Remy Sharp" src="data:image/png;base64,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" /> */}
          <FaceIcon />
          <b style={{ color: '#474747', marginLeft: 10 }}>Usuario Logado</b>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}