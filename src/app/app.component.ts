import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    if (this.platform.is("capacitor")) {
      Plugins.SplashScreen.hide();
    }
  }
}
