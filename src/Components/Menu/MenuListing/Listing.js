import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  InputBase,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useMediaQuery } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: 0,
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
    fontFamily: 'Inter',
    '&::placeholder': {
      color: theme.palette.text.secondary,
    },
  },
  searchButton: {
    padding: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  menuGrid: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
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
  },
  menuItemImage: {
    height: 105,
    width: 105,
  },
  menuItemName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
    color: '#303030',
    fontFamily: 'Inter',
    marginBottom: theme.spacing(2),
  },
  header: {
    backgroundColor: '#fff',
    boxShadow: 'none',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
}));

function Listing() {
  const classes = useStyles();
  const isSmall = useMediaQuery('(max-width:355px)');
  const navigate = useNavigate();

  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0%)',
    from: { opacity: 0, transform: 'translateY(100%)' },
    delay: 400,
  });
  return (
    <>
      <animated.div
        style={{
          ...springProps,
          top: 0,
          left: 0,
          width: '100%',
        }}
      >
        <Grid className={classes.root}>
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

          <Grid container gap={3} className={classes.menuGrid}>
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
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/foodlist')}
                key={`menu-item-${index}`}
              >
                <Paper className={classes.menuItem}>
                  <img
                    src="/menu/Burguer_Icon.png"
                    alt={`menu item ${index + 1}`}
                    className={classes.menuItemImage}
                  />
                </Paper>
                <Typography
                  variant="subtitle2"
                  className={classes.menuItemName}
                >
                  Menu item {index + 1}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>{' '}
      </animated.div>
    </>
  );
}

export default Listing;
