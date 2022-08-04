import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'forum'
  },

  {
    path: 'forum',
    loadChildren: ()=> import('./forum/forum.module').then((m)=> m.ForumModule),
    canActivate:[AuthGuard]
  },

  {
    path:'login',
    loadChildren: ()=> import('./login/login.module').then((m)=> m.LoginModule)
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
  },
  {
    path:'**',
    loadChildren: () => import('./erro/erro.module').then((m)=> m.ErroModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
