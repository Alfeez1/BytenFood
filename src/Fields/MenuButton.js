import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: '24px',
    fontWeight: '700',
    fontFamily: 'inter',
    width: '255px',
    height: '60px',
    // marginBottom: theme.spacing(1),
    color: '#A21219',
    textTransform: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#F8F8F8',
    border: '1px solid rgba(37, 37, 37, 0.1)',
    borderRadius: '7px',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: theme.spacing(2),
  },
}));

function MenuButton({ label, onClick }) {
  const classes = useStyles();
  return (
    <Button className={classes.button} onClick={onClick}>
      {label}
    </Button>
  );
}

export default MenuButton;
