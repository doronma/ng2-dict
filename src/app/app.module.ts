import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import {DataTableModule,SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { SelectWordgroupComponent } from './select-wordgroup/select-wordgroup.component';
import { ShowWordsComponent } from './show-words/show-words.component';
import { PracticeComponent } from './practice/practice.component';

import { WordLoaderService } from './services/word-loader.service';
import { ArrayUtilsService } from './services/array-utils.service';
import { WordLoaderRestService } from './services/word-loader.rest.service';
import { CanActivateIfInit } from './services/can-activate-if-init';
import { EditWordGroupComponent } from './edit-word-group/edit-word-group.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectWordgroupComponent,
    ShowWordsComponent,
    PracticeComponent,
    EditWordGroupComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    SharedModule,
    ButtonModule

  ],
  providers: [
    WordLoaderService,
    ArrayUtilsService,
    WordLoaderRestService,
    CanActivateIfInit
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
