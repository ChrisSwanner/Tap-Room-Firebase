import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  ngOnInit() {
    let interval = setInterval(() => {
          let currentTime = new Date();
          if (currentTime.getHours() === 17) {
            this.isHappyHour = true;
          } else if (currentTime.getHours() === 21) {
            this.isHappyHour = false;
          }
          }, 1000);
  }
  title = 'The Salty Sea Dog';
  public isHappyHour: boolean = false;

  kegs: FirebaseListObservable<any[]>;
}
