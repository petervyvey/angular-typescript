import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchTextBox } from '../../components/components.module';

@Component({
    selector: 'app-view-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    public query: string;

    public ngOnInit() {
        this.route.params.subscribe(x => this.query = x.timeZoneId);
    }

    public onModelChanged(model: SearchTextBox.ISearchTextBoxModel) {
        this.navigateTo(model.query);
    }

    private navigateTo(timeZoneId: string) {
        this.router.navigate(['/playground', timeZoneId]);
    }
}
