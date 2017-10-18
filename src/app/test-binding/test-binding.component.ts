import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {
  title : string ='Popular Movies';
  values = '';
  clickMessage = '';

  text ={
    value1: 'Bienvenido la la',
    value2: 'Seguimos viendo la lista'
  };
  
  constructor() { }

  ngOnInit() {
    setTimeout(() => {//se usa notacion flecha para acceder a las propiedades de las funcion desde cualquier lugar
      this.title='Test-Binding';
      this.text={
        value1:'Si funciona',
        value2:'Angular'
      }
    }, 4000);
     //var that=this;
     /*setTimeout(() => {//se usa notacion flecha para acceder a las propiedades de las funcion desde cualquier lugar
      this.movie1 ={
        title: 'Star Wars II',
        overview: 'PArt II of the movie'
      }
    }, 2000);

    setTimeout(() => {//se usa notacion flecha para acceder a las propiedades de las funcion desde cualquier lugar
      this.movie2 ={
        title: 'Wonder Woman',
        overview: 'Wonder Woman Description...'
      }
    }, 4000);*/

  }
  ///DEFINICION DE FUNCIONES
  onClickMe() : void {
    this.clickMessage = 'You are my hero!';
  }

  onInputFocus() : void {
    console.log('Focus');
  }
 
    onKey(event:any) {
      console.log('event', event);
      
      this.values += event.target.value + ' | ';
    }

}
