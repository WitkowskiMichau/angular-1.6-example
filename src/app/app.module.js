import angular from 'angular';
import { AppComponent, AppCtrl } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';

import '../style/app.css';

export const AppModule = angular
  .module('app', [
    ComponentsModule,
    CommonModule,
  ])
  .component('app', AppComponent)
  .controller('AppCtrl', AppCtrl)
  .name;