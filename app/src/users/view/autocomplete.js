/**
 * Created by NhatDoan on 3/24/15.
 */
(function () {
    'use strict';
    angular
        .module('autocompleteFloatingLabelDemo', ['ngMaterial'])
        .controller('DemoCtrl', DemoCtrl);
    function DemoCtrl ($timeout, $q) {
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
        function querySearch (query) {
            var results = query ? self.states.filter( createFilterFor(query) ) : [];
            return results;
        }
        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var stepType = 'Incubate, Dispense, Transfer, Spin, Read, Aspirate';
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