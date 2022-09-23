import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.modules';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthTestComponent } from './auth/auth-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //RecipesModule, se elimina de aca ya que implemente lazy loading ver app-routing y recipes-routing
    //ShoppingListModule, se elimina de aca ya que implemente lazy loading. ver modulo del componente
    SharedModule,
    CoreModule,
    //AuthModule, se elimina de aca ya que implemente lazy loading. Ver modulo del componente
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
