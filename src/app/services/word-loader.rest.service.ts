import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { DictWord } from '../beans/dict-word';

@Injectable()
export class WordLoaderRestService {

  constructor(private _http: Http) { }
 
  getWordGroupListFromServer(): Observable<string[]> {
    let url: string = 'http://localhost:8080/wordGroups';
    return this._http.get(url)
      .map((response: Response) => <string[]>response.json())
      //  .do((data :string[]) =>  this.wordGroupNameList = data)
      .catch(this.handleError);
  }

  getWordGroupFromServer(groupName : string): Observable<DictWord[]> {
    let url: string = 'http://localhost:8080/groupWords?groupName=' + groupName ;
    return this._http.get(url)
     .map((response: Response) => <DictWord[]>response.json().wordList)
     //  .do((data) =>  console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}