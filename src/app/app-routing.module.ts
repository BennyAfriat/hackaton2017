import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefectsComponent } from './defects/defects.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path: '',        redirectTo: '/home', pathMatch: 'full' },
  {path: 'home',    component: HomeComponent},
  {path: 'defects',   component: DefectsComponent},
  {path: 'widgets', component: WidgetsComponent},
  {path: 'users',   component: UsersComponent},
  {path: '**',      redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
