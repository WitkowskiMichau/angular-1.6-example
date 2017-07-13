import angular from 'angular';
import {AppComponent, AppController} from './app.component';
import {ComponentsModule} from './components/components.module';
import {CommonModule} from './common/common.module';

import '../style/app.css';

export const AppModule = angular
  .module('app', [
    ComponentsModule,
    CommonModule,
  ])
  .component('app', AppComponent)
  .controller('appController', AppController)
  .name;