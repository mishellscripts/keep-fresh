import React from 'react';
import { connect } from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { increaseQuantity, decreaseQuantity, deleteItem } from '../store/actions';


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

class ListItemActions extends React.Component {
  render() {
    const { item, classes } = this.props;
    return (
      <div>
        <div className={classes.icon}>
          <AddIcon onClick={() => this.props.increaseQuantity(item)} />
        </div>
        <div className={classes.icon}>
          <RemoveIcon onClick={() => this.props.decreaseQuantity(item)} />
        </div>
        <div className={classes.icon}>
          <DeleteIcon onClick={() => this.props.deleteItem(item)} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(ListItemActions));
