import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {LoginActivate} from './guard/LoggedGuard';
import {DemandeLogementComponent} from './components/demande-logement/demande-logement.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent/*, canActivate: [LoginActivate]*/},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logement/demande', component: DemandeLogementComponent},
  {path: '', component: HomeComponent/*, canActivate: [LoginActivate]*/},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
