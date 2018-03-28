import { Component, OnInit } from '@angular/core';
import { KegService } from '../keg.service';
import { Keg } from '../keg.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [KegService]
})
export class AdminComponent implements OnInit {

  constructor(private kegService: KegService) { }

  ngOnInit() {
  }

  submitForm(name: string, alcoholContent: number, price: number, style: string) {
    let newKeg: Keg = new Keg(name, alcoholContent,price,style);
    this.kegService.addKeg(newKeg);
  }

}
