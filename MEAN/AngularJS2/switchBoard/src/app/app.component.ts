import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches = [
    {
      'value': 'Off',
      'status': false,
      'color': 'red'
    },
    {
      'value': 'Off',
      'status': false,
      'color': 'red'
    },
    {
      'value': 'Off',
      'status': false,
      'color': 'red'
    },
    {
      'value': 'Off',
      'status': false,
      'color': 'red'
    },
    {
      'value': 'Off',
      'status': false,
      'color': 'red'
    },
    {
      'value': 'Off',
      'status': false,
      'color': 'red'
    },
    {
      'value': 'Off',
      'status': false,
      'color': 'red'
    },
    {
      'value': 'Off',
      'status': false,
      'color': 'red'
    },
    {
      'value': 'Off',
      'status': false,
      'color': 'red'
    },
    {
      'value': 'Off',
      'status': false,
      'color': 'red'
    },   
  ]

  changeStatus(btn) {
    if(btn.status == true) {
      btn.status = false;
      btn.value = 'Off';
      btn.color = 'red'
    } else {
      btn.status = true;
      btn.value = 'On';
      btn.color = 'green';
    }
  }

}
