import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DefectsService, Defect } from '../shared';

@Component({
  selector: 'app-defects',
  templateUrl: './defects.component.html',
  styleUrls: ['./defects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefectsComponent implements OnInit {
  defects$: Observable<Defect[]>;
  selectedDefect: Defect;

  constructor(
    private defectsService: DefectsService
  ) {}

  ngOnInit() {
    //this.defects$ = this.defectsService.defectsByPopularity$;
    this.defects$ = this.defectsService.defectsByPopularity$;
    this.defectsService.loadDefects();
  }

  resetDefect() {
    let emptyDefect: Defect = null;
    this.selectedDefect = emptyDefect;
  }

  saveDefect(defect: Defect) {
    this.defectsService.saveDefect(defect);

    // Generally, we would want to wait for the result of `itemsService.saveItem`
    // before resetting the current item.
    this.resetDefect();
  }

  deleteDefect(defect: Defect) {
    this.defectsService.deleteDefect(defect);

    // Generally, we would want to wait for the result of `itemsService.deleteItem`
    // before resetting the current item.
    this.resetDefect();
  }
}

