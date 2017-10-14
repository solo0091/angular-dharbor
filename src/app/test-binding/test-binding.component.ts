import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {


  text: string = 'Hola';
  clickMessage;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.text = "Adios"
    }, 4000);
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  onInputFocus() {
    console.log('Focus!');
  }

  onEnter(event: any){
    console.log('Evento', event);
    if (event.key == 'Enter') {
      console.log('Enter presionado');
    }
  }

}
