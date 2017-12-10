import { Component,OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HomeService, UserData } from '../shared';
import { Observable } from 'rxjs/Observable';
import { UsersService, User } from '../shared';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // userData: Observable<UserData[]> = this.homeService.data$;
   users$: Observable<User[]>;
  //loggedUser: Observable<User> = this.homeService.loggedUser$;

  constructor(private usersService: UsersService) {
    // console.log(this.userData);
  }

  ngOnInit() {
   this.users$ = this.usersService.users$;
    //this.usersService.loadUsers();
    this.usersService.loadTopUsers();
    console.log(this.users$);
  }
}
