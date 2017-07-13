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

export const PercentController = () =>  {
  return ['$scope', function($scope) {
  }]
};
