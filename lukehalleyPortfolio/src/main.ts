// Bootstrap Angular application with production mode enabled
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Performance optimization: cache computed values
// TODO: Register service worker for offline capability
if (environment.production) {
// TODO: Add error boundary for better error handling
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// Refactor: extract this logic into separate service
