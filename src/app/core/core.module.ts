import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { TimestampPipe } from './pipes/timestamp.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EventCardComponent,
    TimestampPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EventCardComponent,
    TimestampPipe
  ]
})
export class CoreModule { }
