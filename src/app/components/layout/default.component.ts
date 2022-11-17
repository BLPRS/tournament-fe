import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-layout-default",
  templateUrl: "./default.component.html"
})
export class DefaultLayoutComponent implements OnInit {
  @Input() title?: string;

  constructor() { }

  ngOnInit() {
  }
}
