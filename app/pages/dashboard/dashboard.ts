"use strict";

// import Angular 2
import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {RuntimeService} from "../../modules/runtime/runtime.service";
import {Runtime} from "../../modules/runtime/runtime.model";

@Component({
	selector: "page-dashboard",
	templateUrl: "pages/dashboard/dashboard.template.html",
	directives: [],
	providers: [RuntimeService]
})
export class Dashboard implements OnInit {
	private message: string = "Private message";
	constructor(private _runtimeService: RuntimeService) {
		console.log("Dashboard component loaded");
	}

	public componentRuntimes: Array<Runtime>;

	ngOnInit() {
    this._runtimeService.runtimes$.subscribe(updatedRuntimes => this.componentRuntimes = updatedRuntimes);
    this._runtimeService.getRuntimes();
  }

	loadRuntimes() {
		this._runtimeService.getRuntimes()
			.subscribe((data: Array<Runtime>) => {
        // Update data store
        this.componentRuntimes = data;

        // Push the new list of runtimes into the Observable stream
    //    this._runtimeModelObserver.next(this._dataStore.runtimes);
    }, error => console.log("Could not load runtimes."));
	}
}
