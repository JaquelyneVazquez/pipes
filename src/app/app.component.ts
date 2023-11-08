import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Morelia';
  nombre2: string = 'JUan CArlos PeRez ALejo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  activar: boolean = true;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20,
    },
  };

  valorDePromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  fecha = new Date();
  idioma: string = 'en';

  videoUrl = 'https://www.youtube.com/embed/1pGkJGokkE4?si=OCLHElDSIZfLbOz5'


}
