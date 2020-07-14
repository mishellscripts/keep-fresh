import React from 'react';
import { connect } from 'react-redux';
import { TextField, Button, MenuItem } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

import { addItem } from '../store/actions';

const mockCategories = [
  'Fruit',
  'Meat',
];

const styles = {
  root: {
    overflow: 'hidden',
  },
  expandedForm: {
    display: 'flex',
    alignItems: 'flex-end',
    maxHeight: 200,
    transition: 'max-height 0.25s ease-in',
    '@media(max-width: 400px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  textField: {
    marginRight: 16,
  },
  select: {
    minWidth: 180,
  },
  hidden: {
    maxHeight: 0,
    transition: 'none',
  },
};

class AddForm extends React.Component {
  state = {
    expanded: false,
    category: '',
    name: '',
    quantity: '',
  };

  toggleExpandForm = (e, status) => {
    this.setState({
      expanded: status,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.toggleExpandForm(false);

    const { name, quantity, category } = this.state;
    this.props.addItem({ name, quantity, category });
  }

  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value,
    });
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  handleQuantityChange = (e) => {
    this.setState({
      quantity: e.target.value,
    });
  }

  render() {
    const { classes, loading } = this.props;
    const { expanded, category, name, quantity } = this.state;

    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
        <TextField
          id="itemName"
          label="Add new item"
          onFocus={(e) => this.toggleExpandForm(e, true)}
          onChange={this.handleNameChange}
          className={classes.textField}
          required
          disabled={loading}
        />
        <div className={classNames(classes.expandedForm, { [classes.hidden]: !expanded })}>
          <TextField
            id="itemQuantity"
            label="Quantity"
            className={classes.textField}
            required
            disabled={loading}
            onChange={this.handleQuantityChange}
          />
          <TextField
            id="itemCategory"
            select
            label="Select category"
            value={category}
            onChange={this.handleCategoryChange}
            className={classNames(classes.textField, classes.select)}
            disabled={loading}
          >
            {mockCategories.map((category) => <MenuItem key={category} value={category}>{category}</MenuItem>)}
          </TextField>
          <Button type="submit" variant="contained" color="primary">Add</Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const mapDispatchToProps = {
  addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddForm));
