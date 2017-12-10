import { Injectable } from '@angular/core';
import { ItemsService } from './items.service';
import { DefectsService } from './defects.service';
import { WidgetsService } from './widgets.service';
import { UsersService } from './users.service';
import { Defect } from './defect.model';
import { Widget } from './widget.model';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';

export interface UserData {
  name: string;
  defects: Defect[];
}

@Injectable()
export class HomeService {
  loggedUser$: Observable<User> = this.usersService.user$;
  defects$: Observable<Defect[]> = this.defectsService.defects$;
  users$: Observable<User[]> = this.usersService.users$;
  widgets$: Observable<Widget[]> = this.widgetsService.widgets$;
  data$: Observable<UserData[]> = Observable.combineLatest(
    this.users$, this.defects$,
    (users,defects) => {
      return users.map(user => {
        return Object.assign({}, {
          name: user.firstName + " " + user.lastName,
          defects: defects.filter(defect => defect.assignedId === user.employeeId)
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
