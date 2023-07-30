import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { ThemeToggleService } from './components/theme-toggle/theme-toggle.service';
import { THEME_STORAGE_SERVICE, ThemeStorageService } from './components/theme-toggle/theme-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    ThemeToggleService,
    {
      provide: THEME_STORAGE_SERVICE,
      useClass: ThemeStorageService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
