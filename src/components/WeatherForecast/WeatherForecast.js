import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import Octicon, { ChevronLeft } from '@githubprimer/octicons-react';
import DayForecast from './DayForecast/DayForecast';
import { connect } from 'react-redux';
import { searchWeather, setCityQuery, toggleUnits } from '../../store/actions';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { forecastSelector, cityNameSelector, isFetchingDataSelector, unitsSelector } from '../../store/selectors';
import WeatherSpinner from '../WeatherSpinner/WeatherSpinner';
import FullScreenBackground from '../FullScreenBackground/FullScreenBackground';

const mapState = state => {
  return {
    forecast: forecastSelector(state),
    cityName: cityNameSelector(state),
    isFetchingData: isFetchingDataSelector(state),
    units: unitsSelector(state)
  };
};

const mapDispatch = dispatch => {
  return {
    searchWeather: (cityQuery) => dispatch(searchWeather(cityQuery)),
    setCityQuery: (cityQuery) => dispatch(setCityQuery(cityQuery)),
    toggleUnits: () => dispatch(toggleUnits())
  };
};

class WeatherForecast extends Component {

  componentDidMount = () => {
    if (!this.props.forecast.length) {
      this.props.setCityQuery(this.props.match.params.queryString);
      this.props.searchWeather(this.props.match.params.queryString);
    }
  }

  handleUnitChange = () => {
    this.props.toggleUnits();
    this.props.searchWeather(this.props.match.params.queryString);
  }

  handleReturn = e => {
    this.props.setCityQuery('');
  }

  render() {
    if (this.props.error && !this.props.forecast.length) {
      return <Redirect to='/' />
    }

    const forecastArray = this.props.forecast.map(item => {
      return <DayForecast key={item.day} forecast={item} units={this.props.units} />;
    });
    const spinner = (<WeatherSpinner />);
    const content = (
      <React.Fragment>
        <Container>
          <Link onClick={this.handleReturn} to="/" className="btn btn-secondary btn-sm"><Octicon icon={ChevronLeft} /> Back to search</Link>
          <Button className="ml-3" size="sm" onClick={this.handleUnitChange}>Units: {this.props.units}</Button>
        </Container>
        <FullScreenBackground className="bg-primary py-3 my-3">
          <h1>{this.props.cityName}</h1>
        </FullScreenBackground>
        <Container>
          <div className="d-flex justify-content-between">
            {forecastArray}
          </div>
        </Container>
      </React.Fragment>
    );
    return this.props.isFetchingData || !this.props.forecast ?
      spinner : content;
  }
};

export default connect(mapState, mapDispatch)(withRouter(WeatherForecast));