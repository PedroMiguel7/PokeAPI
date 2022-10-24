import { loginUSer } from './login.interface';
import { LoginService } from './../../services/login.service';
import { USER } from './user.interface';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({opacity: 1})),
])
const FadeIn = trigger('fadeIn', [enterTransition])
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [FadeIn]
})


export class LoginComponent implements OnInit {
  user?: USER
  lU?: loginUSer

  isShow = false;
  isShowButton = true;
  
  fadeInOut(): void {
    this.isShow = !this.isShow
    this.isShowButton = false;
  }

  constructor(private router: Router, private LoginService: LoginService, private fb: UntypedFormBuilder) { }

  validateForm!: UntypedFormGroup
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [],
      password: []
    })
  }

  fazLogin() {
    return (
      this.lU = this.validateForm.value,
      this.LoginService.fazLogin(this.lU),
      this.router.navigate(['/favoritos'])
    )
  }
}
