import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [
        AppComponent
      ],
      providers: [HttpClient]
    }).compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.createComponent(AppComponent).componentInstance;
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Random Phone number generator');
  });

  describe('generatedRandomNumbers', () => {
    beforeEach(() => {
      component.arrayOfRandomNumbers = ['0236506637', '0841251342', '0976094321', '0511681883', '0118153962'];
      fixture.detectChanges();
    });
    it('should be sorted in ascending order', () => {
      component.sortInAscending();
      fixture.detectChanges();
      expect(component.arrayOfRandomNumbers[0]).toBe('0118153962');
      expect(component.arrayOfRandomNumbers[component.arrayOfRandomNumbers.length - 1]).toBe('0976094321');
    });
    it('should be sorted in descending order', () => {
      component.sortInDescending();
      fixture.detectChanges();
      expect(component.arrayOfRandomNumbers[0]).toBe('0976094321');
      expect(component.arrayOfRandomNumbers[component.arrayOfRandomNumbers.length - 1]).toBe('0118153962');
    });

    it('should get maximum number', () => {
      component.getMaximumNumber();
      expect(component.displayMaxOrMin).toBeTruthy();
      expect(component.maximumOrMinimum).toBe('0976094321');
    });
    it('should get maximum number', () => {
      component.getMinimumNumber();
      expect(component.displayMaxOrMin).toBeTruthy();
      expect(component.maximumOrMinimum).toBe('0118153962');
    });
  });

  describe('genrateRandomNumbers', () => {
    beforeEach(() => {
      spyOn(component, 'generateRandomNumbers').and.callThrough();
      component.numberOfTimes = '5';
      fixture.detectChanges();
      component.generateRandomNumbers();
      fixture.detectChanges();
    });

    it('should call the generate numbers method', () => {
      expect(component.generateRandomNumbers).toHaveBeenCalled();
    });
  });
});
