import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Event } from '@app/core/models';

@Injectable()
export class EventsFirebaseService {
  constructor(
    private readonly afs: AngularFirestore,
  ) {}

  public getEvents(): AngularFirestoreCollection<Event> {
    return this.afs.collection<Event>('/events');
  }

  public getUsers(): AngularFirestoreCollection<Event> {
    return this.afs.collection('/users');
  }
}
