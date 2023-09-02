import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './views/home/home.component';
import {PublicRoutesModule} from './routes/public-routes.module';
import { HeaderComponent } from './components/header/header.component';
import { FilterJobsComponent } from './components/filter-jobs/filter-jobs.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FilterJobsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutesModule
  ]
})
export class PublicModule {
}
