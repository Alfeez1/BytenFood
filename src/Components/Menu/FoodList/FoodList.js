import React, { useEffect, useRef, useState } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  InputBase,
  Grid,
  Paper,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import Drawer from '@mui/material/Drawer';
import { motion } from 'framer-motion';

import { Search } from '@material-ui/icons';
import { useMediaQuery } from '@mui/material';
// import { animated, useTransition } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import FilterFood from './FilterFood';
const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    margin: 0,
    transition: 'transform 0.5s ease-out',
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1.5px solid rgba(37, 37, 37, 0.1)',
    borderRadius: '7px',
    mixBlendMode: 'normal',
    margin: '20px 25px 10px 25px',
    padding: '0 10px',
    height: '32px',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: 400,
    color: '#656565',
    '&::placeholder': {
      color: theme.palette.text.secondary,
    },
  },
  searchButton: {
    padding: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  menuGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(211, 44, 44, 0.8);',
    mixBlendMode: 'normal',
    border: '1px solid rgba(37, 37, 37, 0.1)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    width: 156,
    height: 156,
    cursor: 'pointer',
  },

  menuItemName: {
    textAlign: 'left',
    fontSize: 17,
    fontWeight: 600,
    color: '#303030',

    marginTop: theme.spacing(1),
  },
  menuItemDetails: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 400,
    color: '#B1B2B2',
  },
  menuItemPrice: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 600,
    color: '#303030',
  },
  header: {
    backgroundColor: '#fff',
    boxShadow: 'none',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  FilterText: {
    textAlign: 'end',
    fontSize: 22,
    fontWeight: 600,
    color: '#303030',
  },
  divider: { height: '1.4px', backgroundColor: '#303030' },
  FilterBtn: { textAlign: 'start' },
  FilterBtn1: {
    fontSize: 12,
    fontWeight: 400,
    color: '#303030',
    border: '1px solid rgba(37, 37, 37, 0.1)',
    borderRadius: '7px',
  },
}));

function FoodList() {
  const classes = useStyles();
  const isSmall = useMediaQuery('(max-width:355px)');
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const topRef = useRef(null);

  return (
    <motion.div
      className={classes.root}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      onAnimationComplete={() => {
        document.documentElement.style.width = '100vw';
        document.documentElement.style.height = '100vh';
      }}
    >
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.searchBox}>
          <Search className={classes.searchButton} />
          <InputBase
            placeholder="Pesquisar seção"
            className={classes.searchInput}
            inputProps={{ 'aria-label': 'Search' }}
          />
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={2}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={isSmall ? 6 : 4} sm={4}>
          <Typography className={classes.FilterText} style={{}}>
            Burgers
          </Typography>
        </Grid>
        <Grid
          item
          xs={isSmall ? 2 : 5}
          sm={4}
          style={{ alignSelf: 'flex-end' }}
        >
          {' '}
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={isSmall ? 4 : 3} sm={4} className={classes.FilterBtn}>
          <Button
            className={classes.FilterBtn1}
            onClick={() => {
              setDrawerOpen(true);
            }}
          >
            Filtrar
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.menuGrid}>
        {[...Array(8)].map((_, index) => (
          <Grid
            item
            xs={isSmall ? 12 : 6}
            md={6}
            lg={3}
            style={{
              justifyContent: 'center',
              margin: 10,
              flexBasis: '0',
              position: 'relative',
            }}
            onClick={() => navigate('/fooddetails')}
            key={`menu-item-${index}`}
          >
            <Paper className={classes.menuItem}>
              <img
                src="/menu/burger1.png"
                alt={`menu item ${index + 1}`}
                className={classes.menuItemImage}
              />{' '}
              <img
                src="/icons/AR.svg"
                alt="burger-icon"
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  width: 30,
                  height: 30,
                }}
              />
            </Paper>
            <Typography variant="subtitle2" className={classes.menuItemName}>
              GO-Burger{index + 1}
            </Typography>
            <Typography variant="subtitle2" className={classes.menuItemDetails}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </Typography>
            <Typography variant="subtitle2" className={classes.menuItemPrice}>
              R$ 49,90
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
        style={{
          borderRadius: '20px 20px 0 0',
          height: isSmall ? '70vh' : '40vh',
        }}
      >
        <FilterFood onClose={() => setDrawerOpen(false)} />
      </Drawer>
    </motion.div>
  );
}

export default FoodList;
