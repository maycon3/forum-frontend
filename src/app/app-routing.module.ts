import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path:'login',
    loadChildren: ()=> import('./login/login.module').then((m)=> m.LoginModule)
  },

  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then((m) => m.HomeModule),
    canActivate:[AuthGuard]
  },

  {
    path:'categoria',
    loadChildren:()=> import('./categoria/categoria.module').then((m) => m.CategoriaModule),
    canActivate:[AuthGuard]
  },
  {
    path:'curso',
    loadChildren:()=> import('./curso/curso.module').then((m)=> m.CursoModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
