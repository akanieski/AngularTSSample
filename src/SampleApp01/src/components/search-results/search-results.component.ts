import * as Spotify from "../../services/spotify.service"

export class SearchResultsController {
    results: Spotify.IQueryResult;

    constructor() {
        
    }
}

export class SearchResultsComponent implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: string;
    public controllerAs: string;

    constructor() {
        this.bindings = {
            "results": "=results"
        };
        this.controller = SearchResultsController;
        this.templateUrl = "components/search-results/search-results.component.html";
        this.controllerAs = "viewModel";

    }

}