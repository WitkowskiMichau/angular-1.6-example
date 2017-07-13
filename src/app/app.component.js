import angular from 'angular';

export const AppComponent = {
  template: require('./app.html'),
  controller: 'AppCtrl',
  controllerAs: 'app'
};

export class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}