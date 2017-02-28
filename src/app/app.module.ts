import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import {DataTableModule,SharedModule} from 'primeng/primeng';

import { AppComponent,HomeComponent,SelectWordgroupComponent} from './components';
import { ShowWordsComponent, PracticeComponent,EditWordGroupComponent } from './components';

import  { WordLoaderService, ArrayUtilsService, WordLoaderRestService} from './services';
import { CanActivateIfInit } from './services';



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
    SharedModule
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
