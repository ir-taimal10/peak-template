import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
    selector: 'peak-icon',
    templateUrl: './peak-icon.component.html',
    styleUrls: ['./peak-icon.component.scss']
})
export class PeakIconComponent implements OnInit {

    @Input() srcIcon?: string;
    @Input() size? = 16;
    @Input() nameIcon: string;

    constructor() {
    }

    ngOnInit() {
    }

    getXlinkHref() {

        return this.srcIcon ?
            this.srcIcon :  "#" + this.nameIcon;
    }

}
