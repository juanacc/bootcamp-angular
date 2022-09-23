import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppRountingModule } from './app-routing.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDriveFormComponent,
    ReactiveFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
