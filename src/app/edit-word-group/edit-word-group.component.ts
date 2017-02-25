import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';

import { DictWord } from '../beans/dict-word';
import { WordGroup } from '../beans/word-group';
import { WordLoaderService } from '../services/word-loader.service';
import { WordLoaderRestService } from '../services/word-loader.rest.service';

@Component({
  selector: 'app-edit-word-group',
  templateUrl: './edit-word-group.component.html',
  styleUrls: ['./edit-word-group.component.css']
})
export class EditWordGroupComponent implements OnInit {

  constructor(private wordLoaderService: WordLoaderService, private wordLoaderRestService: WordLoaderRestService, private route: ActivatedRoute) { }
  private wordGroup: DictWord[];
  private wordGroupName: string;
  private message: string = '';
  saveSuccess: boolean = false;
  newWordGroup: boolean = false;


  ngOnInit() {

    this.route.params
      .map(params => params['wordGroupName'])
      .subscribe((wordGroupName) => {
        if (wordGroupName == null) {
          this.createNewWordGroup();
        } else {
          this.wordGroupName = wordGroupName;
          this.wordLoaderRestService.getWordGroupFromServer(wordGroupName).subscribe((data: DictWord[]) => {
            this.wordGroup = data;
          });
        }
      });
  }

  createNewWordGroup(): void {
    this.newWordGroup = true;
    this.wordGroup = [];
    this.addRow();
  }

  addRow() {
    this.message = '';
    if (this.wordGroup.length < 10) {
      let newWord = new DictWord('Word', '');
      this.wordGroup.push(newWord);
    } else {
      this.message = 'cannot have more than 10 rows.'
    }
  }

  save() {
    if (this.isFormValid()) {
      let saveWordGroup: WordGroup = new WordGroup(this.wordGroupName, this.wordGroup);
      console.log('saving - ' + JSON.stringify(saveWordGroup));
      if (this.newWordGroup) {
        this.wordLoaderRestService.saveWordGroupToServer(saveWordGroup).subscribe((data: string) => {
          this.wordLoaderService.initWordGroupList(true);
          this.saveSuccess = true;
        });
      } else {
        this.wordLoaderRestService.updateWordGroupToServer(saveWordGroup).subscribe((data: string) => {
          this.wordLoaderService.initWordGroupList(true);
          this.saveSuccess = true;
        });
      }
    }
  }

  isFormValid(): boolean {
    this.message = '';
    // check for empty wordGroupName
    if (this.wordGroupName.length == 0 || this.wordGroupName == '') {
      this.message = 'WordGroup Name is required';
      return false;
    }
    // minimum words
    if (this.wordGroup.length <= 3) {
      this.message = 'must have more the 5 rows. maximum 10.'
      return false;
    }
    // check for empty rows
    let emptyWordCounter = 0;
    for (var dictWord of this.wordGroup) {
      if (dictWord.engWord.length == 0 || dictWord.engWord == '' || dictWord.hebWord.length == 0 || dictWord.hebWord == '' || dictWord.engWord == 'Word') {
        emptyWordCounter++;
      }
    }
    if (emptyWordCounter > 0) {
      this.message = 'There are ' + emptyWordCounter + ' rows with empty fields'
      return false;
    }
    return true
  }
}
