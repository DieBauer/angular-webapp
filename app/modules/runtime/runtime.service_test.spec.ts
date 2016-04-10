//import "reflect-metadata"; // https://github.com/angular/angular/issues/5306
import "reflect-metadata";
import {Http, HTTP_PROVIDERS, XHRBackend, ResponseOptions, Response, Headers} from "angular2/http";
import {MockBackend} from "angular2/http/testing";
import {Runtime} from "./runtime.model";
import {RuntimeService} from "./runtime.service";
import {RUNTIMES} from "./mock-runtimes";
import {
  describe,
  expect,
  beforeEach,
  it,
  inject,
  injectAsync,
  beforeEachProviders
} from "angular2/testing";
import {provide, Injector} from "angular2/core";


describe("Runtime Service", () => {

  beforeEachProviders(() => {
  [
      HTTP_PROVIDERS,
      provide(XHRBackend, {useClass: MockBackend}),
      RuntimeService
    ];
  });

  it("should respect your expectation",
    inject([RuntimeService, MockBackend],
      (runtimeService, mockBackend) => {
    let response = RUNTIMES[0];
    let responseOptions = new ResponseOptions({body: response});
    mockBackend.connections.subscribe(
      c => c.mockRespond(new Response(responseOptions)));
      // with our mock response configured, we now can
    // ask the blog service to get our blog entries
    // and then test them
    runtimeService.getRuntimes().subscribe((runtimes: Runtime[]) => {
      expect(runtimes.length).toBe(1);
      expect(runtimes[0].name).toBe("runtime1");
    });

  }));

});
