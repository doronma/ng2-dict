import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { WordLoaderService } from './word-loader.service';
import { Router } from '@angular/router';


@Injectable()
export class CanActivateIfInit implements CanActivate {

  constructor(private wordLoaderService: WordLoaderService,private router: Router) {}

  canActivate() {
    if (this.wordLoaderService.isInitialized()){
      return true
    }else{
       this.router.navigate(['/home']);
    return false;
    } 
  }
}


