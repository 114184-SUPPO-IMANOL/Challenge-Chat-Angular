import { Component } from '@angular/core';
import { HoraMinutoSegundoPipe } from 'src/app/hora-minuto-segundo.pipe'; // Asegúrate de especificar la ruta correcta

class Mensaje{
  mensaje: string;
  fecha: Date;

  constructor(mensaje: string, fecha: Date){
    this.mensaje = mensaje;
    this.fecha = fecha;
  }
}

@Component({
  selector: 'app-chat-padre',
  templateUrl: './chat-padre.component.html',
  styleUrls: ['./chat-padre.component.css']
})
export class ChatPadreComponent {
  chat1: string = "Chat 1\n";
  chat2: string = "Chat 2\n";

  // Crear una instancia de la pipe
  horaMinutoSegundoPipe = new HoraMinutoSegundoPipe();

  public onRecibirMensaje1(event: Mensaje){
    let fechaTransformada: string = this.horaMinutoSegundoPipe.transform(event.fecha);
    this.chat1 = this.chat1 + event.mensaje + " ( " + fechaTransformada + " )" + "\n";
  }
  public onRecibirMensaje2(event: Mensaje){
    let fechaTransformada: string = this.horaMinutoSegundoPipe.transform(event.fecha);
    this.chat2 = this.chat2 + event.mensaje + " ( " + fechaTransformada + " )" + "\n";
  }
}
