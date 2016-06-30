export class GreetingController {
    greeting: string;

    constructor() {
        this.greeting = "Hello World from TS";
    }
}

export class GreetingComponent implements ng.IComponentOptions {
    public bindings: any
    public controller: any
    public templateUrl: string
    public controllerAs: string

    constructor() {
        this.bindings = {
            /* Add scope bindings here */

        }
        this.controller = GreetingController
        this.templateUrl = "components/greeting/greeting.component.html"
        this.controllerAs = "viewModel"

    }

}