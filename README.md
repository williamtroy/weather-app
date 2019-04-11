
# Usage

1. Once in the application, the first page shown is the search page.
2. A city may be searched using the same syntax as in https://openweathermap.org/find
  1. Attempting to search for a non existing city shows a handled error.
3. Once a city has been found, the corresponding weather data is displayed.
4. Clicking on the return button allows for additional searches.

![Demo Gif](./weatherApp.gif?raw=true "Title")

### Notable interactions
* Measurement units may be toggled between the default imperial and metric units.
* A city weather page may be bookmarked.
* Navigating to any url other than / and /city/[cityName] redirects to search.
* Navigating to a weather page for a non-existing city redirects to search as if it were a regular invalid search.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

