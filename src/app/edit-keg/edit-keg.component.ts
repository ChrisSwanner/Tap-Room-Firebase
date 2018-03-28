import { Component, OnInit, Input } from '@angular/core';
import { KegService } from '../keg.service';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css'],
  providers: [KegService]
})
export class EditKegComponent implements OnInit {
  @Input() selectedKeg;
  constructor(private kegService: KegService) { }

  ngOnInit() {
  }
  beginUpdatingKeg(kegToUpdate){
    this.kegService.updateKeg(kegToUpdate);
  }

  beginDeletingKeg(kegToDelete) {
    if (confirm("Are you sure you want to delete this keg?")) {
      this.kegService.deleteKeg(kegToDelete);
    }
  }
}
