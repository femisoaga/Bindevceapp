import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submit(login:any){
    console.log("form submitted",login)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
