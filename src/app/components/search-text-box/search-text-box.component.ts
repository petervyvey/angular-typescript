import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ISearchTextBoxModel, SearchTextBoxModel } from './search-text-box-model';

@Component({
    selector: 'app-search-text-box',
    templateUrl: './search-text-box.component.html',
    styleUrls: ['./search-text-box.component.scss']
})
export class SearchTextBoxComponent implements OnInit, OnDestroy {

    constructor() {
    }

    private destroy$ = new ReplaySubject<boolean>();

    @Output()
    private modelChanged = new EventEmitter<ISearchTextBoxModel>();

    private query$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
    @Input()
    public set query(value: string) { this.query$.next(value); }

    private placeholder$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public get placeholder(): string { return this.placeholder$.value; }
    @Input()
    public set placeholder(value: string) { this.placeholder$.next(value); }

    public model: ISearchTextBoxModel = new SearchTextBoxModel();

    public ngOnInit() {
        this.query$
            .takeUntil(this.destroy$)
            .subscribe(x => this.model.query = x);
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
    }

    public onSubmit(model: ISearchTextBoxModel, valid: boolean) {
        this.modelChanged.emit(model);
    }
}
