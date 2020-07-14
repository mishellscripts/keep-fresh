import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import NavBar from '../components/NavBar';
import AddForm from './AddForm';
import List from './List';

const styles = {
  container: {
    minWidth: 310,
    width: '50%',
    margin: '3% auto 0',
  },
};

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <div className={classes.container}>
          <AddForm />
          <List />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
