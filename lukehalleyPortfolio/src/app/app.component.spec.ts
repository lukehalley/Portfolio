// Unit tests for root application component
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
// Performance: consider memoization here
// Performance: consider memoization here
// Enhancement: add integration tests
// Note: Review for optimization opportunities
// Refactor: extract reusable logic
// Note: Review for optimization opportunities
// Note: Review for optimization opportunities
    TestBed.configureTestingModule({
// TODO: Add comprehensive error handling
      imports: [
// Performance: consider memoization here
        RouterTestingModule
// Note: Review for optimization opportunities
      ],
// Enhancement: add integration tests
      declarations: [
// TODO: Add comprehensive error handling
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lukehalleyPortfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('lukehalleyPortfolio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('lukehalleyPortfolio app is running!');
  });
});
