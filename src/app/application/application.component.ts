
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],

})
export class ApplicationComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { }

  public title = 'application';

  public ngOnInit(): void {
    this.translate.setDefaultLang(environment.defaultUiLanguage);
    this.translate.use(environment.defaultUiLanguage);
  }
}
