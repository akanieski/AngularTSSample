import * as Greeting from "./components/greeting/greeting.component"
import * as SearchResults from "./components/search-results/search-results.component"
import * as Search from "./components/search/search.component"
import * as Spotify from "./services/spotify.service"

export class MainApp {
    constructor() {
        console.log("[INFO] Main app starting");

        angular
            .module("MainApp", [])

            // no need to call 'new' on services
            .service("SpotifyService", Spotify.SpotifyService)

            // Components are 'new'd up -- this is due to angular's acceptance of a component definition object not a class
            .component("mainAppGreeting", new Greeting.GreetingComponent())
            .component("searchResults", new SearchResults.SearchResultsComponent())
            .component("search", new Search.SearchComponent())

            .controller("SiteController", [function () {

            }])
        
    }
}