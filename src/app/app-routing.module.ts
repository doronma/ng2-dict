import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectWordgroupComponent } from './select-wordgroup/select-wordgroup.component';
import { ShowWordsComponent } from './exercises/show-words/show-words.component';
import { SelectWordsComponent } from './exercises/select-words/select-words.component';
import { WriteWordsComponent } from './exercises/write-words/write-words.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'selectWordGrop', component: SelectWordgroupComponent },
  { path: 'showWords', component: ShowWordsComponent },
  { path: 'selectWords', component: SelectWordsComponent },
  { path: 'writeWords', component: WriteWordsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
