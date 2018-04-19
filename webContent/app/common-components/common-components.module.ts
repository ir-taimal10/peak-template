import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InternalServerErrorComponent} from './internal-server-error/internal-server-error.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PeakIconCollectionComponent} from './peak-icon-collection/peak-icon-collection.component';
import {HeaderComponent} from './header/header.component';
import {PeakIconComponent} from "./peak-icon/peak-icon.component";
import {AvatarComponent} from './avatar/avatar.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        InternalServerErrorComponent,
        PageNotFoundComponent,
        HeaderComponent,
        PeakIconCollectionComponent,
        PeakIconComponent,
        AvatarComponent,
        ContentWrapperComponent
    ],
    declarations: [
        InternalServerErrorComponent,
        PageNotFoundComponent,
        HeaderComponent,
        PeakIconCollectionComponent,
        PeakIconComponent,
        AvatarComponent,
        ContentWrapperComponent
    ]
})
export class CommonComponentsModule {
}
