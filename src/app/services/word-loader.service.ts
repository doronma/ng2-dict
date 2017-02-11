import { Injectable } from '@angular/core';

import { DummyWordsData } from './dummy-words-data';
import { DictWord } from '../beans/dict-word';

@Injectable()
export class WordLoaderService {

  private selectedWordGroup: string;
  private currentWordGroupWords : DictWord[];
  private dummyWordsData : DummyWordsData = new DummyWordsData();

  constructor() { }

  public getSelectedWordGroup(): string {
    if (this.selectedWordGroup==null){
      this.selectedWordGroup = this.getWordGroupList()[0];
    }
    return this.selectedWordGroup;
  }

  public getCurrentWordGroupWords() : DictWord[]{
    if (this.currentWordGroupWords==null){
      this.setSelectedWordGroup(this.getWordGroupList()[0]);
    }
    return this.currentWordGroupWords;
  }

  public setSelectedWordGroup(selectedWordGroup: string): void {
    this.selectedWordGroup = selectedWordGroup;
    this.currentWordGroupWords = this.dummyWordsData.getDictWords(selectedWordGroup);
  }


  getWordGroupList(): string[] {
    return this.dummyWordsData.getWordGroupList();
  }
}
