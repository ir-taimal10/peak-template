import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardHomeComponent} from './dashboard-home.component';
import {CommonComponentsModule} from "../common-components/common-components.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        CommonComponentsModule,
        RouterModule
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
