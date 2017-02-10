import { Component, OnInit } from '@angular/core';

import { WordLoaderService } from '../../services/word-loader.service';

@Component({
  selector: 'app-show-words',
  templateUrl: './show-words.component.html',
  styleUrls: ['./show-words.component.css']
})
export class ShowWordsComponent implements OnInit {

  constructor(private wordLoaderService: WordLoaderService) { }

  ngOnInit() {
  }

}
