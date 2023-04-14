import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Box,
} from '@material-ui/core';
import {
  Delete,
  Person as UserIcon,
  Eco as VeganIcon,
} from '@material-ui/icons';
import { useSpring, animated } from 'react-spring';
import { ArrowBack, Add, Remove } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  headerText: {
    flexGrow: 1,
    color: '#00000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  headerText1: {
    flexGrow: 1,
    color: '#A21219',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
  },
  clearText: {
    textAlign: 'right',
    color: ' #A21219',
    fontSize: 14,
    fontWeight: '400',
  },
  cardRoot: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 94,
    height: 78,
    borderRadius: 7,
    marginTop: 10,
  },
  cardMedia1: {
    width: 105,
    height: 78,
    borderRadius: 7,
    marginTop: 10,
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  quantityButton: {
    // minWidth: 30,p
    padding: 0,
    borderRadius: 4,
    backgroundColor: '#ececec',
    height: 25,
    width: 25,
    '&:hover': {
      backgroundColor: '#ececec',
    },
  },
  quantityButton1: {
    borderRadius: 4,
    backgroundColor: '#A21219',
    height: 25,
    width: 25,
    '&:hover': {
      backgroundColor: '#A21219',
    },
  },
  total: {
    textAlign: 'right',
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  spans: {
    backgroundColor: '#ECECEC',
    padding: 3,
    borderRadius: 3,
    margin: '0px 5px 0px 0px',
    display: 'flex',
    flexDirection: 'row',
    height: 20,
  },
  spans2: {
    padding: 3,
    borderRadius: 3,
    boxSizing: 'borderBox',
    border: '1px solid #ECECEC',
    margin: '0px 5px 0px 0px',
    display: 'flex',
    flexDirection: 'row',
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2223    ',
  },
}));

