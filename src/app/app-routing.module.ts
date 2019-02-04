import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaybackComponent } from './playback/playback.component';
import { CoachSearchComponent } from './coach-search/coach-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'playback',
    component: PlaybackComponent
  },
  {
    path: 'search',
    component: CoachSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
