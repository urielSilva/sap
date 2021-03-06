angular.module('sap')
.controller('NavCtrl', [
'$scope',
'Auth',
'$state',
function($scope, Auth, $state){
 	
  var self = this;

 	Auth.currentUser().then(function (user){
      $scope.user = user;
	});	


	$scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
  });

 	$scope.signedIn = Auth.isAuthenticated;

  $scope.logout = function() {
    
    Auth.logout();
    $scope.user = {};
    console.log($state);
    $state.go('login');
    
  }

  $scope.linksAdministrativo = [
    { url: "jobs", name: "Cargos" },
    { url: "roles", name: "Perfis"},
    { url: "sectors", name: "Núcleos"},
    { url: "knowledge_levels", name: "Níveis de Conhecimento"},
    { url: "activity_types", name: "Tipos de Atividade"},
    
    ];

  $scope.linksMembros = [
    { url: "home", name: "Membros"},
  ];


  $scope.linksProjetos = [
    { url: "projects", name: "Projetos"},
    { url: "project_status", name: "Status de Projeto"},
    { url: "technologies", name: "Tecnologias"},
    ];


  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

}]);

