import angular from 'angular';
import {PercentController, PercentDirective} from './percent-directive/percent.directive'

export const CommonModule = angular
  .module('app.common', [])
  .directive('percent', PercentDirective)
  .controller('percentController', PercentController())
  .name;