import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InternalServerErrorComponent} from './internal-server-error/internal-server-error.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {IconsComponent} from './icons/icons.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        InternalServerErrorComponent,
        PageNotFoundComponent,
        IconsComponent
    ],
    declarations: [
        InternalServerErrorComponent,
        PageNotFoundComponent,
        IconsComponent,
        HeaderComponent
    ]
})
export class CommonComponentsModule {
}
