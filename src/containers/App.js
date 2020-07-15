import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux'

import NavBar from '../components/NavBar';
import AddForm from './AddForm';
import List from '../components/List';
import { getList } from '../store/actions';
import { CircularProgress } from '@material-ui/core';


const styles = {
  container: {
    minWidth: 310,
    width: '50%',
    margin: '3% auto 0',
  },
};

class App extends React.Component {
  componentDidMount() {
    this.props.getList();
  }
  
  render() {
    const { classes, list, loading } = this.props;
    return (
      <div>
        <NavBar />
        <div className={classes.container}>
          <AddForm />
          {loading ? <CircularProgress /> : <List list={list} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
  loading: state.loading,
});

const mapDispatchToProps = {
  getList,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
