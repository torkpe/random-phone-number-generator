import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

import { RandomNumbersService } from './random-numbers.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberOfTimes: string;
  arrayOfRandomNumbers: any[] = [];
  currentDisplay = '';
  maximumOrMinimum: string;
  displayMaxOrMin: boolean;
  constructor(
    public randomNumbersService: RandomNumbersService
  ) {}

  generateRandomNumbers() {
    const regEx = /^\d+$/;
    if (this.numberOfTimes && regEx.test(this.numberOfTimes) && parseInt(this.numberOfTimes, 10) > 0) {
      let counter = 0;
      const arrayOfRandomNumbers = [];
      while (counter !== parseInt(this.numberOfTimes, 10)) {
        counter++;
        const min = Math.ceil(1000000000);
        const max = Math.floor(9999999999);
        const generateNumber = String(Math.floor(Math.random() * (max - min)) + min).split('');
        generateNumber.splice(0, 1, '0');
        const joinedNumbers = generateNumber.join('');
        arrayOfRandomNumbers.push(joinedNumbers);
      }
      saveAs(new Blob([arrayOfRandomNumbers.join(', ')], { type: 'text/txt;charset=utf-8' }), 'randomNumbers.txt');
      this.arrayOfRandomNumbers = arrayOfRandomNumbers;
    }
  }

  sortNumbers() {
    const arrayOfNumbers = this.arrayOfRandomNumbers;
    return [...arrayOfNumbers].sort();
  }
  sortInAscending(): number[] {
    return this.arrayOfRandomNumbers = this.sortNumbers();
  }

  sortInDescending(): number[] {
    return this.arrayOfRandomNumbers.sort((a, b) => b - a);
  }

  getMaximumNumber() {
    this.currentDisplay = 'Maximum number';
    const sortNumbers = this.sortNumbers();
    this.maximumOrMinimum = sortNumbers[sortNumbers.length - 1];
    this.displayMaxOrMin = !!this.maximumOrMinimum;
  }

  getMinimumNumber() {
    this.currentDisplay = 'Minimum number';
    const sortNumbers = this.sortNumbers();
    this.maximumOrMinimum = sortNumbers[0];
    this.displayMaxOrMin = !!this.maximumOrMinimum;
  }
}
