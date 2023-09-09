import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horaMinutoSegundo'
})
export class HoraMinutoSegundoPipe implements PipeTransform {

  transform(fecha: Date): string {
    if (fecha instanceof Date && !isNaN(fecha.getTime())) {
      const horas = fecha.getHours().toString().padStart(2, '0');
      const minutos = fecha.getMinutes().toString().padStart(2, '0');
      const segundos = fecha.getSeconds().toString().padStart(2, '0');
      
      
      return `${horas}:${minutos}:${segundos}`;
    } else {
      
      return 'Formato de fecha inválido';
    }
  }
}
