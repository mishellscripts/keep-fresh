import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import ListItemActions from '../containers/ListItemActions';


const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid lightgray',
    padding: '16px',
    marginBottom: 4,
  },
  label: {
    marginBottom: 4,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: 'darkgray',
  },
  itemDetail: {
    width: '50%',
    maxWidth: 200,
    display: 'flex',
    justifyContent: 'space-between',
  }
};

class ListItem extends React.Component {
  render() {
    const { item, classes } = this.props;
    const { name, quantity, category } = item;
    return (
      <div className={classes.root}>
        <div className={classes.itemDetail}>
          <div>
            <Typography className={classes.label}>NAME</Typography>
            <Typography align="center">{name}</Typography>
          </div>
          <div>
            <Typography className={classes.label}>QUANTITY</Typography>
            <Typography align="center">{quantity}</Typography>
          </div>
        </div>
        <ListItemActions item={item} />
      </div>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    category: PropTypes.string,
  }),
};

ListItem.defaultProps = {
  item: {
    name: '',
    quantity: '',
    category: '',
  },
};

export default withStyles(styles)(ListItem);

