import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {AppModulePlatinum} from './app/app.module.platinum';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModulePlatinum);
