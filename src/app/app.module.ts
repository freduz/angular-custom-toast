import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceHolderDirective } from './directives/placeholder.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PlaceHolderDirective,
    AlertComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
