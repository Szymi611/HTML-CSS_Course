import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { FormsModule } from '@angular/forms';
import { GigabytesToMegabytesPipe } from './pipes/gigabytes-to-megabytes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    GigabytesToMegabytesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
