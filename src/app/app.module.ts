import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectWordgroupComponent } from './select-wordgroup/select-wordgroup.component';
import { ShowWordsComponent } from './exercises/show-words/show-words.component';
import { SelectWordsComponent } from './exercises/select-words/select-words.component';
import { WriteWordsComponent } from './exercises/write-words/write-words.component';

import { WordLoaderService } from './services/word-loader.service';
import { ArrayUtilsService } from './services/array-utils.service';
import { PracticeComponent } from './practice/practice.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectWordgroupComponent,
    ShowWordsComponent,
    SelectWordsComponent,
    WriteWordsComponent,
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
    ArrayUtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
