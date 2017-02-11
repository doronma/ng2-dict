import { Component, OnInit } from '@angular/core';

import { WordLoaderService } from '../services/word-loader.service';

@Component({
  selector: 'app-select-wordgroup',
  templateUrl: './select-wordgroup.component.html',
  styleUrls: ['./select-wordgroup.component.css']
})
export class SelectWordgroupComponent implements OnInit {

  constructor(private wordLoaderService: WordLoaderService) { }

  ngOnInit() {
   }

  selectWordGroup(wordGroupName: string): void {
     this.wordLoaderService.setSelectedWordGroup(wordGroupName);
  }
}
