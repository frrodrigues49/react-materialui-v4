import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Breadcrumbs,
  Grid,
  Link
} from '@material-ui/core';

import Menu from '@/components/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  const classes = useStyles();


  return (

    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}  >
          <Menu />
        </Grid>
        <Grid item xs={6}>
          <Breadcrumbs separator="›" aria-label="breadcrumb" sm={12}>
            <Link color="inherit" href="/" onClick={handleClick}>
              Compra
            </Link>
            <Link color="inherit" href="/" onClick={handleClick}>
              Index
            </Link>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </div>
  );
}