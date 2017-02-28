import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent,SelectWordgroupComponent} from './components';
import { ShowWordsComponent, PracticeComponent,EditWordGroupComponent } from './components';

import { CanActivateIfInit } from './services';

const routes: Routes = [


 
  { path: 'home', component: HomeComponent },
  { path: 'selectWordGrop', component: SelectWordgroupComponent },
  { path: 'showWords', component: ShowWordsComponent ,canActivate: [CanActivateIfInit]},
  { path: 'practice/:practice_type', component: PracticeComponent, canActivate: [CanActivateIfInit] }, 
  { path: 'updateWordGroup/:wordGroupName', component: EditWordGroupComponent}, 
  { path: 'editWords', component: EditWordGroupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
