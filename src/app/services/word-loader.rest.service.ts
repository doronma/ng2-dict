import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { DictWord } from '../beans/dict-word';
import { WordGroup } from '../beans/word-group';

@Injectable()
export class WordLoaderRestService {

  constructor(private _http: Http) { }

  host : string = window.location.hostname;;

  getWordGroupListFromServer(): Observable<string[]> {
    console.log('host is - ' + this.host)
    let url: string = 'http://'+ this.host + ':8080/wordGroups';
    return this._http.get(url)
      .map((response: Response) => <string[]>response.json())
      //  .do((data :string[]) =>  this.wordGroupNameList = data)
      .catch(this.handleError);
  }

  getWordGroupFromServer(groupName: string): Observable<DictWord[]> {
    let url: string = 'http://' + this.host + ':8080/groupWords?groupName=' + groupName;
    return this._http.get(url)
      .map((response: Response) => <DictWord[]>response.json().wordList)
      //  .do((data) =>  console.log(data))
      .catch(this.handleError);
  }

  saveWordGroupToServer(wordGroup: WordGroup): Observable<string> {
    let url: string = 'http://' + this.host + ':8080/addWordGroup';
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(url, JSON.stringify(wordGroup), { headers: headers })
      .do((data) => console.log(data))
      .catch(this.handleError);
  }

   updateWordGroupToServer(wordGroup: WordGroup): Observable<string> {
    let url: string = 'http://' + this.host + ':8080/editWordGroup';
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.put(url, JSON.stringify(wordGroup), { headers: headers })
      .do((data) => console.log(data))
      .catch(this.handleError);
  }

  deleteWordGroup(groupName: string): Observable<string> {
    let url: string = 'http://' + this.host + ':8080/deleteWordGroup?groupName=' + groupName;
    return this._http.delete(url).
    do((data) => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}