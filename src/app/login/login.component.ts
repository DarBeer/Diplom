import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from "@angular/forms";
import {promise} from "selenium-webdriver";
import {ToastrService} from "ngx-toastr";
import { AuthguardGuard } from '../authguard.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authForm: FormGroup;

  constructor(private form: FormBuilder, private toastr: ToastrService, private auth: AuthguardGuard) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.authForm = this.form.group({
      login: ['', Validators.required ],
      pass: ['', Validators.required ]
    });
  }

  public LogIn(event: Event) {
    console.log(this.authForm);
    this.auth.canActivate(this.authForm.value.login, this.authForm.value.pass);
  }
}
