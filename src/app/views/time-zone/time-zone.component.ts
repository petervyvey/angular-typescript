import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-view-time-zone',
    templateUrl: './time-zone.component.html',
    styleUrls: ['./time-zone.component.scss']
})
export class TimeZoneComponent implements OnInit {

    constructor(private router: Router) {
    }

    public ngOnInit() {
    }

    public onClick() {
        console.log('click');
        this.router.navigate(['/timezone', 123]);
    }

}
