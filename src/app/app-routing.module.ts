import { AuthGuardGuard } from './guards/auth-guard.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/clients', pathMatch: 'full'},
  {path: 'clients', component: ClientsComponent, canActivate: [AuthGuardGuard]},
  {path: 'clients/add', component: AddClientComponent, canActivate: [AuthGuardGuard]},
  {path: 'clients/edit/:id', component: EditClientComponent, canActivate: [AuthGuardGuard]},
  {path: 'clients/show/:id', component: ClientDetailsComponent, canActivate: [AuthGuardGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardGuard]
})
export class AppRoutingModule { }
