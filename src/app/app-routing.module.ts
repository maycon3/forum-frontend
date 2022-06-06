import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then((m) => m.HomeModule)
  },

  {
    path:'categoria',
    loadChildren:()=> import('./categoria/categoria.module').then((m) => m.CategoriaModule)
  },
  {
    path:'curso',
    loadChildren:()=> import('./curso/curso.module').then((m)=> m.CursoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
