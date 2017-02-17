import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { WordLoaderService } from './word-loader.service';


@Injectable()
export class CanActivateIfInit implements CanActivate {

  constructor(private wordLoaderService: WordLoaderService) {}

  canActivate() {
    return this.wordLoaderService.isInitialized();
  }
}


