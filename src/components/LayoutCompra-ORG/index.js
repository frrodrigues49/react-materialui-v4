// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// import MenuCompra from '../MenuCompra';
// import Breadcrumb from '../Compra/Breadcrumb';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function CenteredGrid( props ) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root} style={{marginTop: 70}}>
//       <Grid container spacing={1}>       
//         {/* <Grid item lg={2} md={12} sm={12} xs={12}>
//             <MenuCompra />          
//         </Grid> */}
//         <Grid item lg={12} md={12} sm={12} xs={12}>
//           {/* <Paper className={classes.paper}>
//             <Breadcrumb />            
//           </Paper> */}

//           <div style={{padding: 20}}>
//             <Breadcrumb />
//           </div>
//           <div style={{height: 500,padding: 20}}>
//             AQUI VAI O DASHBORD
//           </div>
//         </Grid>        
//       </Grid>
//     </div>
//   );
// }