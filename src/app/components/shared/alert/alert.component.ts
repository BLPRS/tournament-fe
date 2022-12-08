import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Participant, Round, Tournament } from 'src/app/models';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() tournament: Tournament;
  @Input() visible: boolean = false;

  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(values: any) {
    if ('visible' in values && values.visible.currentValue !== values.visible.previousValue) {
      if (values.visible.currentValue) {
        document.body.classList.add('o-hidden');
      } else {
        document.body.classList.remove('o-hidden');
      }
    }
  }

  get keys() {
    return Object.keys(this.tournament.rounds).map(x => this.getRound(x).length > 0 ? x : null).filter(x => x);
  }

  get title() {
    return 'Summary : ' + this.tournament.name;
  }

  get content() {
    return '';
  }

  getParticipant(id: string) {
    return this.tournament.participants.find((participant: Participant) => participant.id === id) ?? {} as Participant;
  }

  getRound(key: string) {
    return this.tournament.rounds[key as keyof Round];
  }

  getRoundName(key: string) {
    return key === 'r16' ? 'Round of 16' : key === 'r8' ? 'Round of 8' : key === 'r4' ? 'Round of 4' : 'Round of 2';
  }

  dismissAlert() {
    this.close.emit(false);
  }
}
