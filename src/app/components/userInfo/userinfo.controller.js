(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('userInfoController', userInfoController);

  /** @ngInject */
  function userInfoController($mdDialog) {
    var _this = this;
    _this.user = {name:"Louis", surname:"Vaneau", shortname:"LVN", balance:"1829", preview:"1830", photo:"../assets/images/conscrit.jpg"};
   _this.navigateTo = function(to, event) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Navigating')
          .content('Imagine being taken to ' + to)
          .ariaLabel('Navigation demo')
          .ok('Neat!')
          
      );
    }
  }

})();

