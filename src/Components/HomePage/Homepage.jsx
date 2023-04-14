/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box, Grid, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import MenuButton from '../../Fields/MenuButton';
const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 20px 10px 20px',
  },
  gridContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  gridItem: {
    width: '301px',
    height: '251px',
    backgroundColor: '#A21219',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  logoImg: {
    maxWidth: '70%',
    maxHeight: '70%',
  },
  mainHeading: {
    fontSize: '30px',
    fontWeight: '700',
    color: '#4D4D4D',
  },
  subHeading: {
    fontSize: '50px',
    fontWeight: '700',
    color: '#A21219',
  },
  paragraph: {
    fontSize: '18px',
    fontWeight: '700',
    // marginBottom: theme.spacing(1),
    color: '#4D4D4D',
    textAlign: 'center',
    alignItems: 'center',
    // width: '90%',
    margin: '10px 40px 25px 40px',
  },

  smallLogo: {},
}));

function HomePage() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Container maxWidth="sm" className={classes.container}>
        <Box className={classes.gridContainer}>
          <Box className={classes.gridItem}>
            <img
              src="/logo/BYTENFOOD_Branco.png"
              alt="Logo"
              className={classes.logoImg}
            />
          </Box>
        </Box>
        <Typography align="center" className={classes.mainHeading}>
          Bem-vindo ao
        </Typography>
        <Typography align="center" className={classes.subHeading}>
          Byte 'n Food
        </Typography>
        <Typography className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          efficitur facilisis velit ut accumsan.
        </Typography>
        <Button
          style={{
            width: '80%',
            fontSize: '24px',
            fontWeight: '700',
            height: '60px',
            color: '#A21219',
            textTransform: 'none',
            boxSizing: 'border-box',
            backgroundColor: '#F8F8F8',
            border: '1px solid rgba(37, 37, 37, 0.1)',
            borderRadius: '7px',
            boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
            marginBottom: 8,
          }}
          onClick={() => navigate('/menu')}
        >
          Ver cardápios
        </Button>
        <Grid container justifyContent="center" className={classes.smallLogo}>
          <Grid item>
            <img src="/logo/Go-it.svg" alt="Small Logo" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
