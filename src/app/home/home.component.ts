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
   defectsByUserId$:  Observable<Defect[]>;
   defectsByPopularity$:  Observable<Defect[]>;
  
  constructor(private usersService: UsersService, private defectsService: DefectsService) {
    // console.log(this.userData);
  }

  ngOnInit() {
   this.users$ = this.usersService.users$;
  this.defectsByUserId$ = this.defectsService.defectsByUserId$;
   this.defectsByPopularity$ = this.defectsService.defectsByPopularity$;
    //this.usersService.loadUsers();
    this.usersService.loadTopUsers();
    
    this.defectsService.loadDefectsByUserID(15487563);
    //this.defectsService.loadHottestDefects();
   // this.defectsService.loadDefects();
  }
}
