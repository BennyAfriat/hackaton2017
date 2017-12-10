import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Defects Social Network';
  links = {
    items: ['/items'],
    widgets: ['/widgets'],
    users: ['/users'],
    home: ['/home']
  };
}
