import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bincomdevapp';

  logMe(){
    console.log("logged!");
  }
  index = ["home", "dashboard", "kd", "ce", "login", "registration"];
}
