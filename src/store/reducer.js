import { fromJS } from 'immutable';
import * as actionTypes from './actions';

const initialState = fromJS({
  cityQuery: '',
  isFetchingData: false,
  error: null,
  forecast: null,
  units: 'F'
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_WEATHER_BEGIN:
      return state.set('forecast', null)
      .set('isFetchingData', true)
      .set('error', null);
    case actionTypes.SEARCH_WEATHER_SUCCESS:
      return state.set('forecast', fromJS(action.payload))
      .set('isFetchingData', false);
    case actionTypes.SEARCH_WEATHER_FAIL:
      return state.set('error', fromJS(action.payload))
      .set('isFetchingData', false);
      case actionTypes.SET_CITY_QUERY:
        return state.set('cityQuery', action.payload);
      case actionTypes.TOGGLE_UNITS:
        return state.set('units', state.get('units') === 'F' ? 'C' : 'F');
    default:
      return state;
  }
};