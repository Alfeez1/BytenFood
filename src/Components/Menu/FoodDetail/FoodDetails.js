import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuButton from '../../../Fields/MenuButton';
import { useSpring, animated } from 'react-spring';
import { Person as UserIcon, Eco as VeganIcon } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  img: {
    marginTop: theme.spacing(1.7),
    width: '350px',
    height: '350px',
  },
  details: {
    textAlign: 'left',
    margin: '20px 10px 0px 10px',
  },
  title: {
    // fontFamily: 'Arial',
    fontSize: 29,
    fontWeight: 600,
    margin: '0',
    color: '#303030',
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 400,
    color: '#57595A',
    margin: '10px 0',
  },
  spans: {
    backgroundColor: '#ECECEC',
    padding: 3,
    borderRadius: 3,
    margin: '0px 10px 0px 0px',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(5),
  },
  spans2: {
    padding: 3,
    borderRadius: 3,
    boxSizing: 'borderBox',
    border: '1px solid #ECECEC',

    margin: '0px 10px 0px 0px',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(5),
  },
  newButton: {
    fontSize: '20px',
    fontWeight: '600',
    padding: '10px',
    backgroundColor: '#A21219',
    color: '#fffcfc',
    marginBottom: theme.spacing(1.7),
    height: 47,
    border: 'none',
    borderRadius: '7px',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#A21219',
    },
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0px 10px 0px 10px',
  },
}));

function FoodDetails() {
  const classes = useStyles();
  const navigate = useNavigate();
  const topRef = useRef(null);

  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0%)',
    from: { opacity: 0, transform: 'translateY(100%)' },
    delay: 400,
    onRest: () => {
      // scroll to top after animation completes
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    },
  });
  const handleClick = () => {
    console.log('Button clicked');
  };
  return (
    <animated.div
      ref={topRef}
      style={springProps}
      className={classes.animatedContainer}
    >
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <img src="/menu/burger1.png" alt="" className={classes.img} />
        </Grid>
        <Grid item xs={12} className={classes.details}>
          <Typography variant="h4" className={classes.title}>
            GO-Burger 1
            <span
              style={{
                float: 'right',
                fontSize: 18,
                fontWeight: 600,
                paddingTop: '10px',
              }}
            >
              R$ 49,90
            </span>
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            efficitur facilisis velit ut accumsan. In metus felis, fermentum
            vitae volutpat at, ornare nec ligula. Duis velit erat, tincidunt ac
            volutpat sed, faucibus vitae.
          </Typography>{' '}
          <Grid container>
            <Grid item className={classes.spans}>
              <UserIcon style={{ width: 18, height: 18 }} />{' '}
              <Typography style={{ fontSize: 14, fontWeight: 400 }}>
                1
              </Typography>
            </Grid>
            <Grid item className={classes.spans2}>
              <Typography style={{ fontSize: 12, fontWeight: 400 }}>
                1500 cal
              </Typography>
            </Grid>
            <Grid item className={classes.spans}>
              {' '}
              <VeganIcon />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.buttonsContainer}>
          <Button
            className={classes.newButton}
            onClick={() => {
              navigate('/cartlist');
            }}
          >
            Adicionar ao Carrinho
          </Button>
          <MenuButton
            label="Ver em tamanho real"
            style={{ width: '100%' }}
            onClick={handleClick}
          />
        </Grid>
      </Grid>{' '}
    </animated.div>
  );
}

export default FoodDetails;
