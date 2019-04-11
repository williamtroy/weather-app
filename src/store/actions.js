import axios from "axios";
import { unitsSelector } from "./selectors";


export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const SEARCH_WEATHER_BEGIN = 'SEARCH_WEATHER_BEGIN';
export const SEARCH_WEATHER_SUCCESS = 'SEARCH_WEATHER_SUCCESS';
export const SEARCH_WEATHER_FAIL = 'SEARCH_WEATHER_FAIL';

const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?',
  APP_ID = 'APPID=bfffee5170948055b1d8b1b3c341c2b9&';

const searchWeatherBegin = payload => ({
  type: SEARCH_WEATHER_BEGIN
});

const searchWeatherSuccess = payload => ({
  type: SEARCH_WEATHER_SUCCESS,
  payload
});

const searchWeatherFail = payload => ({
  type: SEARCH_WEATHER_FAIL,
  payload
});

export const searchWeather = cityQuery => {
  return function (dispatch, getState) {
    const state = getState();
    const units = unitsSelector(state);
    const unitQuery = units === 'F' ? 'imperial' : 'metric';
    const url = `${API_URL}${APP_ID}&units=${unitQuery}&q=${cityQuery}`;
    dispatch(searchWeatherBegin());
    axios.get(url)
      .then(
        response => dispatch(searchWeatherSuccess(response.data))
      ).catch(
        response => dispatch(searchWeatherFail(response))
        )
  }
};
export const SET_CITY_QUERY = 'SET_CITY_QUERY';
export const setCityQuery = payload => {
  return {
    type: SET_CITY_QUERY,
    payload
  };
};

export const TOGGLE_UNITS = 'TOGGLE_UNITS';

export const toggleUnits = () => {
  return {type: TOGGLE_UNITS};
};