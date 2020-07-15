import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from './ListItem';

const styles = {
  root: {
    marginTop: '3%',
  },
}

class List extends React.Component {
  render() {
    const { list, classes } = this.props;
    return (
      <div className={classes.root}>
        {list.map((item) => <ListItem key={item.name} item={item} />)}
      </div>
    );
  }
}

export default withStyles(styles)(List);