const CartListingPage = () => {
  const classes = useStyles();
  const topRef = useRef(null);
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Big GO-Burger',
      image: '/menu/Burguer_Icon.png',
      price: 10.99,
      users: 5,
      cal: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Smash GO-Burger',
      image: '/menu/burger1.png',
      price: 5.99,
      users: 2,
      cal: 50,
      quantity: 2,
    },
    {
      id: 3,
      name: 'New GO-Burger',
      image: '/menu/burger1.png',
      price: 5.99,
      users: 2,
      cal: 50,
      quantity: 2,
    },
  ]);
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
  const handleQuantityChange = (productId, value) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, index) =>
        product.id === productId
          ? { ...product, quantity: Math.max(product.quantity + value, 1) }
          : product
      )
    );
  };
  function handleDeleteProduct(productId) {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  }

  const total = products.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return (
    <animated.div
      style={springProps}
      ref={topRef}
      className={classes.animatedContainer}
    >
      {' '}
      <Box style={{ padding: '13px 20px 0px 20px' }}>
        <Grid container alignItems="center" style={{ marginBottom: '20px' }}>
          <Grid item>
            <IconButton edge="start" aria-label="back">
              <ArrowBack />
            </IconButton>
          </Grid>
          <Grid item xs>
            <Typography variant="h6" className={classes.headerText}>
              Seu pedido
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" className={classes.clearText}>
              Limpar
            </Typography>
          </Grid>
        </Grid>

        {products.map((product, index) => (
          <Grid key={index}>
            <Grid
              container
              direction="row"
              alignItems="center"
              style={{
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'space-between',
              }}
              // spacing={2}
            >
              <Grid item style={{ position: 'relative' }}>
                {' '}
                <div style={{ position: 'relative' }}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.name}
                  />{' '}
                  <img
                    src="/icons/augmented-reality 1.svg"
                    alt="burger-icon"
                    style={{
                      position: 'absolute', // Position the image inside the div
                      top: 7,
                      right: 7,
                      width: 14,
                      height: 14,
                      backgroundColor: '#ECECEC',
                      borderRadius: 5,
                      padding: 2,
                    }}
                  />
                </div>
              </Grid>
              <Grid
                item
                style={{
                  padding: '3px 0px 0px 8px',
                  textAlign: 'left',
                  marginRight: 'auto',
                  marginLeft: 0,
                }}
              >
                <Grid container direction="column">
                  <Grid item>
                    <Typography
                      style={{
                        color: ' #1F2223',
                        fontSize: 18,
                        fontWeight: 600,
                      }}
                    >
                      {product.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      style={{
                        color: ' #1F2223',
                        fontSize: 15,
                        fontWeight: 600,
                        marginBottom: 3,
                      }}
                    >
                      ${product.price}
                    </Typography>
                  </Grid>
                  <Grid container>
                    <Grid item className={classes.spans}>
                      <UserIcon style={{ width: 12, height: 12 }} />{' '}
                      <Typography style={{ fontSize: 10, fontWeight: 400 }}>
                        {product.users}
                      </Typography>
                    </Grid>{' '}
                    <Grid item className={classes.spans2}>
                      <Typography
                        style={{
                          fontSize: 11,
                          fontWeight: 400,
                          color: '#A21219',
                        }}
                      >
                        {product.cal} cal
                      </Typography>
                    </Grid>
                    <Grid item className={classes.spans}>
                      {' '}
                      <VeganIcon style={{ width: 12, height: 12 }} />
                    </Grid>
                  </Grid>
                </Grid>{' '}
              </Grid>
              <Grid item style={{ padding: 0 }}>
                <Grid
                  container
                  style={{
                    flexWrap: 'unset',
                    justifyContent: 'flex-end',
                    padding: 0,
                  }}
                  alignItems="center"
                >
                  {' '}
                  {product.quantity === 1 ? (
                    <Grid item>
                      <IconButton
                        aria-label="delete product"
                        className={classes.quantityButton}
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Delete style={{ fontSize: 21, color: '#A21219' }} />
                      </IconButton>
                    </Grid>
                  ) : (
                    <Grid item>
                      <IconButton
                        aria-label="decrease quantity"
                        className={classes.quantityButton}
                        onClick={() => handleQuantityChange(product.id, -1)}
                      >
                        <Remove style={{ fontSize: 21, color: '#A21219' }} />
                      </IconButton>
                    </Grid>
                  )}
                  <Grid item>
                    <span
                      style={{
                        margin: '0px 7px 0px 7px',
                        fontSize: 16,
                        fontWeight: 500,
                        color: '#A21219',
                      }}
                    >
                      {product.quantity}
                    </span>
                    <IconButton
                      aria-label="increase quantity"
                      className={classes.quantityButton1}
                      onClick={() => handleQuantityChange(product.id, 1)}
                    >
                      <Add
                        style={{
                          fontSize: 21,
                          color: '#ffffff',
                          backgroundColor: '#A21219',
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>{' '}
            </Grid>{' '}
            <Divider
              variant="middle"
              style={{ margin: '8px 0', border: 'none' }}
            />{' '}
          </Grid>
        ))}
        <Grid
          container
          spacing={2}
          direction="column"
          style={{ marginTop: '20px' }}
        >
          <Grid
            item
            xs={12}
            style={{
              backgroundColor: '#D9D9D980',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '8px 20px',
              margin: '0px 10px 10px 10px',
              borderRadius: '7px',
            }}
          >
            <Typography
              variant="subtitle1"
              style={{ color: '#1F2223', fontSize: 16, fontWeight: 600 }}
            >
              Total do pedido:
            </Typography>{' '}
            <Typography
              style={{ color: '#0000000', fontSize: 16, fontWeight: 600 }}
            >
              R$ {total.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Button
              onClick={() => {
                navigate('/foodlist');
              }}
              style={{
                backgroundColor: '#A21219',
                borderRadius: '7px',
                height: '40px',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: 16,
                textTransform: 'none',
              }}
              fullWidth
            >
              Adicionar mais itens
            </Button>
          </Grid>
        </Grid>
        <Box
          style={{
            backgroundColor: '#f1f1f1',
            borderRadius: 10,
            padding: 13,
            marginTop: 15,
          }}
        >
          <Typography variant="h6" className={classes.headerText1}>
            Complemente seu pedido{' '}
          </Typography>
          <Grid container spacing={2} style={{ marginTop: '5px' }}>
            {products.map((product, index) => (
              <Grid
                item
                xs={4}
                key={index}
                style={{ textAlign: '-webkit-center' }}
              >
                <Card>
                  {' '}
                  <div style={{ position: 'relative' }}>
                    <CardMedia
                      className={classes.cardMedia1}
                      image={product.image}
                      title={product.name}
                    />{' '}
                    <img
                      src="/icons/augmented-reality 1.svg2"
                      alt="burger-icon"
                      style={{
                        position: 'absolute',
                        top: 5,
                        right: 10,
                        width: 14,
                        height: 14,
                        backgroundColor: '#ECECEC',
                        borderRadius: 5,
                        padding: 2,
                        zIndex: 1,
                      }}
                    />
                  </div>
                  <CardContent
                    style={{ padding: '4px 7px 7px 12px', textAlign: 'start' }}
                  >
                    <Grid>
                      {' '}
                      <Typography className={classes.cardText}>
                        {product.name}
                      </Typography>{' '}
                    </Grid>

                    <Grid container>
                      <Grid item className={classes.spans}>
                        <UserIcon style={{ width: 12, height: 12 }} />{' '}
                        <Typography style={{ fontSize: 10, fontWeight: 400 }}>
                          {product.users}
                        </Typography>
                      </Grid>{' '}
                      <Grid item className={classes.spans}>
                        {' '}
                        <VeganIcon style={{ width: 12, height: 12 }} />
                      </Grid>
                    </Grid>
                    <Typography className={classes.cardText}>
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box style={{ backgroundColor: '#F1F1F1', padding: 10, marginTop: 9 }}>
          <Grid>
            <Button
              className={classes.quantityButton1}
              onClick={() => {
                navigate('/orderSuccess');
              }}
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: '#FFFFFF',
                padding: 10,
                width: 305,
                height: 80,
                textTransform: 'none',
                margin: '17px 20px',
                backgroundColor: '#A21219',
              }}
            >
              Fazer pedido
            </Button>
          </Grid>
        </Box>
      </Box>
    </animated.div>
  );
};

export default CartListingPage;
