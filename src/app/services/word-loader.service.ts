import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { DummyWordsData } from './dummy-words-data';
import { DictWord } from '../beans/dict-word';

@Injectable()
export class WordLoaderService {

  private selectedWordGroup: string;
  private currentWordGroupWords: DictWord[];
  private wordGroupNameList: string[];
  private dummyWordsData: DummyWordsData = new DummyWordsData();

  constructor(private _http: Http) { }

  public getSelectedWordGroup(): string {
    if (this.selectedWordGroup == null) {
    //  this.selectedWordGroup = this.getWordGroupList()[0];
    }
    return this.selectedWordGroup;
  }

  public getCurrentWordGroupWords(): DictWord[] {
    if (this.currentWordGroupWords == null) {
      //this.setSelectedWordGroup(this.getWordGroupList()[0]);
    }
    return this.currentWordGroupWords;
  }

  public setSelectedWordGroup(selectedWordGroup: string): void {
    this.selectedWordGroup = selectedWordGroup;
    this.currentWordGroupWords = this.dummyWordsData.getDictWords(selectedWordGroup);
  }


  getWordGroupList(): string[] {
    console.log('wordGroupNameList - ' + this.wordGroupNameList);
    return this.dummyWordsData.getWordGroupList();
   //return this.wordGroupNameList;
  }

  getWordGroupListFromServer(): Observable<string[]> {
    let url: string = 'http://localhost:8080/wordGroups';
    return this._http.get(url)
      .map((response: Response) => <string[]>response.json())
      //  .do((data :string[]) =>  this.wordGroupNameList = data)
      .catch(this.handleError);

  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  initWordGroupList() {
    if (this.wordGroupNameList == null) {
      this.getWordGroupListFromServer()
        .subscribe((data: string[]) => {
          this.wordGroupNameList = data;
          this.setSelectedWordGroup(this.getWordGroupList()[0]);
        })
        , error => console.log(<any>error);
    }
  }
}
