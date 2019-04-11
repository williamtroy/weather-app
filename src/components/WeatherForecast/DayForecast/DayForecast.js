import React from 'react';
import dayForecast from './DayForecast.module.scss';

export default (props) => {
  const {forecast = {}, icon = 'cloudy'} = props;

  const iconClasses = [
    dayForecast.icon,
    dayForecast[forecast.icon || icon]
  ].join(' ');
  return (
    <div className={dayForecast.dayForecast}>
      <div className="d-flex justify-content-around text-muted">{forecast.day}</div>
      <div className={iconClasses} />
      <div className="d-flex justify-content-around text-muted">
        <span>{forecast.high} {props.units}&deg;</span>
        <span>{forecast.low} {props.units}&deg;</span>
      </div>
    </div>
  );
};