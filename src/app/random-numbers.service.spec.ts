import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RandomNumbersService } from './random-numbers.service';

describe('RandomNumbersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: RandomNumbersService = TestBed.get(RandomNumbersService);
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const service: RandomNumbersService = TestBed.get(RandomNumbersService);
    expect(service).toBeTruthy();
  });
});
