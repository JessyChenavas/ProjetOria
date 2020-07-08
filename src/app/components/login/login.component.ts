import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {AppStateService} from '../../services/app-state.service';
import {JsonConvert} from 'json2typescript';
import {User} from '../../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private appState: AppStateService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        this.authService.login(this.form.value).subscribe(
          data => {
            this.tokenStorage.saveToken(data.api_token);


            // this.tokenStorage.saveUser(data);

            const jsonConvert: JsonConvert = new JsonConvert();
            // this.appState.user = jsonConvert.deserializeObject(data, User);
            this.appState.isLogged = true;
            console.log(this.appState.isLogged);
          },
          err => {
          }
        );

      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
