import { Component, EventEmitter, Output } from '@angular/core';
import { HoraMinutoSegundoPipe } from '../hora-minuto-segundo.pipe';

class Mensaje{
  mensaje: string;
  fecha: Date;

  constructor(mensaje: string, fecha: Date){
    this.mensaje = mensaje;
    this.fecha = fecha;
  }
}

@Component({
  selector: 'app-chat-hijo2',
  templateUrl: './chat-hijo2.component.html',
  styleUrls: ['./chat-hijo2.component.css']
})
export class ChatHijo2Component {
  @Output() mensajeDeChat2: EventEmitter<Mensaje> = new EventEmitter();
  mensaje: string = "";

  public onEnviarMensaje(){
    let nuevoMensaje: Mensaje = new Mensaje(this.mensaje, new Date());
    this.mensajeDeChat2.emit(nuevoMensaje); 
    this.mensaje = "";
  }

  public onGuardarMensaje(event: any){
    this.mensaje = event.target.value;
  }
}
