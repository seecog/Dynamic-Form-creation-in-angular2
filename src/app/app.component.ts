import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private first_name : string = "Mohan";
  private last_name : string = " kumar";
  private age : number = 21;
}
