/**
 * Declaration of app component.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

/**
 * Implements the app main logic.
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  /**
   * Initializes a new instance of the AppComponent class.
   * 
   * @param platform The service that can be used to get information about your current device.
   * @param splashScreen The plugin that displays and hides a splash screen during application launch. 
   * @param statusBar Manage the appearance of the native status bar.
   */
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  /**
   * Initializes the application context.
   */
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
