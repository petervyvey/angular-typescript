import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-views-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.scss']
})
export class TimeZoneComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit() {
  }

  public onNavigate() {
      this.router.navigate(['/timezones', 'test']);
  }

}
