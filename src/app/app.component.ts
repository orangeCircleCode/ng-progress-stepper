import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  steps;
  constructor() {
    this.steps = [
      {
        id: 1,
        label: "New",
        status: "done",
        tooltip: "this is an example"
      },
      {
        id: 2,
        label: "Deployed",
        status: "done latest",
        tooltip: "this is an example"
      },
      {
        id: 4,
        label: "Deploy Test",
        status: "in-progress",
        tooltip: "this is an example"
      },
      {
        id: 5,
        label: "A | B Testing",
        status: "not-started",
        tooltip: "this is an example"
      },
      {
        id: 6,
        label: "Deafult",
        status: "not-started",
        tooltip: "this is an example"
      },
      {
        id: 7,
        label: "Cleanup",
        status: "not-started",
        tooltip: "this is an example"
      },
      {
        id: 8,
        label: "Done",
        status: "not-started",
        tooltip: "this is an example"
      }
    ];
  }

  changeSteps() {
    this.steps = [
      {
        id: 1,
        label: "New",
        status: "done",
        tooltip: "this is an example"
      },
      {
        id: 2,
        label: "Deployed",
        status: "done",
        tooltip: "this is an example"
      },
      {
        id: 4,
        label: "Deploy Test",
        status: "done latest",
        tooltip: "this is an example"
      },
      {
        id: 5,
        label: "A | B Testing",
        status: "in-progress",
        tooltip: "this is an example"
      },
      {
        id: 6,
        label: "Deafult",
        status: "not-started",
        tooltip: "this is an example"
      },
      {
        id: 7,
        label: "Cleanup",
        status: "not-started",
        tooltip: "this is an example"
      },
      {
        id: 8,
        label: "Done",
        status: "not-started",
        tooltip: "this is an example"
      }
    ];
  }
}
