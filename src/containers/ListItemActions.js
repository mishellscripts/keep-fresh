import React from 'react';
import { connect } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import ActionIcon from '../components/ActionIcon';
import { increaseQuantity, decreaseQuantity, deleteItem } from '../store/actions';


class ListItemActions extends React.Component {
  render() {
    const { item, classes } = this.props;
    return (
      <div>
        <ActionIcon>
          <AddIcon onClick={() => this.props.increaseQuantity(item)} />
        </ActionIcon>
        <ActionIcon>
          <RemoveIcon onClick={() => this.props.decreaseQuantity(item)} />
        </ActionIcon>
        <ActionIcon>
          <DeleteIcon onClick={() => this.props.deleteItem(item)} />
        </ActionIcon>
      </div>
    );
  }
}

const mapDispatchToProps = {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
};

export default connect(null, mapDispatchToProps)(ListItemActions);
