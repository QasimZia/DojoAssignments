import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = { 
    firstName: '',
    lastName: '',
   };
  users = [];

  onSubmit() {
    this.users.push(this.user);
    this.user = {
      firstName: '',
      lastName: '',
    }
    console.log('submit function');
    return this;
  }
}
