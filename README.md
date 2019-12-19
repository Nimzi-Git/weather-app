# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.
This Application displays 5 days weathers to the user. Application loads with the home landing page with a Search field and a Search button. User needs to provide a valid City Name(ex: 'London') and click On Search. It will load 5 days weather in the bottom half of the application. Five Tabs(each with the Date) will be visible to display that particular day's weather.

The application displays an error for any adverse search. For an example- if the user pressed the Search button without entering a city name, it will display the user an error message informing that there is no city name has been entered. Also, if the user enters a incorrect city, the application will show a valid error message informing that the city is not correct.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests and code coverage

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Run `ng run coverage` to display the code coverage of the application which is above 90%. Here is the coverage summary.

Coverage summary:
Statements   : 97.26% ( 71/73 )
Branches     : 100% ( 0/0 )
Functions    : 91.3% ( 21/23 )
Lines        : 97.01% ( 65/67 )


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
