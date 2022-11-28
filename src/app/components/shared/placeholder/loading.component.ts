import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "loading-placeholder",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"],
})
export class LoadingComponent implements OnInit {
  @Input() indicator: boolean = false;

  constructor() { }

  ngOnInit(): void { }
}
