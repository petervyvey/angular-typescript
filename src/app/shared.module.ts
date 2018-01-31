
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { Logger } from './foundation/logger';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        TranslateModule
    ],
    providers: [
        TranslateService
    ],
    exports: [
        CommonModule,
        RouterModule,
        NgbModule,
        TranslateModule
    ]
})
class SharedModule { }

export { SharedModule, TranslateService, Logger };
