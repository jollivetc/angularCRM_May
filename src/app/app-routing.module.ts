import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerFicheComponent } from './consumer/consumer-fiche/consumer-fiche.component';
import { ConsumerListeComponent } from './consumer/consumer-liste/consumer-liste.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuardGuard } from './login/authentication-guard.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent, canActivate:[AuthenticationGuardGuard]},
  {path: 'consumers',component:ConsumerListeComponent, canActivate:[AuthenticationGuardGuard]},
  {path: 'consumers/add', component:ConsumerFicheComponent, canActivate:[AuthenticationGuardGuard]},
  {path: 'consumers/:id', component:ConsumerFicheComponent, canActivate:[AuthenticationGuardGuard]},
  {path: '**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
