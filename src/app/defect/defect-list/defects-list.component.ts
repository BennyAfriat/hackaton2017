import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Defect } from '../../shared';

@Component({
  selector: 'defect-list',
  templateUrl: './defects-list.component.html',
  styleUrls: ['./defect-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefectListComponent {
  @Input() defects: Defect[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
