/**
 * Created by weaamalgheraibi on 3/25/15.
 */

(function () {
    'use strict';
    angular
        .module('autocompleteFloatingLabelDemo', ['ngMaterial'])
        .controller('SamplesCtrl', DemoCtrl);
    function DemoCtrl ($timeout, $q, $scope) {
        var self = this;
        // list of `state` value/display objects
        self.states        = loadAll();
        self.selectedItem  = null;
        self.searchText    = null;
        self.querySearch   = querySearch;
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        $scope.addItem = function() {
            $scope.todos = ["sds", "fsdf"];
        }
        function querySearch (query) {
            var results = query ? self.states.filter( createFilterFor(query) ) : [];
            return results;
        }
        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var stepType = 'advanced Neovascular AMD, artery occlusion, OU, ' +
                'intermediate , large drusen, pigment change,  large drusen , 20/20 vision,  neovascularization, ' +
                'Advanced AMD , CNV , Advanced GA';
            return stepType.split(/, +/g).map( function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }

    }
})();