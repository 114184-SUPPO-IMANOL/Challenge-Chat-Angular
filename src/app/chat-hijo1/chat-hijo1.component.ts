import { Component, EventEmitter, Output } from '@angular/core';

class Mensaje{
  mensaje: string;
  fecha: Date;

  constructor(mensaje: string, fecha: Date){
    this.mensaje = mensaje;
    this.fecha = fecha;
  }
}

@Component({
  selector: 'app-chat-hijo1',
  templateUrl: './chat-hijo1.component.html',
  styleUrls: ['./chat-hijo1.component.css']
})
export class ChatHijo1Component {
  @Output() mensajeDeChat1: EventEmitter<Mensaje> = new EventEmitter();
  mensaje: string = "";

  public onEnviarMensaje(){
    let nuevoMensaje: Mensaje = new Mensaje(this.mensaje, new Date());
    this.mensajeDeChat1.emit(nuevoMensaje);
    this.mensaje = "";
  }

  public onGuardarMensaje(event: any){
    this.mensaje = event.target.value;
    console.log(event.target.value);
  }

}
