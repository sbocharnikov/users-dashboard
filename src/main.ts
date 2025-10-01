import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { enableElfProdMode } from '@ngneat/elf';
import { isDevMode } from '@angular/core';

if (!isDevMode) {
  enableElfProdMode();
}

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
