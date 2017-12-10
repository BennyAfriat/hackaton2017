import { Injectable } from '@angular/core';
import { ItemsService } from './items.service';
import { DefectsService } from './defects.service';
import { WidgetsService } from './widgets.service';
import { UsersService } from './users.service';
import { Item } from './item.model';
import { Widget } from './widget.model';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { Defect } from './defect.model';

export interface UserData {
  name: string;
  defects: Defect[];
  widgets: Widget[];
}

@Injectable()
export class HomeService {
  defects$: Observable<Defect[]> = this.defectsService.defects$;
  users$: Observable<User[]> = this.usersService.users$;
  widgets$: Observable<Widget[]> = this.widgetsService.widgets$;
  data$: Observable<UserData[]> = Observable.combineLatest(
    this.users$, this.defects$, this.widgets$,
    (users,      defects,       widgets) => {
      return users.map(user => {
        return Object.assign({}, {
          name: user.name,
          defects: defects.filter(defect => defect.assignedId === user.id),
          widgets: widgets.filter(widget => widget.user === user.id)
        });
      });
  });

  constructor(
    private usersService: UsersService,
    private itemsService: ItemsService,
    private defectsService: DefectsService,
    private widgetsService: WidgetsService
  ) {
    this.usersService.loadUsers();
    this.itemsService.loadItems();
    this.defectsService.loadDefects();
    this.widgetsService.loadWidgets();
  }

}
