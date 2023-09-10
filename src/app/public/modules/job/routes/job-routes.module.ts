import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {JOB_ROUTES} from './job-routes';

@NgModule({
  imports: [RouterModule.forChild(JOB_ROUTES)],
  exports: [RouterModule]
})
export class JobRoutesModule {
}
