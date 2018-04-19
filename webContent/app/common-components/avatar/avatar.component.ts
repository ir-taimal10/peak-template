import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
    selector: 'peak-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

    @Input() fullName?: string;

    constructor() {
    }

    ngOnInit() {
    }

    getInitials() {
        if (this.fullName) {
            const initials = this.fullName.replace(/[^a-zA-Z-0-9 ]/g, '').match(/\b\w/g);
            if (initials.length > 2) {
                initials.splice(2, initials.length);
            }
            return initials.join('');
        }
        return '<>';
    }
}