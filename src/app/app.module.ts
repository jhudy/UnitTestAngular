import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    MedicoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
