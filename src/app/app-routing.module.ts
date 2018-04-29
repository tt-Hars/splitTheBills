import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { AddUserEventsComponent } from './add-user-events/add-user-events.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: '*', redirectTo: 'menuView', pathMatch: 'full'},
  {path: '', redirectTo: 'menuView', pathMatch: 'full'  },
  {path: 'menuView', component: MenuViewComponent},
  {path: 'addUserEvents', component: AddUserEventsComponent},
  {path: 'resultView', component: ResultViewComponent},
  {path: 'dashboardView', component: UserDashboardComponent},
  {path: 'lrView', component: LoginViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
