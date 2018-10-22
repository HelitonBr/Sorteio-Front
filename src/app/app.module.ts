import { SorteioService } from './sorteio/sorteio.service';
import { MatCardModule, MatButtonModule, MatGridListModule, MatFormFieldModule } from '@angular/material';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SorteioComponent } from './sorteio/sorteio.component';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SorteioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    // Angular Material
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule

    // Teradata Covalent
  ],
  providers: [SorteioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
