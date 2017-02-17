import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectWordgroupComponent } from './select-wordgroup/select-wordgroup.component';
import { ShowWordsComponent } from './show-words/show-words.component';
import { PracticeComponent } from './practice/practice.component';

import { WordLoaderService } from './services/word-loader.service';
import { ArrayUtilsService } from './services/array-utils.service';
import { WordLoaderRestService } from './services/word-loader.rest.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectWordgroupComponent,
    ShowWordsComponent,
    PracticeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    WordLoaderService,
    ArrayUtilsService,
    WordLoaderRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
