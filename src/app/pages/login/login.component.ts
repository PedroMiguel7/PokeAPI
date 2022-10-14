import { loginUSer } from './login.interface';
import { LoginService } from './../../services/login.service';
import { USER } from './user.interface';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user?: USER
  lU?: loginUSer

  constructor(private LoginService: LoginService, private fb: UntypedFormBuilder) { }

  validateForm!: UntypedFormGroup
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [],
      password: []
    })
  }

  fazLogin() {
    this.lU = this.validateForm.value;
    this.LoginService.fazLogin(this.lU)
  }
}
