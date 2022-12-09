import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/userlogin/userlogin.module').then(
        (m) => m.UserloginModule
      ),
  },
  {
    path: 'customer',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./pages/customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'home',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'order',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./pages/order/order.module').then((m) => m.OrderModule),
  },
  { path: 'signup', component: SignupUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [SignupUserComponent];
