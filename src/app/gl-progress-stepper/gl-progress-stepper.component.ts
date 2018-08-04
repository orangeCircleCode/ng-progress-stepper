import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-gl-progress-stepper",
  templateUrl: "./gl-progress-stepper.component.html",
  styleUrls: ["./gl-progress-stepper.component.scss"]
})
export class GlProgressStepperComponent implements OnInit {
  @Input()
  steps: Array<any>;
  constructor() {}

  ngOnInit() {
    console.log(this.steps);
  }
}
