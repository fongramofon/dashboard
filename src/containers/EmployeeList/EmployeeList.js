import React, { Component } from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import classes from './EmployeeList.css';
import helpers from '../../base/helpers.css';

import SortingBar from '../../components/SortingBar/SortingBar';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import { getSortedEmployees } from '../../store/selectors';
import { fetchEmployees, sortBy, clearEmployees } from '../../store/actions/employeeList';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.onFetchEmployees(this.props.pageToLoadUp);
  }

  componentWillUnmount() {
    this.props.onClearEmployees();
    this.props.onSortBy('None');
  }

  sortingChangeHandler = event => {
    this.props.onSortBy(event.target.value)
  }
  
  render() {
    let infiniteScrollControls = null;
    if (!this.props.thereIsNoMore) {
      infiniteScrollControls = (
        <React.Fragment>
          <Waypoint onEnter={() => this.props.onFetchEmployees(this.props.pageToLoadUp)} />
          <button className={classes.loadMoreButton} onClick={() => this.props.onFetchEmployees(this.props.pageToLoadUp)}>Load more</button>
        </React.Fragment>
        )
    }
    return (
      <div className={`${classes.wrapper} ${helpers.wrapper}`}>
        <SortingBar changed={this.sortingChangeHandler} /> 
        <div className={classes.employeeContainer}>
          { this.props.employees.allIds.map((employeeId) => 
            <EmployeeCard 
              key={`${this.props.employees.byId[employeeId].id}`}
              avatar={this.props.employees.byId[employeeId].avatar}
              first_name={this.props.employees.byId[employeeId].first_name}
              last_name={this.props.employees.byId[employeeId].last_name}
              company={this.props.employees.byId[employeeId].company}
              address={this.props.employees.byId[employeeId].address}
              email={this.props.employees.byId[employeeId].email}
              phone={this.props.employees.byId[employeeId].phone}
            />        
          )}       
        </div>
        {infiniteScrollControls}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    employees: getSortedEmployees(state, props),
    pageToLoadUp: state.pageToLoadUp,
    thereIsNoMore: state.thereIsNoMore
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchEmployees: (page) => dispatch(fetchEmployees(page)),
    onSortBy: (order) => dispatch(sortBy(order)),
    onClearEmployees: () => dispatch(clearEmployees())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);