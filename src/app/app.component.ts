import { Component } from '@angular/core';

import { WordLoaderService } from './services/word-loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {

   constructor(private wordLoaderService: WordLoaderService) { }

 
}
