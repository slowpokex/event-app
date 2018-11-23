import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@app/core/models';

@Pipe({
  name: 'timestamp',
  pure: true
})
export class TimestampPipe implements PipeTransform {

  transform(value: Timestamp, args?: any): Date {
    return new Date(value.seconds * 1000);
  }

}
