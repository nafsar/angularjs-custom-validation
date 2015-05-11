(function(custom) {
	'use strict';
	var app = angular.module('demo', ['ngMessages'])
	app.directive('problemValidation', function() {

		var REGEX = /[0-9-!@$%^&*()_+|~=`{}\[\]:";'<>?,. \/]$/;

		return {
			restrict : 'A',
			require : 'ngModel',
			link : function(scope, element, attrs, ctrl) {

				ctrl.$validators.problemValidation = function(modelValue, viewValue) {

					if (REGEX.test(modelValue)) {
						return true;
					}
					return false;
				};
			}
		};
	});

})(window.custom);
