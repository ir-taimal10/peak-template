import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRouteComponent} from './dashboard-route.component';
import {CommonComponentsModule} from "../common-components/common-components.module";

@NgModule({
    imports: [
        CommonModule,
        CommonComponentsModule
    ],
    exports: [
        DashboardRouteComponent
    ],
    declarations: [DashboardRouteComponent]
})
export class DashboardRouteModule {
}
