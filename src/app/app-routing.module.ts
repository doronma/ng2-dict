import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectWordgroupComponent } from './select-wordgroup/select-wordgroup.component';
import { ShowWordsComponent } from './show-words/show-words.component';
import { PracticeComponent } from './practice/practice.component';
import { CanActivateIfInit } from './services/can-activate-if-init';

const routes: Routes = [


 
  { path: 'home', component: HomeComponent },
  { path: 'selectWordGrop', component: SelectWordgroupComponent },
  { path: 'showWords', component: ShowWordsComponent ,canActivate: [CanActivateIfInit]},
  { path: 'practice/:practice_type', component: PracticeComponent, canActivate: [CanActivateIfInit] }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
