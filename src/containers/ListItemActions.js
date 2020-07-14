import React from 'react';
import { connect } from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteItem } from '../store/actions';


const styles = {
  deleteIcon: {
    display: 'flex',
    cursor: 'pointer',
    padding: 2,
    backgroundColor: 'lightgray',
    borderRadius: '100%',
  }
};

class ListItemActions extends React.Component {
  render() {
    const { item, classes } = this.props;
    return (
      <div>
        <div className={classes.deleteIcon}>
          <DeleteIcon onClick={() => this.props.deleteItem(item)} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteItem,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(ListItemActions));