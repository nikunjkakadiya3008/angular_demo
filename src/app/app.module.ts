import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { WalkthroughModule } from 'angular-walkthrough';
import { ButtonsModule } from 'nextsapien-component-lib';
import Swiper from 'swiper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectOptionsComponent } from './components/select-options/select-options.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

export const httpLoaderFactory = (http: HttpBackend): TranslateHttpLoader => new TranslateHttpLoader(new HttpClient(http), './assets/i18n/', '.json');

@NgModule({
  declarations: [AppComponent, SelectOptionsComponent, TutorialComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    WalkthroughModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
  ],
  providers: [Swiper],
  bootstrap: [AppComponent],
  exports: [TutorialComponent, SelectOptionsComponent],
})
export class AppModule {}
