import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';
import { HoverDirective } from './customDirective';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    UserComponent,
    NavComponent,
    HighlightDirective,
    HoverDirective,
    FormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
