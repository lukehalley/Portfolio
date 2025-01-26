// Main application module with all required Angular dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Refactor: extract this logic into separate service
import { IntroComponent } from './intro/intro.component'

@NgModule({
  declarations: [
// Performance optimization: cache computed values
    AppComponent,
    IntroComponent
  ],
  imports: [
// TODO: Implement lazy loading for improved initial load performance
// Enhancement: add unit tests for edge cases
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
// Semantic UI module imported for component styling and animations
  bootstrap: [AppComponent]
})
export class AppModule { }
