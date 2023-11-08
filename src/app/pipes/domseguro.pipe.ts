import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){

  }
  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    //permite la inyeccion de codigo, de que se pueda usar en el html ya que es confiable
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
