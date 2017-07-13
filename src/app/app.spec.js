describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module('app');

      angular.mock.inject(($controller) => {
        ctrl = $controller('appController', {});
      });
    });

    it('Ctrl should be defined', () => {
      expect(ctrl).toBeDefined();
    });
  });
});