import React, { Component, Fragment } from 'react';
import { Alert, Container, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import FullScreenBackground from '../FullScreenBackground/FullScreenBackground';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchWeather, setCityQuery } from '../../store/actions';
import { forecastSelector, isFetchingDataSelector, errorSelector, cityQuerySelector } from '../../store/selectors';
import WeatherSpinner from '../WeatherSpinner/WeatherSpinner';

const mapState = state => {
  return {
    forecast: forecastSelector(state),
    cityQuery: cityQuerySelector(state),
    isFetchingData: isFetchingDataSelector(state),
    error: errorSelector(state)
  };
};

const mapDispatch = dispatch => {
  return {
    searchWeather: (cityQuery) => dispatch(searchWeather(cityQuery)),
    setCityQuery: (cityQuery) => dispatch(setCityQuery(cityQuery))
  };
};

class Search extends Component {
  state = {
    formSubmitted: false
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.searchWeather(this.props.cityQuery);
    this.setState({
      formSubmitted: true
    });
  };

  handleUpdate = e => {
    this.props.setCityQuery(e.target.value);
  };

  render() {
    if (this.state.formSubmitted && !this.props.error && this.props.forecast.length) {
      return <Redirect to={`/city/${this.props.cityQuery}`} />;
    }

    const notFound = this.props.error ? (
      <Container>
        <Alert color="secondary">The city you are searching for, cannot be found.</Alert>
      </Container>
    ) : null;

    const spinner = this.props.isFetchingData ? (
      <WeatherSpinner />
    ) : null;
    return (
      <Fragment>
        <FullScreenBackground className="bg-primary">
          <form onSubmit={this.handleSubmitForm} className="py-4 mb-3">
            <InputGroup>
              <Input value={this.props.cityQuery}
                onChange={this.handleUpdate}
                disabled={this.props.isFetchingData}
                bsSize="lg"
                type="text" placeholder="Search" />
              <InputGroupAddon addonType="append">
                <Button>Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </form>
        </FullScreenBackground>
        {spinner}
        {notFound}
        <Container className="fixed-bottom pb-5">
          <h5 className="text-muted">Search engine is <em>slightly</em> flexible. How it works:</h5>
          <div className="text-muted">To make it more precise put the city's name, comma, 2-letter country code (ISO3166). You will be redirected to the city page.</div>
          <div className="text-muted">The order is important - the first is city name then comma then country. Example - London, GB or New York, US.</div>
        </Container>
      </Fragment>
    );
  }
};

export default connect(mapState, mapDispatch)(withRouter(Search));