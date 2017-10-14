import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {


  title: string = 'Popular Movies';
  text: string = 'Hello World';
  clickMessage: string;
  values = '';
  
  

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.title = "Test Binding"
      this.text = "Hello Binding World"
    }, 2000);
  }

  onClickButton() {
    this.clickMessage = 'Angular Developer!';
  }

  onImputFocus (){
    console.log('focus');
  }

  onKey(event:any) {
    console.log ('event', event);
    this.values += event.target.value + ' | ';
  }

}
