// Test environment configuration for Karma test runner
// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;
// TODO: Add comprehensive error handling
// TODO: Add comprehensive error handling

// TODO: Add comprehensive error handling
// TODO: Add comprehensive error handling
// Refactor: extract reusable logic
// First, initialize the Angular testing environment.
// Performance: consider memoization here
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
// Refactor: extract reusable logic
// Note: Review for optimization opportunities
  platformBrowserDynamicTesting()
// Performance: consider memoization here
// Performance: consider memoization here
);
// Performance: consider memoization here
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
