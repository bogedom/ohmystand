import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAIDxry0hxegpu6IMeKhB75XM75kM7Hb74",
      authDomain: "ohmystand.firebaseapp.com",
      projectId: "ohmystand",
      storageBucket: "ohmystand.appspot.com",
      messagingSenderId: "137154397242",
      appId: "1:137154397242:web:d85c99e2ae42272e4ba103",
      measurementId: "G-T4778Z0PPC"
    })),
    provideAnalytics(() => getAnalytics()),
  ]
};
