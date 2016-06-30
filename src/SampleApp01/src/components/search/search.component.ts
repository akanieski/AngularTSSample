import * as Spotify from "../../services/spotify.service"

export class SearchController {
    static $inject: string[] = ['$scope', 'SpotifyService'];
    results: Spotify.IQueryResult = null;
    query: string;

    constructor(private $scope: ng.IScope, private spotify: Spotify.SpotifyService) {

    }

    search() {
        this.spotify
            .search(this.query)
            .then((result: Spotify.IQueryResult) => {
                this.results = result;
            });
    }
}

export class SearchComponent implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: string;
    public controllerAs: string;

    constructor() {
        this.bindings = {
        };
        this.controller = SearchController;
        this.templateUrl = "components/search/search.component.html";
        this.controllerAs = "viewModel";

    }

}