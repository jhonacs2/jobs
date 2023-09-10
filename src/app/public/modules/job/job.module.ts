import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { JobsViewComponent } from './views/jobs-view/jobs-view.component';
import {JobRoutesModule} from './routes/job-routes.module';

@NgModule({
  declarations: [
    JobsViewComponent
  ],
  imports: [
    CommonModule,
    JobRoutesModule
  ]
})
export class JobModule {
}
