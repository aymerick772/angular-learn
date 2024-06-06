import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() type: string = 'info';
  cssClass: string[] = ['alert', 'alert-dismissible', 'fade'];

  ngOnInit() {
    switch (this.type) {
      case 'success':
        this.cssClass.push('alert-success');
        break;
      case 'danger':
        this.cssClass.push('alert-danger');
        break;
      case 'warning':
        this.cssClass.push('alert-warning');
        break;
      default:
        this.cssClass.push('alert-info');
        break;
    }
  }

  removeAlert() {
    this.cssClass = ['alert-hide'];
  }
}
