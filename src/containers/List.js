import React from 'react';
import { connect } from 'react-redux'
import { getList } from '../store/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '../components/ListItem';

const styles = {
  root: {
    marginTop: '3%',
  },
}

class List extends React.Component {
  componentDidMount() {
    this.props.getList();
  }
  render() {
    const { list, loading, classes } = this.props;
    return (
      <div className={classes.root}>
        {loading ? <CircularProgress /> : (
          <>
            {list.map((item) => <ListItem key={item.name} item={item} />)}
          </>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(List));
