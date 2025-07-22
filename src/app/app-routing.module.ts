import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'detail-movie/:id',
    loadChildren: () => import('./detail-movie/detail-movie.module').then( m => m.DetailMoviePageModule)
  },
  {
    path: 'manage-movie',
    loadChildren: () => import('./manage-movie/manage-movie.module').then( m => m.ManageMoviePageModule)
  },
  {
    path: 'add-movie',
    loadChildren: () => import('./add-movie/add-movie.module').then( m => m.AddMoviePageModule)
  },
  {
    path: 'edit-movie/:id',
    loadChildren: () => import('./edit-movie/edit-movie.module').then( m => m.EditMoviePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'tabs', children: [
    { path: 'manage-movie', loadChildren: () => import('./manage-movie/manage-movie.module').then(m => m.ManageMoviePageModule) },
    { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule) },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
