"use strict";

// import Angular 2
import {Component} from "angular2/core";

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router";

// app components
import {Home} from "../pages/home/home";
import {Login} from "../pages/login/login";
import {Dashboard} from "../pages/dashboard/dashboard";

// app services
//import {appServicesInjectables} from "core/services/services";
//import {RuntimeService} from "../modules/runtime/runtime.service";

@Component({
	selector: "app",
	templateUrl: "core/app.template.html", //template: "<router-outlet></router-outlet>",
	directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
	{ path: "/home", component: Home, as: "Home", data: undefined, useAsDefault: true },
	{ path: "/login", component: Login, as: "Login" },
	{ path: "/dashboard", component: Dashboard, as: "Dashboard" }
])
export class App {
	constructor() {
		console.log("Application bootstrapped!");
	}
}
