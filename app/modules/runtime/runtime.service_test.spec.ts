//import "reflect-metadata"; // https://github.com/angular/angular/issues/5306
import "reflect-metadata";
import {provide, Injector} from "angular2/core";
import {Http, HTTP_PROVIDERS, XHRBackend, ResponseOptions, BaseRequestOptions, Response, Headers} from "angular2/http";
import {MockBackend, MockConnection} from "angular2/http/testing";
import {Runtime} from "./runtime.model";
import {RuntimeService} from "./runtime.service";
import {RUNTIMES, MockRuntimeService} from "./mock-runtimes";

import {
  describe,
  expect,
  beforeEach,
  it,
  inject,
  injectAsync,
  beforeEachProviders
} from "angular2/testing";

describe("Runtime Service", () => {
  beforeEachProviders(() => {
  return [
      HTTP_PROVIDERS,
      provide(XHRBackend, {useClass: MockBackend}),
      RuntimeService
    ];
  });

  it("should return the right Runtime properties when asking for runtimes",
    inject([XHRBackend, RuntimeService],
      (mockBackend, runtimeService) => {
    let mockResponse = RUNTIMES;
    let responseOptions = new ResponseOptions({body: mockResponse});
    mockBackend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(new Response(responseOptions)));
    // with our mock response configured, we now can
    // ask the runtime service to get our runtime entries
    // and then test them
    runtimeService.getRuntimes().subscribe(
      runtimes => {
      expect(runtimes.length).toBe(1);
      expect(runtimes[0].name).toBe("runtime1");
    });
  }));

  it("should return the same runtimes when using mockservice",
    inject([XHRBackend], (mockBackend) => {
    let mockResponse = RUNTIMES;
    let responseOptions = new ResponseOptions({body: mockResponse});
    mockBackend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(new Response(responseOptions))
    );

    let runtimeService = new MockRuntimeService();
    runtimeService.getRuntimes().subscribe(
      runtimes => {
        expect(runtimes.length).toBe(1);
        expect(runtimes[0].name).toBe("runtime1");
      }
    );
  }));

  it("should return the runtime when using specific id",
    inject([XHRBackend], (mockBackend) => {
    let mockResponse = RUNTIMES;
    let responseOptions = new ResponseOptions({body: mockResponse});
    mockBackend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(new Response(responseOptions))
    );

    let runtimeService = new MockRuntimeService();
    runtimeService.getRuntime("test-runtime").subscribe(
      runtime => {
        expect(runtime.name).toBe("runtime1");
      }
    );
  }));

});
