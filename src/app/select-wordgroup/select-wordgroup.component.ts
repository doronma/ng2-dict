import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WordLoaderService } from '../services/word-loader.service';

@Component({
  selector: 'app-select-wordgroup',
  templateUrl: './select-wordgroup.component.html',
  styleUrls: ['./select-wordgroup.component.css']
})
export class SelectWordgroupComponent implements OnInit {

  constructor(private wordLoaderService: WordLoaderService, private router: Router) { }

  ngOnInit() {
  }

  selectWordGroup(wordGroupName: string): void {
    this.wordLoaderService.setSelectedWordGroup(wordGroupName);
    this.router.navigate(['/showWords']);
  }
}
