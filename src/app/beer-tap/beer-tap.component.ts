import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg.model';
import { Router } from '@angular/router';
import { KegService } from '../keg.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-beer-tap',
  templateUrl: './beer-tap.component.html',
  styleUrls: ['./beer-tap.component.css'],
  providers: [KegService]
})
export class BeerTapComponent {

  currentRoute: string = this.router.url;
  public isHappyHour: boolean = false;
  public addingKeg: boolean = false;
  public kegFilter: boolean = false;

  constructor(private router: Router, private kegService: KegService) { }
  kegs: FirebaseListObservable<any[]>;
  filteredKegs: Keg[] = [];
  kegDisplay;

  ngOnInit() {
    this.kegService.getKegs().subscribe(dataLastEmittedFromObserver => {
       this.kegDisplay= dataLastEmittedFromObserver;
    })
    let interval = setInterval(() => {
    let currentTime = new Date();
    if (currentTime.getHours() === 17) {
      this.isHappyHour = true;
      for (let i = 0; i < this.kegDisplay.length; i++) {
        let number = (this.kegDisplay[i].price - (0.25 * this.kegDisplay[i].price));
        this.kegDisplay[i].salePrice = Math.round(number * 1e2) / 1e2;
        this.kegService.updateSalePrice(this.kegDisplay[i]);

       }
     } else if ((currentTime.getHours() >= 21) || (currentTime.getHours() < 17)) {
        this.isHappyHour = false;
        for (let i = 0; i < this.kegDisplay.length; i++) {
          if(this.kegDisplay[i].onSale = false) {
            this.kegDisplay[i].salePrice = 0;
            this.kegService.updateSalePrice(this.kegDisplay[i]);
          }
        }
      }
    }, 1000);
    this.kegs = this.kegService.getKegs();
  }
  addNewKeg() {
    this.addingKeg = true;
  }

  alcoholContentColor(currentKeg) {
    if (currentKeg.empty === true) {
      return "doneEditing"
    }
    if(currentKeg.pintsLeft <= 10) {
      return "lowPints";
    } else if (currentKeg.price <= 5) {
      return "bg-info";
    } else if (currentKeg.price <= 9) {
      return "bg-warning";
    } else if (currentKeg.price <= 13) {
      return "bg-danger";
    } else if (currentKeg.price > 13) {
      return "bg-success";
    }
  }

  beginUpdatingKeg(kegToUpdate){
    this.kegService.updateKeg(kegToUpdate);
  }

  sellPint(currentKeg) {
    this.kegService.updatePintsLeft(currentKeg);
    if (currentKeg.pintsLeft > 0) {
      currentKeg.pintsLeft -= 1;
    } else if (currentKeg.pintsLeft === 0) {
      alert("All out");
    }
  }

  sellGrowler(currentKeg) {
    this.kegService.updatePintsLeft(currentKeg);
    if (currentKeg.pintsLeft > 2) {
      currentKeg.pintsLeft -= 2;
    } else if ((currentKeg.pintsLeft < 2) && (currentKeg.pintsLeft > 0)) {
      alert("Not Enough Beer");
    } else if (currentKeg.pintsLeft === 0) {
      alert("All out")
    }
  }

  sellBigGrowler(currentKeg) {
    this.kegService.updatePintsLeft(currentKeg);
    if (currentKeg.pintsLeft > 4) {
      currentKeg.pintsLeft -= 4;
    } else if ((currentKeg.pintsLeft < 4)&&(currentKeg.pintsLeft > 0)) {
      alert("GET A SMALLER GROWLER");
    } else if (currentKeg.pintsLeft === 0) {
      alert("All out");
    }
  }

  sale(currentKeg, percentage){
    let number = (currentKeg.price - (percentage * 0.01 * currentKeg.price));
    currentKeg.salePrice = Math.round(number * 1e2) / 1e2;
    currentKeg.onSale = true;
    this.kegService.updateSalePrice(currentKeg);
  }

  resetSale(currentKeg){
    currentKeg.salePrice = 0;
    currentKeg.onSale = false;
    this.kegService.updateSalePrice(currentKeg);
  }

  filterKegs(style){
    this.filteredKegs = [];
    this.kegFilter = true;
    for(let i = 0; i < this.kegDisplay.length; i++){
      if(this.kegDisplay[i].style === style){
        this.filteredKegs.push(this.kegDisplay[i])
      }
    }
  }


}
