import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Event } from '@app/core/models';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCardComponent implements OnInit {

  @Input()
  event: Event;

  @Output()
  updateCard = new EventEmitter<Event>();

  @Output()
  deleteCard = new EventEmitter<Event>();

  constructor() { }

  ngOnInit() {}

}
