import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaybackComponent } from './playback/playback.component';
import { VideoEditorComponent } from './video-editor/video-editor.component';
import { CoachSearchComponent } from './coach-search/coach-search.component';
import { CoachDetailComponent } from './coach-detail/coach-detail.component';

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
  // {
  //   path: 'playback',
  //   component: PlaybackComponent
  // },
  {
    path: 'coach/:id',
    component: CoachDetailComponent
    // data: { coach: coach }
  },
  {
    path: 'editor',
    component: VideoEditorComponent
  },
  {
    path: 'search',
    component: CoachSearchComponent
  },
  { path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInPageModule' },
  { path: 'sign-up', loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
