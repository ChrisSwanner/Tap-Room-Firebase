import { Injectable } from '@angular/core';
import { Keg } from './keg.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class KegService {


  kegs: FirebaseListObservable<any[]>;

  getKegs() {
    return this.kegs;
  }

  addKeg(newKeg: Keg) {
  this.kegs.push(newKeg);
  }

  constructor(private database: AngularFireDatabase) {
    this.kegs = database.list('kegs');
   }

  getKegById(kegId: string) {
  return this.database.object('kegs/' + kegId);
  }

  updatePintsLeft(localUpdatedKeg) {
    let kegEntryInFirebase = this.getKegById(localUpdatedKeg.$key);
    kegEntryInFirebase.update({pintsLeft: localUpdatedKeg.pintsLeft})

  }

  updateSalePrice(localUpdatedKeg) {
    let kegEntryInFirebase = this.getKegById(localUpdatedKeg.$key);
    kegEntryInFirebase.update({salePrice: localUpdatedKeg.salePrice})

  }

  updateKeg(localUpdatedKeg) {
    let kegEntryInFirebase = this.getKegById(localUpdatedKeg.$key);
    kegEntryInFirebase.update({name: localUpdatedKeg.name,
                                alcoholContent: localUpdatedKeg.alcoholContent,
                                price: localUpdatedKeg.price,
                                style: localUpdatedKeg.style});
  }

  deleteKeg(localKegToDelete) {
    let kegEntryInFirebase = this.getKegById(localKegToDelete.$key);
    kegEntryInFirebase.remove();
  }
}
