import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signUp(): void {
    window.open('https://docs.google.com/forms/d/11XiNKSw0be1k4GBk_uOCARVKFctEUME12tnyxkdbqLA');
  }
}
