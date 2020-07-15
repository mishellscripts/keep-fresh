import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.main} 40%, ${theme.palette.primary.light})`,
    fontFamily: '"Varela Round", sans-serif',
    letterSpacing: '.2em',
    fontWeight: 'bold',
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
});

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.root}>
        <a href="/" className={classes.link}>keepfresh</a>
      </nav>
    );
  }
}

export default withStyles(styles)(NavBar);
