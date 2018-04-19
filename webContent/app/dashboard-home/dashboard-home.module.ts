import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardHomeComponent} from './dashboard-home.component';
import {CommonComponentsModule} from "../common-components/common-components.module";

@NgModule({
    imports: [
        CommonModule,
        CommonComponentsModule
    ],
    exports: [
        DashboardHomeComponent
    ],
    declarations: [
        DashboardHomeComponent
    ]
})
export class DashboardHomeModule {
}
