import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeedsComponent } from './seeds.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'seeds', component: SeedsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SeedsRoutingModule { }
