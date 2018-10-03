import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DdsapGlobalDataService {

  constructor() { }

  global = {
    tid: null
  };

}
