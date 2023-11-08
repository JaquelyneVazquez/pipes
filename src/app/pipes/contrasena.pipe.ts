import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): unknown {
    //si mostrar es true, mostrar la contrasena
    return (mostrar) ? '*'.repeat(value.length) : value;

  }

}
