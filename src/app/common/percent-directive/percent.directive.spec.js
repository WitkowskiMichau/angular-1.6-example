describe('app', () => {

  describe('Percent Directive', () => {
    let element, scope;

    beforeEach(() => {
      angular.mock.module('app');

      angular.mock.inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        element = angular.element('<percent float-value="outside"></percent>');
        element = $compile(element)(scope);
      });
    });

    it('should display procentage to the user', () => {
      scope.outside = 0.23;
      scope.$apply();
      expect(element.text()).toEqual('23%');
    });
  });
});