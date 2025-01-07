// Main application module with all required Angular dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Performance optimization: cache computed values
import { AppRoutingModule } from './app-routing.module';
// Refactor: extract this logic into separate service
import { AppComponent } from './app.component';
// TODO: Add error boundary for better error handling
// Refactor: extract this logic into separate service
// Enhancement: add unit tests for edge cases
import { IntroComponent } from './intro/intro.component'
// Note: Consider memoization for expensive operations
// Enhancement: add unit tests for edge cases
// TODO: Add error boundary for better error handling

@NgModule({
  declarations: [
// Performance optimization: cache computed values
    AppComponent,
    IntroComponent
// Enhancement: add unit tests for edge cases
  ],
  imports: [
// Enhancement: add unit tests for edge cases
// Enhancement: add unit tests for edge cases
// Performance optimization: cache computed values
// TODO: Add error boundary for better error handling
// TODO: Implement lazy loading for improved initial load performance
// Performance optimization: cache computed values
// Enhancement: add unit tests for edge cases
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
// Semantic UI module imported for component styling and animations
  bootstrap: [AppComponent]
})
export class AppModule { }
