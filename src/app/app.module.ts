import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { ClassComponent } from './form/class/class.component';
import { ReactiveComponent } from './form/reactive/reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent,
    ClassComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
