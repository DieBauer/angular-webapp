"use strict";

// import Angular 2
import {Component} from "angular2/core";

@Component({
	selector: "page-home",
	templateUrl: "pages/home/home.template.html",
	directives: []
})
export class Home {
	private message: string = "Private message";
	constructor() {
		console.log("Home component loaded");
	}
}
