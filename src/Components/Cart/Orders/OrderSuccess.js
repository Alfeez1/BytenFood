import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 30px 0px 30px',
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: '50vh',
    width: '100%',
    overflow: 'hidden',
    '& img': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: '100%',
      width: 'auto',
    },
  },
  content: {
    marginTop: theme.spacing(1),
    textAlign: 'center',

    '& > *': {
      marginBottom: theme.spacing(1),
    },
  },
  text: {
    fontSize: 24,
    fontWeight: 400,
    color: '#57595A',
    lineHeight: '29px',
  },
}));

function OrderSuccess() {
  const classes = useStyles();
  const topRef = useRef(null);
  const navigate = useNavigate();
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
      {' '}
      <div className={classes.imageContainer}>
        <img src="/icons/butcher.svg" alt="success" />
      </div>
      <Container className={classes.content} maxWidth="sm">
        <Typography
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: '#A21219',
            marginBottom: 0,
          }}
          variant="h4"
        >
          FEITO!
        </Typography>
        <Typography className={classes.text}>
          Seu pedido foi confirmado e nossa cozinha já começou a prepará-lo!
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: '#57595ACC',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          Se precisar de ajuda, chame o garçom mais próximo.
        </Typography>
        <Button
          onClick={() => {
            navigate('/list');
          }}
          fullWidth
          style={{
            backgroundColor: '#A21219',
            borderRadius: 7,
            height: 63,
            margin: '10px 20px 10px 0px',
            color: '#FFFFFF',
            fontSize: 26,
            fontWeight: 700,
            textTransform: 'none',
          }}
        >
          Voltar ao início
        </Button>
      </Container>{' '}
    </motion.div>
  );
}

export default OrderSuccess;
