import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import '../../rxjs-extensions';

import { WordLoaderService,ArrayUtilsService } from '../../services';
import { DictWord } from '../../model';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  practice: string;
  counter: number = 0;
  status: string;
  translation: string;
  swShowHint: boolean;
  goodAnswersCounter: number;
  badAnswersCounter: number;

  private localCurrentWordGroupWords: DictWord[];

  constructor(private wordLoaderService: WordLoaderService, private arrayUtilsService: ArrayUtilsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params
    this.route.params
      .map(params => params['practice_type'])
      .subscribe((practice_type) => {
        this.practice = practice_type;
        if (this.localCurrentWordGroupWords != null) {
          this.reset();
        }

      });
    //this.practice = this.route.snapshot.params['practice_type'];
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
      this.goodAnswersCounter++;
      if (this.counter < this.localCurrentWordGroupWords.length - 1) {
        this.counter++;
        this.status = 'success';
      } else {
        this.status = 'finished';
      }
    } else {
      this.status = 'failure';
      this.badAnswersCounter++;
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
    this.arrayUtilsService.shuffle(this.localCurrentWordGroupWords);
    this.swShowHint = false;
    this.goodAnswersCounter = 0
    this.badAnswersCounter = 0
  }

  checkWord(): void {
    this.swShowHint = false;
    if (this.translation == this.localCurrentWordGroupWords[this.counter].engWord) {
      this.translation = '';
      this.goodAnswersCounter++;
      if (this.counter < this.localCurrentWordGroupWords.length - 1) {
        this.counter++;
        this.status = 'success';
      } else {
        this.status = 'finished';
      }
    } else {
      this.status = 'failure';
      this.badAnswersCounter++;
    }
  }

  showHint(swShowHint: boolean): void {
    this.swShowHint = swShowHint;
  }


}
