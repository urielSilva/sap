angular.module('sap')

.controller('JobFormController', JobFormController);

JobFormController.$inject = ['$scope', 'CurrentJob', 'Jobs', '$state', '$http'];

function JobFormController($scope, CurrentJob, Jobs, $state, $http) {
  var vm = this;

  vm.job = {};
  vm.submitForm = submitForm;

  activate();

  /////////////////////////////////////////////////////////

  function activate() {
    vm.job = CurrentJob;
  }

  function submitForm(job) {
    

    if (job.id) {
      Jobs.update({id: job.id}, {job: job}).$promise.then(function() {
        $state.go('jobs');
      });
    } 
  }
}