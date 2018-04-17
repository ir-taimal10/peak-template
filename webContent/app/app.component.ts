import {Component, OnInit} from '@angular/core';
import {RestApiGraphService} from "./rest-api/rest-api-graph.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    public status = "Running";
    constructor(private _restApiGraph: RestApiGraphService) {
    }

    public ngOnInit() {
    }


}
