// Native Angular
import { Injectable } from '@angular/core';

// Inteface
import { Settings } from '../../models/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Declare Propertys
  public settings: Settings = {
    themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default-dark'
  };

  constructor() { 

    this.loadSettings();

  }

  saveSettingsLocalStorage(): void {
    // Transform Json data to string format.
    let settings = JSON.stringify(this.settings);

    // Save data in LocalStorage.
    localStorage.setItem( 'settings', settings );
  }

  loadSettings(): void {

    // Validate that there are settings in the localStorage
    if( localStorage.getItem( 'settings' ) ) {

      // Transform string data to Json format.
      let settings = JSON.parse( localStorage.getItem( 'settings' ) );

      // Modify property value
      this.settings = settings;

      // Apply settings
      this.applyTheme(this.settings.themeUrl);

    } else {
      
      // Set default the value of the href attribute in our styles link in the index.html
      this.applySettings(this.settings.theme);

    }

  }

  applySettings( theme: string ): void {

    // Declare theme url
    let url = `assets/css/colors/${theme}.css`;

    // Apply theme
    this.applyTheme(url);

    // Modify settings data.
    this.settings.theme = theme;
    this.settings.themeUrl = url;

    // Save data to localStorage.
    this.saveSettingsLocalStorage();

  }

  applyTheme( themeUrl: string  ): void {
    // Set the value of the href attribute in our styles link in the index.html
    document.getElementById('theme-style').setAttribute('href', themeUrl);
  }

}
