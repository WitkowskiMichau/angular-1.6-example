import angular from 'angular';

export const AppComponent = {
  template: require('./app.html'),
  controller: 'appController',
  controllerAs: 'appCtrl'
};

export class AppController {
  constructor() {
  }
}