import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { GitsearchService } from './gitsearch.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
    
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
