import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() { }

  getStatus(data: boolean): string {
    if(data) {
      return "On";
    } else {
      return "Off";
    }
  }
}
