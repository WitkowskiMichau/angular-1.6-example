import angular from 'angular';
import {PercentModule} from "./percent-directive/percent.directive";

export const CommonModule = angular
  .module('app.common', [PercentModule])
  .name;