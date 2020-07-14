import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  icon: {
    display: 'flex',
    cursor: 'pointer',
    padding: 2,
    backgroundColor: 'lightgray',
    borderRadius: '100%',
    marginBottom: 4,
  }
};

class ActionIcon extends React.Component {
  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.icon}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(ActionIcon);