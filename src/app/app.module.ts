import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {
  ApiModule, Configuration,
  ConfigurationParameters
} from 'jacob-mott-site';
//import { environment } from '../environments/environment';

import {MatListModule} from '@angular/material/list'; 

import { SwiperModule } from "swiper/angular";

import { NgScrollbarModule } from 'ngx-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MycarouselComponent } from './mycarousel/mycarousel.component';
import { My3dComponent } from './my3d/my3d.component';
import { MylistComponent } from './mylist/mylist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { GithubService } from './github.service';
//import { DefaultService } from 'jacob-mott-site'

import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { AboutComponent } from './about/about.component';
import { SlideoutComponent } from './slideout/slideout.component';
import { SwipercarouselComponent } from './swipercarousel/swipercarousel.component';
import { SpinnerComponent } from './spinner/spinner.component';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: 'https://virtserver.swaggerhub.com/jacobmott/JacobMott/1.0.0',
  };
  return new Configuration(params);
}


@NgModule({
  declarations: [
    AppComponent,
    MycarouselComponent,
    My3dComponent,
    MylistComponent,
    AboutComponent,
    SlideoutComponent,
    SwipercarouselComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ApiModule.forRoot(apiConfigFactory),
    // make sure to import the HttpClientModule in the AppModule only,
    // see https://github.com/angular/angular/issues/20575
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    NgScrollbarModule,
    AngularFullpageModule,
    SwiperModule
  ],
  providers: [
    //GithubService,
    //DefaultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
