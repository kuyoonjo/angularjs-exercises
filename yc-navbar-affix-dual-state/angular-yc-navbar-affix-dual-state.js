/**
 * Created by yuchen on 7/24/15.
 */

angular.module('yc.navbar.affix.dual.state',[])
    .directive('ycNavbarAffixDualState', function ($window) {
        return {
            restrict: 'A',
            scope: true,
            template: '<div ng-include="templateUrl" ng-show="tplSwitch"></div>' +
                        '<div ng-include="templateUrlAffix" ng-show="!tplSwitch"></div>',
            link: function (scope, element, attrs) {
                scope.tplSwitch = true;
                scope.templateUrl = attrs.templateUrl;
                scope.templateUrlAffix = attrs.templateUrlAffix;
                angular.element($window).bind('scroll', function(){
                    scope.$apply(function(){
                        if(scope.condition()) {
                            scope.tplSwitch = false;
                        } else {
                            scope.tplSwitch = true;
                        }
                    });
                });
            }
        };
    });