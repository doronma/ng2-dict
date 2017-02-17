import { Injectable } from '@angular/core';

import { DummyWordsData } from './dummy-words-data';
import { DictWord } from '../beans/dict-word';
import { WordLoaderRestService } from './word-loader.rest.service';

@Injectable()
export class WordLoaderService {

  private selectedWordGroup: string;
  private currentWordGroupWords: DictWord[];
  private wordGroupNameList: string[];
  private dummyWordsData: DummyWordsData = new DummyWordsData();


  constructor(private wordLoaderRestService: WordLoaderRestService) { }

  initWordGroupList() {
    if (this.wordGroupNameList == null) {
      this.wordLoaderRestService.getWordGroupListFromServer()
        .subscribe((data: string[]) => {
          this.wordGroupNameList = data;
          this.setSelectedWordGroup(this.getWordGroupList()[0]);
        })
        , error => console.log(<any>error);
    }
  }

  public isInitialized(): boolean {
    return this.wordGroupNameList != null;
  }

  public getSelectedWordGroup(): string {
    return this.selectedWordGroup;
  }

  public getCurrentWordGroupWords(): DictWord[] {
    return this.currentWordGroupWords;
  }

  public setSelectedWordGroup(selectedWordGroup: string): void {
    this.selectedWordGroup = selectedWordGroup;
    //this.currentWordGroupWords= this.dummyWordsData.getDictWords(selectedWordGroup);
    this.getWordsForWordGroup(selectedWordGroup);
  }

  getWordsForWordGroup(selectedWordGroup: string) {
    this.wordLoaderRestService.getWordGroupFromServer(selectedWordGroup).subscribe((data: DictWord[]) => {
      //console.log(data);
      this.currentWordGroupWords = data;
    });
  }

  getWordGroupList(): string[] {
    //  return this.dummyWordsData.getWordGroupList();
    return this.wordGroupNameList;
  }




}
