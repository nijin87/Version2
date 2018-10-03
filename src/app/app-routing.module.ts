import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmClientService } from './shared/services/EmClient/em-client.service';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
