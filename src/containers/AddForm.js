import React from 'react';
import { connect } from 'react-redux';
import { TextField, Button, MenuItem } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

import { addItem } from '../store/actions';


// TODO: Make this an API call and allow user to add new categories
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
    marginTop: 8,
    maxHeight: 200,
    transition: 'max-height 0.25s ease-in',
    alignItems: 'center',
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
    alignItems: 'unset',
  },
};

const defaultFormState = {
  expanded: false,
  error: false,
  data: {
    category: {
      value: '',
    },
    name: {
      value: '',
      isValid: false,
      touched: false,
      error: 'Name cannot be blank',
    },
    quantity: {
      value: '',
      isValid: false,
      touched: false,
      error: 'Quantity must be a number greater than zero',
    },
  },
};

class AddForm extends React.Component {
  state = defaultFormState;

  toggleExpandForm = (status) => {
    this.setState({
      expanded: status,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;

    // final form validation before submit
    let isValid = true;
    Object.keys(data).forEach((input) => {
      isValid = this.validateInput(input, data[input].value);
    });
    if (!isValid) {
      return;
    }

    this.props.addItem({
      name: data.name.value,
      quantity: parseInt(data.quantity.value),
      category: data.category.value,
    });

    // collapse form and reset
    this.toggleExpandForm(false);
    this.setState(defaultFormState);
  }

  validateInput(input, value) {
    // rules for input validation
    //    quantity  must be an integer greater than zero
    //    name      cannot be an empty string
    if (input === 'quantity') {
      return !isNaN(value) && parseInt(value) > 0;
    } else if (input === 'name') {
      return value.length > 0;
    }
  }

  handleInputChange = (e) => {
    const value = e.target.value.trim();
    const name = e.target.name;
    this.setState((state) => ({
      data: {
        ...state.data,
        [name]: {
          ...state.data[name],
          value,
          touched: true,
          isValid: this.validateInput(name, value),
        },
      },
    }));
  }

  render() {
    const { classes, loading } = this.props;
    const { expanded, data } = this.state;
    const { name, category, quantity } = data;

    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
        <TextField
          name="name"
          label="Add new item"
          onFocus={() => this.toggleExpandForm(true)}
          value={name.value}
          onChange={this.handleInputChange}
          className={classes.textField}
          disabled={loading}
          error={name.touched && !name.isValid}
          helperText={name.touched && !name.isValid ? name.error : ''}
        />
        <div className={classNames(classes.expandedForm, { [classes.hidden]: !expanded })}>
          <TextField
            name="quantity"
            label="Quantity"
            value={quantity.value}
            className={classes.textField}
            disabled={loading}
            onChange={this.handleInputChange}
            error={quantity.touched && !quantity.isValid}
            helperText={quantity.touched && !quantity.isValid ? quantity.error : ''}
          />
          <TextField
            name="category"
            select
            label="Select category"
            value={category.value}
            onChange={this.handleInputChange}
            className={classNames(classes.textField, classes.select)}
            disabled={loading}
          >
            {mockCategories.map((category) => <MenuItem key={category} value={category}>{category}</MenuItem>)}
          </TextField>
          <Button type="submit" variant="contained" color="primary" className={classes.button}>Add</Button>
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
