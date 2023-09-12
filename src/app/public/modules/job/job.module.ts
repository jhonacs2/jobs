import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { JobsViewComponent } from './views/jobs-view/jobs-view.component';
import {JobRoutesModule} from './routes/job-routes.module';
import { JobCardComponent } from './components/job-card/job-card.component';

@NgModule({
  declarations: [
    JobsViewComponent,
    JobCardComponent
  ],
  imports: [
    CommonModule,
    JobRoutesModule
  ]
})
export class JobModule {
}
