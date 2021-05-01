import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import {HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import * as smoothscroll from 'smoothscroll-polyfill'
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { VisionAndMissionComponent } from './modules/vision-and-mission/vision-and-mission.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AboutUsModalComponent } from './modules/about-us-modal/about-us-modal.component';



smoothscroll.polyfill();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    DashboardComponent,
    VisionAndMissionComponent,
    AboutUsModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
   CarouselModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
