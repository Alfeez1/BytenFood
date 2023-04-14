import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import MenuButton from '../../Fields/MenuButton';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  animatedContainer: {
    height: '90vh', // full width of the container
  },
  title: {
    fontSize: 34,
    fontWeight: 400,
    color: '#B91C1C',
    fontFamily: 'Inter',
    marginTop: theme.spacing(4),
  },
  subtitle: {
    fontSize: 55,
    fontWeight: 700,
    color: '#303030',
    fontStyle: 'normal',
    marginBottom: theme.spacing(3),
  },
  smallLogo: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
}));

function HomePage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0%)',
    from: { opacity: 0, transform: 'translateY(100%)' },
    delay: 400,
  });
  const handleBreakfastClick = () => {
    navigate('/list');
  };

  const handleLunchClick = () => {
    navigate('/list');
  };

  const handleDinnerClick = () => {
    navigate('/list');
  };
  return (
    <Container maxWidth="sm" className={classes.container}>
      <div>
        <animated.div style={springProps} className={classes.animatedContainer}>
          <Grid>
            <Typography variant="h5" className={classes.title}>
              Escolha um
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              CARDÁPIO:
            </Typography>
            <Box
              style={{
                padding: '0px 25px 0px 25px',
              }}
            >
              <MenuButton label="Principal" onClick={handleBreakfastClick} />
              <MenuButton label="Kids" onClick={handleLunchClick} />
              <MenuButton label="Natal" onClick={handleDinnerClick} />
            </Box>
          </Grid>
          <Grid className={classes.smallLogo}>
            <img src="/logo/Go-it.svg" alt="Small Logo" />
          </Grid>
        </animated.div>
      </div>
    </Container>
  );
}

export default HomePage;
