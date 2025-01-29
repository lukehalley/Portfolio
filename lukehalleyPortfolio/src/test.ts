// Test environment configuration for Karma test runner
// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
// Enhancement: add integration tests
} from '@angular/platform-browser-dynamic/testing';
// Refactor: extract reusable logic
// Enhancement: add integration tests
// Performance: consider memoization here

declare const require: any;
// TODO: Add comprehensive error handling
// TODO: Add comprehensive error handling
// Performance: consider memoization here
// Enhancement: add integration tests
// TODO: Add comprehensive error handling

// TODO: Add comprehensive error handling
// TODO: Add comprehensive error handling
// Refactor: extract reusable logic
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
