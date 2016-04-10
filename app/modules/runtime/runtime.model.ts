export interface Runtime {
  name: string;
  status: string;
  json: string;
  links: Array<string>;
  starttime: string;
}

export interface Links {
  to: string;
  from: string;
}
