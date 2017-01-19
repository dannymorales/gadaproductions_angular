/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstagramService } from './instagram.service';

describe('InstagramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramService]
    });
  });

  it('should ...', inject([InstagramService], (service: InstagramService) => {
    expect(service).toBeTruthy();
  }));
});
