import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IModel } from './components/search-text-box/model';

@Component({
    selector: 'app-view-time-zone',
    templateUrl: './time-zone.component.html',
    styleUrls: ['./time-zone.component.scss']
})
export class TimeZoneComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    public query: string;

    public ngOnInit() {
        this.route.params.subscribe(x => this.query = x.timeZoneId);
    }

    public onModelChanged(model: IModel) {
        this.navigateTo(model.query);
    }

    private navigateTo(timeZoneId: string) {
        this.router.navigate(['/timezone', timeZoneId]);
    }
}
