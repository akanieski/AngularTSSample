define("components/greeting/greeting.component", ["require", "exports"], function (require, exports) {
    "use strict";
    var GreetingController = (function () {
        function GreetingController() {
            this.greeting = "Hello World from TS";
        }
        return GreetingController;
    }());
    exports.GreetingController = GreetingController;
    var GreetingComponent = (function () {
        function GreetingComponent() {
            this.bindings = {};
            this.controller = GreetingController;
            this.templateUrl = "components/greeting/greeting.component.html";
            this.controllerAs = "viewModel";
        }
        return GreetingComponent;
    }());
    exports.GreetingComponent = GreetingComponent;
});
define("services/spotify.service", ["require", "exports"], function (require, exports) {
    "use strict";
    var IQueryResult = (function () {
        function IQueryResult() {
        }
        return IQueryResult;
    }());
    exports.IQueryResult = IQueryResult;
    var IArtistQueryResult = (function () {
        function IArtistQueryResult() {
        }
        return IArtistQueryResult;
    }());
    exports.IArtistQueryResult = IArtistQueryResult;
    var IArtistResult = (function () {
        function IArtistResult() {
        }
        return IArtistResult;
    }());
    exports.IArtistResult = IArtistResult;
    var SpotifyService = (function () {
        function SpotifyService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.spotifyUrl = "https://api.spotify.com/v1/search";
        }
        SpotifyService.prototype.search = function (query) {
            var _this = this;
            return this.$q(function (resolve, reject) {
                if (query) {
                    _this.$http
                        .get(_this.spotifyUrl + "?q=" + query + "&type=artist")
                        .then(function (response) { return resolve(response.data); }, function (response) { return reject(response.data); });
                }
                else {
                    resolve(null);
                }
            });
        };
        SpotifyService.$inject = ['$http', '$q'];
        return SpotifyService;
    }());
    exports.SpotifyService = SpotifyService;
});
define("components/search-results/search-results.component", ["require", "exports"], function (require, exports) {
    "use strict";
    var SearchResultsController = (function () {
        function SearchResultsController() {
        }
        return SearchResultsController;
    }());
    exports.SearchResultsController = SearchResultsController;
    var SearchResultsComponent = (function () {
        function SearchResultsComponent() {
            this.bindings = {
                "results": "=results"
            };
            this.controller = SearchResultsController;
            this.templateUrl = "components/search-results/search-results.component.html";
            this.controllerAs = "viewModel";
        }
        return SearchResultsComponent;
    }());
    exports.SearchResultsComponent = SearchResultsComponent;
});
define("components/search/search.component", ["require", "exports"], function (require, exports) {
    "use strict";
    var SearchController = (function () {
        function SearchController($scope, spotify) {
            this.$scope = $scope;
            this.spotify = spotify;
            this.results = null;
        }
        SearchController.prototype.search = function () {
            var _this = this;
            this.spotify
                .search(this.query)
                .then(function (result) {
                _this.results = result;
            });
        };
        SearchController.$inject = ['$scope', 'SpotifyService'];
        return SearchController;
    }());
    exports.SearchController = SearchController;
    var SearchComponent = (function () {
        function SearchComponent() {
            this.bindings = {};
            this.controller = SearchController;
            this.templateUrl = "components/search/search.component.html";
            this.controllerAs = "viewModel";
        }
        return SearchComponent;
    }());
    exports.SearchComponent = SearchComponent;
});
define("app", ["require", "exports", "components/greeting/greeting.component", "components/search-results/search-results.component", "components/search/search.component", "services/spotify.service"], function (require, exports, Greeting, SearchResults, Search, Spotify) {
    "use strict";
    var MainApp = (function () {
        function MainApp() {
            console.log("[INFO] Main app starting");
            angular
                .module("MainApp", [])
                .service("SpotifyService", Spotify.SpotifyService)
                .component("mainAppGreeting", new Greeting.GreetingComponent())
                .component("searchResults", new SearchResults.SearchResultsComponent())
                .component("search", new Search.SearchComponent())
                .controller("SiteController", [function () {
                }]);
        }
        return MainApp;
    }());
    exports.MainApp = MainApp;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50cy9ncmVldGluZy9ncmVldGluZy5jb21wb25lbnQudHMiLCIuLi9zcmMvc2VydmljZXMvc3BvdGlmeS5zZXJ2aWNlLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCIuLi9zcmMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUE7UUFHSTtZQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7UUFDMUMsQ0FBQztRQUNMLHlCQUFDO0lBQUQsQ0FBQyxBQU5ELElBTUM7SUFOWSwwQkFBa0IscUJBTTlCLENBQUE7SUFFRDtRQU1JO1lBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUdmLENBQUE7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFBO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsNkNBQTZDLENBQUE7WUFDaEUsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUE7UUFFbkMsQ0FBQztRQUVMLHdCQUFDO0lBQUQsQ0FBQyxBQWpCRCxJQWlCQztJQWpCWSx5QkFBaUIsb0JBaUI3QixDQUFBOzs7O0lDekJEO1FBQUE7UUFFQSxDQUFDO1FBQUQsbUJBQUM7SUFBRCxDQUFDLEFBRkQsSUFFQztJQUZZLG9CQUFZLGVBRXhCLENBQUE7SUFDRDtRQUFBO1FBUUEsQ0FBQztRQUFELHlCQUFDO0lBQUQsQ0FBQyxBQVJELElBUUM7SUFSWSwwQkFBa0IscUJBUTlCLENBQUE7SUFDRDtRQUFBO1FBVUEsQ0FBQztRQUFELG9CQUFDO0lBQUQsQ0FBQyxBQVZELElBVUM7SUFWWSxxQkFBYSxnQkFVekIsQ0FBQTtJQUVEO1FBSUksd0JBQ1ksS0FBc0IsRUFDdEIsRUFBZ0I7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QUMsaUJBQWlCLEVBQUUsSUFBSSxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDOUQsU0FBUyxDQUFDLGVBQWUsRUFBRSxJQUFJLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2lCQUN0RSxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUVqRCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFFL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVYLENBQUM7UUFDTCxjQUFDO0lBQUQsQ0FBQyxBQXBCRCxJQW9CQztJQXBCWSxlQUFPLFVBb0JuQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdyZWV0aW5nQ29udHJvbGxlciB7XHJcbiAgICBncmVldGluZzogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ3JlZXRpbmcgPSBcIkhlbGxvIFdvcmxkIGZyb20gVFNcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyZWV0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgbmcuSUNvbXBvbmVudE9wdGlvbnMge1xyXG4gICAgcHVibGljIGJpbmRpbmdzOiBhbnlcclxuICAgIHB1YmxpYyBjb250cm9sbGVyOiBhbnlcclxuICAgIHB1YmxpYyB0ZW1wbGF0ZVVybDogc3RyaW5nXHJcbiAgICBwdWJsaWMgY29udHJvbGxlckFzOiBzdHJpbmdcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzID0ge1xyXG4gICAgICAgICAgICAvKiBBZGQgc2NvcGUgYmluZGluZ3MgaGVyZSAqL1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gR3JlZXRpbmdDb250cm9sbGVyXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVVybCA9IFwiY29tcG9uZW50cy9ncmVldGluZy9ncmVldGluZy5jb21wb25lbnQuaHRtbFwiXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSBcInZpZXdNb2RlbFwiXHJcblxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBJUXVlcnlSZXN1bHQge1xyXG4gICAgYXJ0aXN0czogSUFydGlzdFF1ZXJ5UmVzdWx0O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBJQXJ0aXN0UXVlcnlSZXN1bHQge1xyXG4gICAgaHJlZjogc3RyaW5nO1xyXG4gICAgaXRlbXM6IElBcnRpc3RSZXN1bHRbXTtcclxuICAgIGxpbWl0OiBudW1iZXI7XHJcbiAgICBuZXh0OiBzdHJpbmc7XHJcbiAgICBvZmZzZXQ6IG51bWJlcjtcclxuICAgIHByZXZpb3VzOiBzdHJpbmc7XHJcbiAgICB0b3RhbDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBJQXJ0aXN0UmVzdWx0IHtcclxuICAgIGhyZWY6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBpbWFnZXM6IHsgaGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIHVybDogc3RyaW5nIH1bXTtcclxuICAgIGZvbGxvd2VyczogeyBocmVmOiBzdHJpbmcsIHRvdGFsOiBudW1iZXIgfTtcclxuICAgIGV4dGVybmFsX3VybHM6IHsgc3BvdGlmeTogc3RyaW5nIH07XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwb3B1bGFyaXR5OiBudW1iZXI7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICB1cmk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwb3RpZnlTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0OiBzdHJpbmdbXSA9IFsnJGh0dHAnLCAnJHEnXTtcclxuICAgIHNwb3RpZnlVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvc2VhcmNoXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSAkaHR0cDogbmcuSUh0dHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgJHE6IG5nLklRU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaChxdWVyeTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHEoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocXVlcnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHBcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0PElRdWVyeVJlc3VsdD4oYCR7dGhpcy5zcG90aWZ5VXJsfT9xPSR7cXVlcnl9JnR5cGU9YXJ0aXN0YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc29sdmUocmVzcG9uc2UuZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiByZWplY3QocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgU3BvdGlmeSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3BvdGlmeS5zZXJ2aWNlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN1bHRzQ29udHJvbGxlciB7XHJcbiAgICByZXN1bHRzOiBTcG90aWZ5LklRdWVyeVJlc3VsdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3VsdHNDb21wb25lbnQgaW1wbGVtZW50cyBuZy5JQ29tcG9uZW50T3B0aW9ucyB7XHJcbiAgICBwdWJsaWMgYmluZGluZ3M6IGFueTtcclxuICAgIHB1YmxpYyBjb250cm9sbGVyOiBhbnk7XHJcbiAgICBwdWJsaWMgdGVtcGxhdGVVcmw6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb250cm9sbGVyQXM6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzID0ge1xyXG4gICAgICAgICAgICBcInJlc3VsdHNcIjogXCI9cmVzdWx0c1wiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBTZWFyY2hSZXN1bHRzQ29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlVXJsID0gXCJjb21wb25lbnRzL3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5odG1sXCI7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSBcInZpZXdNb2RlbFwiO1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgKiBhcyBTcG90aWZ5IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zcG90aWZ5LnNlcnZpY2VcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljICRpbmplY3Q6IHN0cmluZ1tdID0gWyckc2NvcGUnLCAnU3BvdGlmeVNlcnZpY2UnXTtcclxuICAgIHJlc3VsdHM6IFNwb3RpZnkuSVF1ZXJ5UmVzdWx0ID0gbnVsbDtcclxuICAgIHF1ZXJ5OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IG5nLklTY29wZSwgcHJpdmF0ZSBzcG90aWZ5OiBTcG90aWZ5LlNwb3RpZnlTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLnNwb3RpZnlcclxuICAgICAgICAgICAgLnNlYXJjaCh0aGlzLnF1ZXJ5KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBTcG90aWZ5LklRdWVyeVJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIG5nLklDb21wb25lbnRPcHRpb25zIHtcclxuICAgIHB1YmxpYyBiaW5kaW5nczogYW55O1xyXG4gICAgcHVibGljIGNvbnRyb2xsZXI6IGFueTtcclxuICAgIHB1YmxpYyB0ZW1wbGF0ZVVybDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbnRyb2xsZXJBczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBTZWFyY2hDb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVVcmwgPSBcImNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbFwiO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gXCJ2aWV3TW9kZWxcIjtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0ICogYXMgR3JlZXRpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9ncmVldGluZy9ncmVldGluZy5jb21wb25lbnRcIlxyXG5pbXBvcnQgKiBhcyBTZWFyY2hSZXN1bHRzIGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50XCJcclxuaW1wb3J0ICogYXMgU2VhcmNoIGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIlxyXG5pbXBvcnQgKiBhcyBTcG90aWZ5IGZyb20gXCIuL3NlcnZpY2VzL3Nwb3RpZnkuc2VydmljZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbkFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIltJTkZPXSBNYWluIGFwcCBzdGFydGluZ1wiKTtcclxuXHJcbiAgICAgICAgYW5ndWxhclxyXG4gICAgICAgICAgICAubW9kdWxlKFwiTWFpbkFwcFwiLCBbXSlcclxuXHJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gY2FsbCAnbmV3JyBvbiBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAuc2VydmljZShcIlNwb3RpZnlTZXJ2aWNlXCIsIFNwb3RpZnkuU3BvdGlmeVNlcnZpY2UpXHJcblxyXG4gICAgICAgICAgICAvLyBDb21wb25lbnRzIGFyZSAnbmV3J2QgdXAgLS0gdGhpcyBpcyBkdWUgdG8gYW5ndWxhcidzIGFjY2VwdGFuY2Ugb2YgYSBjb21wb25lbnQgZGVmaW5pdGlvbiBvYmplY3Qgbm90IGEgY2xhc3NcclxuICAgICAgICAgICAgLmNvbXBvbmVudChcIm1haW5BcHBHcmVldGluZ1wiLCBuZXcgR3JlZXRpbmcuR3JlZXRpbmdDb21wb25lbnQoKSlcclxuICAgICAgICAgICAgLmNvbXBvbmVudChcInNlYXJjaFJlc3VsdHNcIiwgbmV3IFNlYXJjaFJlc3VsdHMuU2VhcmNoUmVzdWx0c0NvbXBvbmVudCgpKVxyXG4gICAgICAgICAgICAuY29tcG9uZW50KFwic2VhcmNoXCIsIG5ldyBTZWFyY2guU2VhcmNoQ29tcG9uZW50KCkpXHJcblxyXG4gICAgICAgICAgICAuY29udHJvbGxlcihcIlNpdGVDb250cm9sbGVyXCIsIFtmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICBcclxuICAgIH1cclxufSJdfQ==