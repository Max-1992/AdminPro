import { Component, OnInit } from '@angular/core';
import { SettingsService } from './core/settings/settings.service';

declare function init_plugins();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor( private settingsService: SettingsService ) {}

  ngOnInit() {
    init_plugins()
  }

}
