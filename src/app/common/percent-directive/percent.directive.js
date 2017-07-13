export const PercentDirective = () => {
  return {
    template: '<span class="{{percentCtr.elementClass}}">{{percentCtr.percentValue}}</span>',
    restrict: 'EA',
    controller: 'percentController',
    controllerAs: 'percentCtr',
    scope: {
      floatValue: '<'
    }
  }
};

export const PercentController = () => {
  return ['$scope', function ($scope) {
    $scope.$watch('floatValue', () => {
      this.percentValue = makePercent($scope.floatValue);
    });

    const makePercent = (floatValue) => {
      if (dataIsValid(floatValue)) {
        this.elementClass = 'valid';
        return parseFloat(floatValue) * 100 + '%'
      } else {
        this.elementClass = 'invalid';
        return 'Number is not valid';
      }
    };

    const dataIsValid = (floatValue) => {
      return floatValue && parseFloat(floatValue) <= 1 && parseFloat(floatValue) >= 0;
    }

  }]
};

export const PercentModule = angular
  .module('app.common.percent', [])
  .directive('percent', PercentDirective)
  .controller('percentController', PercentController())
  .name;
