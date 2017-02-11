import { Component, OnInit } from '@angular/core';
import { WordLoaderService } from '../../services/word-loader.service';
import { ArrayUtilsService } from '../../services/array-utils.service';
import { DictWord } from '../../beans/dict-word';

@Component({
  selector: 'app-select-words',
  templateUrl: './select-words.component.html',
  styleUrls: ['./select-words.component.css']
})
export class SelectWordsComponent implements OnInit {
  counter: number = 0;
  status: string = 'start';
 
  private localCurrentWordGroupWords: DictWord[];

  constructor(private wordLoaderService: WordLoaderService, private arrayUtilsService: ArrayUtilsService) { }

  ngOnInit() {
    this.localCurrentWordGroupWords = this.wordLoaderService.getCurrentWordGroupWords().slice(0);
    this.reset();
  }

  /**
   * 
   * 
   * @param {string} engWord
   * 
   * @memberOf SelectWordsComponent
   */
  selectWord(engWord: string): void {
    if (engWord == (this.wordLoaderService.getCurrentWordGroupWords())[this.counter].engWord) {
      if (this.counter < this.localCurrentWordGroupWords.length - 1) {
        this.counter++;
        this.status = 'success';
      } else {
        this.status = 'finished';
      }
  
    } else {
       this.status = 'failure';
    }
  }

  /**
   * 
   * 
   * 
   * @memberOf SelectWordsComponent
   */
  reset(): void {
    this.counter = 0;
    this.status = 'start';
    this.arrayUtilsService.shuffle(this.localCurrentWordGroupWords)
  }

}
