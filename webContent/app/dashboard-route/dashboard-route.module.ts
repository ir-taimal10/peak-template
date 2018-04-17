import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRouteComponent} from './dashboard-route.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        DashboardRouteComponent
    ],
    declarations: [DashboardRouteComponent]
})
export class DashboardRouteModule {
}
