import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatPadreComponent } from './chat-padre/chat-padre.component';
import { ChatHijo1Component } from './chat-hijo1/chat-hijo1.component';
import { ChatHijo2Component } from './chat-hijo2/chat-hijo2.component';
import { HoraMinutoSegundoPipe } from './hora-minuto-segundo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatPadreComponent,
    ChatHijo1Component,
    ChatHijo2Component,
    HoraMinutoSegundoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
