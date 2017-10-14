import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {

  title: string;
  nombre: string = 'Adriano';
  text: string = 'AngularJS';
  clickMessage: string = 'Hola';
  titleBinding: string = '';
  values: string = '';

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.nombre = 'Ayala';
    }, 2000);
  }

  onClickMe() {
    this.clickMessage = 'Hola ANGULAR 4!!!';
  }

  onInputFocus() {
    console.log('Focus!');
  }

  onKey(event: any) {
    this.values += event.target.value+' | ';
  }

}
