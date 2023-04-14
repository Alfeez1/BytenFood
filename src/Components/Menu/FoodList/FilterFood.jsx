import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import { Box, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: theme.spacing(1.6),
  },
  closeIcon: {
    alignSelf: 'flex-start',
  },
  bottomButtons: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  dietContainer: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 0,
  },
  checkboxLabel: {
    marginLeft: 0,
  },
  checkBox: {},
  FilterHead: {
    fontWeight: '600',
    fontSize: '21px',
    color: '#B91C1C',
    textAlign: 'start',
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    marginLeft: 0,
  },
  labelText: { fontSize: 15, fontWeight: 500, color: '#303030' },
}));

FilterFood.propTypes = {
    onClose: PropTypes.func.isRequired,
  };
  
function FilterFood({ onClose }) {
  const classes = useStyles();

  const [preco, setPreco] = useState({
    minPrice: false,
    maxPrice: false,
  });
  const [interacao, setInteracao] = useState({
    ar: false,
    semAr: false,
  });
  const [pessoas, setPessoas] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const [tags, setTags] = useState({
    vegano: false,
    semLactose: false,
    semGluten: false,
  });

  const handlePrecoChange = (event) => {
    setPreco({ [event.target.name]: event.target.checked });
  };

  const handleInteracaoChange = (event) => {
    setInteracao({ [event.target.name]: event.target.checked });
  };

  const handlePessoasChange = (event) => {
    setPessoas({ [event.target.name]: event.target.checked });
  };

  const handleTagsChange = (event) => {
    setTags({ [event.target.name]: event.target.checked });
  };

  const handleCheckboxChange = () => {
    setPreco({
      minPrice: false,
      maxPrice: false,
    });

    setInteracao({
      ar: false,
      semAr: false,
    });

    setPessoas({
      one: false,
      two: false,
      three: false,
      four: false,
    });

    setTags({
      vegano: false,
      semLactose: false,
      semGluten: false,
    });
  };
  const handleSubmit = () => {
    let trueValues = [];

    for (let key in preco) {
      if (preco[key]) {
        trueValues.push(`price - ${key}`);
      }
    }

    for (let key in interacao) {
      if (interacao[key]) {
        trueValues.push(`interaction - ${key}`);
      }
    }

    for (let key in pessoas) {
      if (pessoas[key]) {
        trueValues.push(`people - ${key}`);
      }
    }

    for (let key in tags) {
      if (tags[key]) {
        trueValues.push(`tag - ${key}`);
      }
    }

    console.log(trueValues);
  };
  return (
    <Box sx={{ p: 2, height: '82vh' }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item className={classes.closeIcon}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item className={classes.header}>
          <Typography
            variant="h5"
            style={{ color: '#B91C1C', fontSize: 24, fontWeight: 600 }}
          >
            Filtros
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            className={classes.FilterHead}
            style={{ marginTop: 3 }}
          >
            Preço
          </Typography>{' '}
          <Grid className={classes.dietContainer}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                    padding: '3px',
                  }}
                  checked={preco.minPrice}
                  onChange={handlePrecoChange}
                  name="minPrice"
                />
              }
              sx={{ margin: 0 }}
              className={classes.label}
              labelPlacement="start"
              label={
                <Typography variant="body1" className={classes.labelText}>
                  Menores Precos
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={preco.maxPrice}
                  onChange={handlePrecoChange}
                  name="maxPrice"
                  sx={{
                    padding: '3px',
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                  }}
                />
              }
              sx={{ margin: 0 }}
              className={classes.label}
              labelPlacement="start"
              label={
                <Typography variant="body1" className={classes.labelText}>
                  Maiores preços
                </Typography>
              }
            />{' '}
          </Grid>
          <Divider sx={{ my: 1 }} />
        </Grid>{' '}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" className={classes.FilterHead}>
            Interação
          </Typography>{' '}
          <Grid className={classes.dietContainer}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                    padding: '3px',
                  }}
                  checked={interacao.ar}
                  onChange={handleInteracaoChange}
                  name="ar"
                />
              }
              sx={{ margin: 0 }}
              className={classes.label}
              labelPlacement="start"
              label={
                <Typography variant="body1" className={classes.labelText}>
                  Apenas itens com AR
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                    padding: '3px',
                  }}
                  checked={interacao.semAr}
                  onChange={handleInteracaoChange}
                  name="semAr"
                />
              }
              sx={{ margin: 0 }}
              className={classes.label}
              labelPlacement="start"
              label={
                <Typography variant="body1" className={classes.labelText}>
                  Apenas itens sem AR
                </Typography>
              }
            />{' '}
          </Grid>
          <Divider sx={{ my: 1 }} />
        </Grid>{' '}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" className={classes.FilterHead}>
            Pessoas
          </Typography>{' '}
          <Grid className={classes.dietContainer}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                    padding: '3px',
                  }}
                  checked={pessoas.one}
                  onChange={handlePessoasChange}
                  name="one"
                />
              }
              sx={{ margin: 0 }}
              className={classes.label}
              labelPlacement="start"
              label={
                <Typography variant="body1" className={classes.labelText}>
                  Serve 1 pessoa
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                    padding: '3px',
                  }}
                  checked={pessoas.two}
                  onChange={handlePessoasChange}
                  name="two"
                />
              }
              sx={{ margin: 0 }}
              className={classes.label}
              labelPlacement="start"
              label={
                <Typography variant="body1" className={classes.labelText}>
                  Serve 2 pessoas
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                    padding: '3px',
                  }}
                  checked={pessoas.three}
                  onChange={handlePessoasChange}
                  name="three"
                />
              }
              sx={{ margin: 0 }}
              className={classes.label}
              labelPlacement="start"
              label={
                <Typography variant="body1" className={classes.labelText}>
                  Serve 3 pessoas
                </Typography>
              }
            />{' '}
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                    padding: '3px',
                  }}
                  checked={pessoas.four}
                  onChange={handlePessoasChange}
                  name="four"
                />
              }
              sx={{ margin: 0 }}
              className={classes.label}
              labelPlacement="start"
              label={
                <Typography variant="body1" className={classes.labelText}>
                  Serve 4+ pessoas
                </Typography>
              }
            />{' '}
          </Grid>
          <Divider sx={{ my: 1 }} />
        </Grid>{' '}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" className={classes.FilterHead}>
            Tags
          </Typography>{' '}
          <Grid className={classes.dietContainer}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                    padding: '3px',
                  }}
                  checked={tags.vegano}
                  onChange={handleTagsChange}
                  name="vegano"
                />
              }
              sx={{ margin: 0 }}
              className={classes.label}
              labelPlacement="start"
              label={
                <Typography variant="body1" className={classes.labelText}>
                  Vegano
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                    padding: '3px',
                  }}
                  checked={tags.semGluten}
                  onChange={handleTagsChange}
                  name="semGluten"
                />
              }
              sx={{ margin: 0 }}
              className={classes.label}
              labelPlacement="start"
              label={
                <Typography variant="body1" className={classes.labelText}>
                  Sem glúten
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                    padding: '3px',
                  }}
                  checked={tags.semLactose}
                  onChange={handleTagsChange}
                  name="semLactose"
                />
              }
              sx={{ margin: 0 }}
              className={classes.label}
              labelPlacement="start"
              label={
                <Typography variant="body1" className={classes.labelText}>
                  Sem lactose
                </Typography>
              }
            />{' '}
          </Grid>
        </Grid>{' '}
      </Grid>
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: '#fff',
          padding: '10px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: '10px',
          '& button': {
            width: '50%',
            marginLeft: '10px',
            '&:first-of-type': {
              marginLeft: '0px',
            },
          },
        }}
      >
        <Button
          onClick={handleCheckboxChange}
          style={{
            color: '#303030',
            fontSize: 18,
            fontWeight: 700,
            border: '1px solid #B91C1C',
            textTransform: 'none',
          }}
        >
          Limpar filtros{' '}
        </Button>
        <Button
          style={{
            color: '#FFFCFC',
            fontSize: 18,
            fontWeight: 700,
            border: '1px solid #B91C1C',
            background: '#B91C1C',
            textTransform: 'none',
          }}
          onClick={handleSubmit}
        >
          Aplicar
        </Button>
      </Box>
    </Box>
  );
}

export default FilterFood;
