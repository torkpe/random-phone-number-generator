import { Component } from '@angular/core';

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
      this.randomNumbersService.getGeneratedNumbers(this.numberOfTimes).subscribe(
        (arrayOfNumbers: {randomNumbers: number[]}) => {
          this.arrayOfRandomNumbers = arrayOfNumbers.randomNumbers;
      });
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
