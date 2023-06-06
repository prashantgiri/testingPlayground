import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreeterComponent } from './greeter/greeter.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {path: '', redirectTo: 'AppComponent', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'greeter', component: GreeterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
