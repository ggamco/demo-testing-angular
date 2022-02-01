import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-demo',
  template: `<button (click)="clicked()">Click me!</button>
  <span>{{message}}</span>`
})
export class DemoComponent implements OnInit {

  isOn = false;
  message = "Off";

  constructor(private service: StatusService) { }

  ngOnInit(): void {
  }

  clicked() {
    this.isOn = !this.isOn;
    this.message = this.service.getStatus(this.isOn);
  }

}
