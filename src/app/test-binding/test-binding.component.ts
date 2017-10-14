import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {
  text = {
    mensaje: 'Data binding funcionando',
    numero : 10
  };

  values: string;
  clickMessage: string = '';
  title: string = 'Popular Movies';
  cambio: string = '';

  constructor() { 
    this.cambio = 'preciona el boton y veras un cambio ';
  }

  ngOnInit() {
    setTimeout(() => {
      this.text = {
        mensaje: 'Cambio mensaje o.o',
        numero : 20
      }
    }, 4000);
  }


  onClickMe(): void {
    this.clickMessage = 'tocaste el boton';
  }

  mostrarMensaje(): void {
    this.cambio = 'Cambiooooo xD';
  }

  onKey(event:any) {
    console.log(event);
    this.values += event.target.value + ' | ';
  }

}
