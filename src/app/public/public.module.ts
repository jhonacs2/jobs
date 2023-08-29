import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './views/home/home.component';
import {PublicRoutesModule} from './routes/public-routes.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutesModule
  ]
})
export class PublicModule {
}
