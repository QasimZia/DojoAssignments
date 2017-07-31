import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkStatus: boolean[] = [false, false, false, false];
  date: any;

  pstClicked() {
    this.checkStatus[0] = true;
    this.checkStatus[1] = false;
    this.checkStatus[2] = false;
    this.checkStatus[3] = false;

    this.date = new Date();
    console.log(this.date);
    return;
  }

  mstClicked() {
    this.checkStatus[0] = false;
    this.checkStatus[1] = true;
    this.checkStatus[2] = false;    
    this.checkStatus[3] = false;

    this.date = new Date();
    console.log(this.date);
    return;
  }

  cstClicked() {
    this.checkStatus[0] = false;
    this.checkStatus[1] = false;
    this.checkStatus[2] = true;    
    this.checkStatus[3] = false;

    this.date = new Date();
    console.log(this.date);
    return;
  }

  estClicked() {
    this.checkStatus[0] = false;
    this.checkStatus[1] = false;
    this.checkStatus[2] = false;    
    this.checkStatus[3] = true;
    
    this.date = new Date();
    console.log(this.date);
    return;
  }


  resetAll() {
    this.checkStatus[0] = false;
    this.checkStatus[1] = false;
    this.checkStatus[2] = false;
    this.checkStatus[3] = false;    
    this.date = "";
    return;
  }
}
