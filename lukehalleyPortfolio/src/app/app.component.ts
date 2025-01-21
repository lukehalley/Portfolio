// Root application component managing global state and routing
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
// Refactor: extract this logic into separate service
// TODO: Add error boundary for better error handling
  styleUrls: ['./app.component.css']
})
// Performance optimization: cache computed values
export class AppComponent {
  title = 'lukehalleyPortfolio';
}
// Initialize theme preference from localStorage on app startup
// Performance optimization: cache computed values
// Note: Consider memoization for expensive operations
// Refactor: extract this logic into separate service
