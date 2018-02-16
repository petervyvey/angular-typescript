import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs/Rx';

@Component({
    selector: 'app-time-zone-details',
    templateUrl: './time-zone-details.component.html',
    styleUrls: ['./time-zone-details.component.scss']
})
export class TimeZoneDetailsComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute) {
    }

    private destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

    public ngOnInit() {
        this.route.params
            .takeUntil(this.destroy$)
            .subscribe(x => console.log('params', x));
    }

    public ngOnDestroy() {
        this.destroy$.next(true);
    }
}
