import { Injectable } from '@angular/core';


import { DummyWordsData } from './dummy-words-data';
import { DictWord, WordGroup } from '../../model';


@Injectable()
export class MockWordLoaderService {

  private selectedWordGroup: string;
  private currentWordGroupWords: DictWord[];
  private wordGroupNameList: string[];
  private dummyWordsData: DummyWordsData = new DummyWordsData();


  constructor() {
    console.log('running MockWordLoaderService');
  }

  initWordGroupList(refresh: boolean) {
    this.wordGroupNameList = this.dummyWordsData.getWordGroupList();
    this.setSelectedWordGroup(this.getWordGroupList()[0]);
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
    this.currentWordGroupWords = this.dummyWordsData.getDictWords(selectedWordGroup);
  }

  getWordsForWordGroup(selectedWordGroup: string) {
   console.log('in getWordsForWordGroup ');
  }

  getWordGroupList(): string[] {
      return this.dummyWordsData.getWordGroupList();
  }

}
