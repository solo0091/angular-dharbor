import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {
  title:string = 'Popular Movies';
  text:string = 'Hello World'
  clickMessage:string;
  values:string = '';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.title = "Test Binding";
      this.text = "Hello Binding world";      
    }, 2000);
  }

  onClickButton(): void {
    this.clickMessage = "Angular Developer";
  }

  onInputFocus(): void {
    console.log('Focus!');
  }

  onKey(event:any) {
    console.log('event', event);
    this.values += event.target.value + ' | ';
  }
}
