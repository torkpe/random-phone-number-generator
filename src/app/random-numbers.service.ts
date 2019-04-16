import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomNumbersService {
  constructor(
    private http: HttpClient
  ) { }

  getGeneratedNumbers(quantity) {
    return this.http.get(`http://localhost:3000/random-numbers/${quantity}`);
  }
}
