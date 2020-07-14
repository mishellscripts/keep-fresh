import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    background: theme.palette.primary.main,
    background: `-webkit-linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.main} 40%, ${theme.palette.primary.light})`,
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.main} 40%, ${theme.palette.primary.light})`,
    color: theme.palette.primary.contrastText,
    fontFamily: '"Varela Round", sans-serif',
    letterSpacing: '.2em',
    fontWeight: 'bold',
  },
});

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.root}>
        keepfresh
      </nav>
    );
  }
}

export default withStyles(styles)(NavBar);
