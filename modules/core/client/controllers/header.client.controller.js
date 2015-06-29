'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus', '$mdSidenav',
	function($scope, $state, Authentication, Menus, $mdSidenav) {
		// Expose view variables
		$scope.$state = $state;
		$scope.authentication = Authentication;

		// Get the topbar menu
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);
