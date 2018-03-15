import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedsComponent } from './seeds.component';
import { SeedsRoutingModule } from './seeds-routing.module';

@NgModule({
  imports: [CommonModule, SeedsRoutingModule],
  declarations: [SeedsComponent],
  exports: [SeedsComponent]
})
export class SeedsModule { }
