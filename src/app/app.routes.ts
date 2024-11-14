import { Routes } from '@angular/router';
import { LayoutLoginComponent } from './layout-login/layout-login.component';
import { LoginComponent } from './layout-login/login/login.component';
import { CadastroComponent } from './layout-login/cadastro/cadastro.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: []
  },
  {
    path: 'user',
    component: LayoutLoginComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'cadastro', component: CadastroComponent}
    ]
  }
];
