import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "feedback-message",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent implements OnInit {
  @Input() error: boolean = false;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void { }
}
