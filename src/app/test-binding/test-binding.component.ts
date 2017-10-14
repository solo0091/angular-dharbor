import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {

  title:string='Peliculas';
  text:string='Texto de prueba';

  clickMessage = '';
  values = '';

    onClickMe() {
      this.clickMessage = 'Hiciste click en el boton!';
    }

  constructor() { }

  ngOnInit() {

setTimeout(() => {
  this.title='Test Binding'
  this.text='Texto de Prueba 2';  

}, 2000);

  }



  onInputFocus():void{

    console.log('Focus!');
  }


  onKey(event:any) {
    console.log('event',event);
    this.values += event.target.value + ' | ';
  }

}


