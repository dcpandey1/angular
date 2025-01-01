import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ViewProductsComponentComponent } from './view-products-component/view-products-component.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { YoutubeTemplateDrivenComponent } from './youtube-template-driven/youtube-template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ViewProductsComponentComponent,
    TemplateDrivenFormComponent,
    YoutubeTemplateDrivenComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
