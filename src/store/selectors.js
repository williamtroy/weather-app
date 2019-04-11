import { createSelector } from 'reselect';
import { getDayFromDt, getLocalIconFromWSIcon } from './reducerHelper';

const stateSelector = state => state;

const iForecastSelector = createSelector([stateSelector], state => {
  return state.get('forecast');
});

export const forecastSelector = createSelector([iForecastSelector], iForecast => {
  const forecast = iForecast ? iForecast.toJS() : {list: []};
  const days = [];
  const result = forecast.list.map( item => {
    return {
      high: Math.round(item.main.temp_max),
      low: Math.round(item.main.temp_min),
      day: getDayFromDt(item.dt),
      icon: getLocalIconFromWSIcon(item.weather[0].icon)
    }
  }).filter( item => {
    if(!days.includes(item.day)) {
      days.push(item.day);
      return true;
    }
    return false;
  });
  return result;
});

export const cityNameSelector = createSelector([iForecastSelector], iForecast => {
  return iForecast ? `${iForecast.getIn(['city', 'name'])}, ${iForecast.getIn(['city', 'country'])}` : null;
});

export const cityQuerySelector = createSelector([stateSelector], state => {
  return state.get('cityQuery');
});

export const errorSelector = createSelector([stateSelector], state => {
  return state.get('error');
});

export const isFetchingDataSelector = createSelector([stateSelector], state => {
  return state.get('isFetchingData');
});

export const unitsSelector = createSelector([stateSelector], state => {
  return state.get('units');
});