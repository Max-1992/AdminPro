// Native Angular
import { Component, OnInit } from '@angular/core';

// Services
import { SettingsService } from '../../core/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  

  constructor( private settingsService: SettingsService ) { }

  ngOnInit() {
    this.addCheckToThemeSelected();
  }

  settingTheme( theme: string, element: any ): void {

    // Apply selected settings and store them in localStorage.
    this.settingsService.applySettings(theme);

    // Add the check icon to our selected theme element element.
    this.addCheck(element);

  }

  addCheck( element: any ): void {

    // Select all elements by class css.
    let selectors: any = document.getElementsByClassName('selector');

    // Iterate and remove a css class from all elements.
    for( let ref of selectors ) {
      ref.classList.remove('working');
    }

    // Add a css class to an element.
    element.classList.add('working');

  }

  addCheckToThemeSelected(): void {

    // Select all elements by class css.
    let selectors: any = document.getElementsByClassName('selector');

    // Create pointer to theme.
    let thema = this.settingsService.settings.theme;

    // Iterate all elements.
    for( let ref of selectors ) {
     
      // Add a css class to an element.
      if( ref.getAttribute('data-theme') === thema  ) ref.classList.add('working');

    }

  }

}
