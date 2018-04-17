import {Routes} from "@angular/router";
import {PageNotFoundComponent} from "./common-components/page-not-found/page-not-found.component";
import {InternalServerErrorComponent} from "./common-components/internal-server-error/internal-server-error.component";
import {DashboardRouteComponent} from "./dashboard-route/dashboard-route.component";


export const appRoutes: Routes = [
    {
        path: '',
        component: DashboardRouteComponent
    },
    {
        path: 'route',
        component: DashboardRouteComponent
    },
    {
        path: 'internalServerError',
        component: InternalServerErrorComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
