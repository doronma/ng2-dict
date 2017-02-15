import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectWordgroupComponent } from './select-wordgroup/select-wordgroup.component';
import { ShowWordsComponent } from './show-words/show-words.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'selectWordGrop', component: SelectWordgroupComponent },
  { path: 'showWords', component: ShowWordsComponent },
  { path: 'selectWords', component: PracticeComponent },
  { path: 'practice/:practice_type', component: PracticeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
