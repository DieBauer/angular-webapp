import {Runtime} from "./runtime.model";
import {RuntimeService} from "./runtime.service";
import {Observable} from "rxjs/Rx";

export var RUNTIMES: Runtime[] = [
  {"name": "runtime1", "status": "running", "json": "{}", "links": ["",""], "starttime": "2016-01-28T13:57:36.355"}
];

export class MockRuntimeService extends RuntimeService {
  constructor() {
    super(null);
  }

  getRuntimes() {
  //  console.log('sending fake answers!');
    return Observable.of(RUNTIMES);
  }

  getRuntime(id: string) {
    return Observable.of(RUNTIMES[0]);
  }
}
