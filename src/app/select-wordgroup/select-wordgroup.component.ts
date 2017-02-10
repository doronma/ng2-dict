import { Component, OnInit } from '@angular/core';

import { WordLoaderService } from '../services/word-loader.service';

@Component({
  selector: 'app-select-wordgroup',
  templateUrl: './select-wordgroup.component.html',
  styleUrls: ['./select-wordgroup.component.css']
})
export class SelectWordgroupComponent implements OnInit {


  wordGroupList: string[];

  constructor(private wordLoaderService: WordLoaderService) { }

  ngOnInit() {
    this.wordGroupList = this.wordLoaderService.getWordGroupList();
    this.wordLoaderService.setSelectedWordGroup(this.wordGroupList[0]);
  
    

  }

  selectWordGroup(wordGroupName: string): void {
     this.wordLoaderService.setSelectedWordGroup(wordGroupName);
  }



}
