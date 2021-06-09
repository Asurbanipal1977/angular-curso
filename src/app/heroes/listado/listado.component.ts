import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = "";

  constructor() {
    console.log('Prueba');

   }

   borrarHeroe() {
     this.heroeBorrado = this.heroes.shift() || '';
   }

  ngOnInit(): void {
    console.log('Prueba OnInit');
  }

}
