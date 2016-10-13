var app = angular.module('NameReserve', []);

app.controller('NameReserveCtrl', function($scope) {
	//$scope.fname = "";
	$scope.showFirstName = false;
	$scope.showSecondName = false;
	$scope.showThirdName = false;
	
	$scope.myConcat = function() {
		$scope.showFirstName = true;
		if ($scope.fname.length == 0) {
			$scope.showFirstName = false;
		}
		$scope.finalname = $scope.fname + ' ' + 'Limited';
	}
	
	
	$scope.myConcat2 = function() {
		$scope.showSecondName = true;
		if ($scope.secondname.length == 0) {
			$scope.showSecondName = false;
		}
		$scope.finalname2 = $scope.secondname + ' ' + 'Limited';
	}
	
	$scope.myConcat3 = function() {
		$scope.showThirdName = true;
		if ($scope.thirdname.length == 0) {
			$scope.showThirdName = false;
		}
			
		$scope.finalname3 = $scope.thirdname + ' ' + 'Limited';
	}
	
	
	$scope.showPopup = function() {
		$("#divPopup").css("visibility", "visible");
	}
	$scope.closePopupNames = function() {
		
		$("#divPopup").css("visibility", "hidden");
	}
});
