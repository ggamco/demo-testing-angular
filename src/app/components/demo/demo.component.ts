import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `<button (click)="clicked()">Click me!</button>
  <span>{{message}}</span>`
})
export class DemoComponent implements OnInit {

  isOn = false;
  message = "Off";

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.isOn = !this.isOn;
    if(this.isOn) {
      this.message = "On";
    } else {
      this.message = "Off";
    }
  }

}
