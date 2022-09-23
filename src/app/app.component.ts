import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  dataArray = [
    {
      name: 'Ganapathy',
      birthDate: new Date(2000, 1, 9),
    },
    {
      name: 'Ganapathy',
      birthDate: new Date(2022, 8, 9),
    },
    {
      name: 'Ganapathy',
      birthDate: new Date(2022, 8, 23),
    },
  ];
}
