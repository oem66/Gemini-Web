import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { LanguageService } from './core/language.service';

export const appConfig: ApplicationConfig = {
  providers: [
    // Only the visitor's language is downloaded, and it is in place before the
    // first render, so nobody sees the page flash in the wrong language.
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => {
        const language = inject(LanguageService);
        return () => language.init();
      }
    }
  ]
};
