/**
 * Created by yuchen on 7/24/15.
 */

angular.module('yc.navbar.affix',[])
    .directive('ycNavbarAffix', function ($window) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                var orignOffsetTop = element[0].offsetTop;
                scope.condition = function() {
                    return $window.pageYOffset > orignOffsetTop;
                };

                angular.element($window).bind('scroll', function(){
                    scope.$apply(function(){
                        if(scope.condition()) {
                            angular.element(element).addClass('navbar-fixed-top');
                        } else {
                            angular.element(element).removeClass('navbar-fixed-top');
                        }
                    });
                });
            }
        };
    });