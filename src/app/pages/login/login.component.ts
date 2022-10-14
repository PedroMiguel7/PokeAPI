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

  constructor(private LoginService: LoginService, private fb: UntypedFormBuilder) { }

  validateForm!: UntypedFormGroup
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [],
      password: []
    })
  }

  fazLogin() {
    console.log('fazLogin');
    console.log(this.validateForm.value);
  }
}
