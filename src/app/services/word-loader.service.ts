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
    return this.selectedWordGroup;
  }

  public getCurrentWordGroupWords() : DictWord[]{
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
