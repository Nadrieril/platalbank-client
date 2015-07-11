(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('TransactionlistController', ['$scope', TransactionlistController]);

  /** @ngInject */
  function TransactionlistController($scope) {
    var _this = this;
    $scope.transactions = [
      {
        name: "Aujourd'hui",
        transactions: [
            {
              creatorPic: "PIC",
              creator: "Victor Quach",
              name: "Un petit cadeau",
              date: "Midi pile",
              operations: { "Leo Gaspard": 42, "Victor Quach": -42 },
              amount: -42
            },
            {
              creatorPic: "PIC2",
              creator: "Binet Subaïsse",
              name: "Subventions",
              date: "Jamais",
              operations: { "Victor Quach": 1337, "Binet Subaïsse": -1337 },
              amount: 1337
            },
        ]
      },
      {
        name: "Hier",
        transactions: [
            {
              creatorPic: "PIC",
              creator: "Victor Quach",
              name: "Un petit cadeau",
              date: "Midi pile",
              operations: { "Leo Gaspard": 42, "Victor Quach": -42 },
              amount: -42
            },
            {
              creatorPic: "PIC2",
              creator: "Binet Subaïsse",
              name: "Subventions subissance",
              event_name: "Un évènement très subissant : PlatalBank",
              date: "Jamais en fait",
              operations: { "Victor Quach": 1337, "Binet Subaïsse": -1337 },
              amount: 1337
            },
        ]
      },
      {
        name: "Avant",
        transactions: [
            {
              creatorPic: "PIC",
              creator: "Victor Quach",
              name: "Un petit cadeau",
              date: "Midi pile",
              operations: { "Leo Gaspard": 42, "Victor Quach": -42 },
              amount: -42
            },
            {
              creatorPic: "PIC2",
              creator: "Binet Subaïsse",
              name: "Subventions",
              date: "Jamais",
              operations: { "Victor Quach": 1337, "Binet Subaïsse": -1337 },
              amount: 1337
            },
            {
              creatorPic: "PIC3",
              creator: "Vaneau",
              name: "C'est moi Vaneau",
              date: "Â-â-â-âvant",
              operations: { "Victor Quach": -1024, "Louis Vaneau": 1024 },
              amount: -1024
            }
        ]
      }
    ];
  }
})();
