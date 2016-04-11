import {Http, Response, Headers} from "angular2/http";
import {Observable} from "rxjs/Rx";
import {Observer} from "rxjs/Observer";
import {Runtime} from "./runtime.model";
import {Injectable} from "angular2/core";

@Injectable()
export class RuntimeService {
  runtimes$: Observable<Runtime[]>;
  private _runtimeModelObserver: Observer<Runtime[]>;
  private _dataStore: {
      runtimes: Runtime[]
  };
  headers: Headers;
  private _endpoint: string;

  constructor(private http: Http) {
    this._dataStore = { runtimes: [] };
    this.runtimes$ = new Observable(observer => this._runtimeModelObserver = observer)
      .startWith(this._dataStore.runtimes)
      .share();

    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json");

    this._endpoint = "http://localhost";
  }

  getRuntimes(): Observable<any> {
    return this.http.get(this._endpoint+"/api/runtimes", {headers: this.headers})
    .map(response => response.json());
  }

}
