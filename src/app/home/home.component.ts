import { Component,OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HomeService, UserData } from '../shared';
import { Observable } from 'rxjs/Observable';
import { UsersService, User, DefectsService, Defect } from '../shared';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   users$: Observable<User[]>;
   defects$:  Observable<Defect[]>;
  
  constructor(private usersService: UsersService, private defectsService: DefectsService) {
    // console.log(this.userData);
  }

  ngOnInit() {
   this.users$ = this.usersService.users$;
   this.defects$ = this.defectsService.defects$;
    //this.usersService.loadUsers();
    this.usersService.loadTopUsers();
    this.defectsService.loadDefects();
  }
}
