import React, { Component } from 'react';
import { connect } from 'react-redux'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import classes from './Dashboard.css';
import helpers from '../../base/helpers.css';

import Loader from '../../components/Loader/Loader';
import { getDashboardData } from '../../store/actions/dashboard';

class Dashboard extends Component {
    state = {
      data: [
              {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
              {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
              {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
              {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
              {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
              {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
              {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
            ]
    };

    componentDidMount() {
      this.props.onGetDashboardData();
    }

    componentWillReceiveProps(nextProps) {
      console.log(nextProps.loading);
    }

    render() {
        let chart = <Loader />;
        if (!this.props.loading) {
          chart = (
            <LineChart width={800} height={400} data={this.props.dashboardData}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
          );
        }
        return (
          <div className={`${classes.wrapper} ${helpers.wrapper}`}>
            { chart }
          </div>
        );
    }
}

const mapStateToProps = state => ({
  dashboardData: state.dashboard.dashboardData,
  loading: state.dashboard.loading
});

const mapDispatchToProps = dispatch => ({
  onGetDashboardData: () => dispatch(getDashboardData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);