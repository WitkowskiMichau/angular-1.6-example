export const PercentDirective = () => {
  return {
    template: '{{percentCtr.percentValue}}',
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
        return parseFloat(floatValue) * 100 + '%'
      } else {
        return 'Number is not valid';
      }
    };

    const dataIsValid = (floatValue) => {
      return floatValue && typeof floatValue === 'number' && floatValue <= 1 && floatValue >= 0;
    }

  }]
};

export const PercentModule = angular
  .module('app.common.percent', [])
  .directive('percent', PercentDirective)
  .controller('percentController', PercentController())
  .name;
