import { Injectable } from '@angular/core';

import { WordLoaderRestService } from './word-loader.rest.service';
import { DictWord, WordGroup } from '../model';
import { environment } from '../../environments/environment';

@Injectable()
export class WordLoaderService {

  private selectedWordGroup: string;
  private currentWordGroupWords: DictWord[];
  private wordGroupNameList: string[];

  constructor(private wordLoaderRestService: WordLoaderRestService) {
    console.log('running WordLoaderService');
  }

  initWordGroupList(refresh: boolean) {
    // for local test


    // for real server
    if (this.wordGroupNameList == null || refresh) {
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

    this.getWordsForWordGroup(selectedWordGroup);

  }

  getWordsForWordGroup(selectedWordGroup: string) {
    this.wordLoaderRestService.getWordGroupFromServer(selectedWordGroup).subscribe((data: DictWord[]) => {
      this.currentWordGroupWords = data;
    });
  }

  getWordGroupList(): string[] {

    return this.wordGroupNameList;

  }

}
