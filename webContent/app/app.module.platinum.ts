import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {RestApiModule} from "./rest-api/rest-api.module";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes.platinum";
import {CommonComponentsModule} from "./common-components/common-components.module";
import {DashboardBikeRentModule} from "./dashboard-bike-rent/dashboard-bike-rent.module";
import {DashboardRouteModule} from "./dashboard-route/dashboard-route.module";
import {DashboardRouteAssistanceModule} from "./dashboard-route-assistance/dashboard-route-assistance.module";
import {DashboardHomeModule} from "./dashboard-home/dashboard-home.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RestApiModule,
        CommonComponentsModule,
        RouterModule.forRoot(
            appRoutes,
            {useHash: true}
        ),
        DashboardHomeModule,
        DashboardBikeRentModule,
        DashboardRouteModule,
        DashboardRouteAssistanceModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModulePlatinum {
}
