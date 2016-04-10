"use strict";

// import Angular 2
import {Component} from "angular2/core";

@Component({
	selector: "page-login",
	templateUrl: "pages/login/login.template.html",
	directives: []
})
export class Login {
	constructor() {
		console.log("Login component loaded");
	}
}
