import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { IModel, Model } from './model';

@Component({
    selector: 'app-search-text-box',
    templateUrl: './search-text-box.component.html',
    styleUrls: ['./search-text-box.component.scss']
})
export class SearchTextBoxComponent implements OnInit, OnDestroy {

    constructor() {
    }

    @Input()
    public set query(value: string) { this.query$.next(value); }
    private query$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

    @Input()
    public set placeholder(value: string) { this.placeholder$.next(value); }
    public get placeholder(): string { return this.placeholder$.value; }
    private placeholder$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    @Output()
    private modelChanged = new EventEmitter<IModel>();

    private destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>();
    public model: IModel = new Model();

    public ngOnInit() {
        this.query$
            .takeUntil(this.destroy$)
            .subscribe(x => this.model.query = x);
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
    }

    public onSubmit(model: IModel, valid: boolean) {
        this.modelChanged.emit(model);
    }
}
