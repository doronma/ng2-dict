/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WordLoaderService } from './word-loader.service';

describe('WordLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordLoaderService]
    });
  });

  it('should ...', inject([WordLoaderService], (service: WordLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
