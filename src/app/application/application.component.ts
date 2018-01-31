
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],

})
export class ApplicationComponent {

  constructor(
    private translate: TranslateService
  ) { }

  public title = 'application';
}
