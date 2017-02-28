import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WordLoaderService,WordLoaderRestService} from '../../services';


@Component({
  selector: 'app-select-wordgroup',
  templateUrl: './select-wordgroup.component.html',
  styleUrls: ['./select-wordgroup.component.css']
})
export class SelectWordgroupComponent implements OnInit {

  constructor(private wordLoaderService: WordLoaderService, private wordLoaderRestService:WordLoaderRestService, private router: Router) { }

  ngOnInit() {
   this.wordLoaderService.initWordGroupList(false);
  }

  selectWordGroup(wordGroupName: string): void {
    this.wordLoaderService.setSelectedWordGroup(wordGroupName);
    this.router.navigate(['/showWords']);
  }

  deleteWordGroup(wordGroupName : string): void{
       this.wordLoaderRestService.deleteWordGroup(wordGroupName).subscribe((data: string) =>  this.wordLoaderService.initWordGroupList(true));
   }

  
}
