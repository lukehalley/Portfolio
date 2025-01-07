// Root application component managing global state and routing
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lukehalleyPortfolio';
}
// Initialize theme preference from localStorage on app startup
