import { Component } from '@angular/core';
import { HomeService, UserData } from '../shared';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import {User} from "../shared/user.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // userData: Observable<UserData[]> = this.homeService.data$;
  userData: Observable<UserData[]> = this.homeService.data$;
  loggedUser: Observable<User> = this.homeService.loggedUser$;

  constructor(private homeService: HomeService) {
    console.log(this.userData);
  }
}
