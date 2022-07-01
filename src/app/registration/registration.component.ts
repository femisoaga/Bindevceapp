import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submit(login:any){
    console.log("form submitted",login)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
