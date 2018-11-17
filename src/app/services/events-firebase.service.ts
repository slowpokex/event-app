import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Event } from '../models/event';

@Injectable()
export class EventsFirebaseService {
  constructor(private readonly db: AngularFireDatabase) {}

  public getEvents(): AngularFireList<Event> {
    return this.db.list('/events');
  }

  public getUsers(): AngularFireList<Event> {
    return this.db.list('/users');
  }
}
