import { Timestamp } from './timestamp';

export interface Event {
  id: number;
  name: string;
  description: string;
  picture: string;
  creationDate: Timestamp;
}
