import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProcessoComponent } from './component/processo/processo.component';
import { AddprocessoComponent } from './component/addprocesso/addprocesso.component';
import { SearchprocessoComponent } from './component/searchprocesso/searchprocesso.component';
import { ViewerprocessoComponent } from './component/viewerprocesso/viewerprocesso.component';
import { ShowprocessoComponent } from './component/showprocesso/showprocesso.component';
import { MenuComponent } from './component/menu/menu.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessoComponent,
    AddprocessoComponent,
    SearchprocessoComponent,
    ViewerprocessoComponent,
    ShowprocessoComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
