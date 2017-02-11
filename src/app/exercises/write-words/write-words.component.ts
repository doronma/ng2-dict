import { Component, OnInit } from '@angular/core';
import { WordLoaderService } from '../../services/word-loader.service';
import { ArrayUtilsService } from '../../services/array-utils.service';
import { DictWord } from '../../beans/dict-word';

@Component({
  selector: 'app-write-words',
  templateUrl: './write-words.component.html',
  styleUrls: ['./write-words.component.css']
})
export class WriteWordsComponent implements OnInit {
  counter: number = 0;
  status: string ;
  translation: string;
  swShowHint: boolean;
  private localCurrentWordGroupWords: DictWord[];

  constructor(private wordLoaderService: WordLoaderService, private arrayUtilsService: ArrayUtilsService) { }

  ngOnInit() {
    this.localCurrentWordGroupWords = this.wordLoaderService.getCurrentWordGroupWords().slice(0);
    this.reset();
  }

  checkWord(): void {
    this.swShowHint=false;
    if (this.translation == this.localCurrentWordGroupWords[this.counter].engWord) {
      this.translation = '';
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

  showHint(swShowHint: boolean): void {
    this.swShowHint = swShowHint;
  }

  reset(): void {
    this.counter = 0;
    this.status = 'start';
    this.arrayUtilsService.shuffle(this.localCurrentWordGroupWords)
    this.swShowHint=false;
  }

}
