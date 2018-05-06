import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { Dform1Component } from './dform1/dform1.component';
import { Dform2Component } from './dform2/dform2.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    LoginComponent,
    Dform1Component,
    Dform2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
