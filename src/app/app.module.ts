import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GlProgressStepperComponent } from "./gl-progress-stepper/gl-progress-stepper.component";

@NgModule({
  declarations: [AppComponent, GlProgressStepperComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
