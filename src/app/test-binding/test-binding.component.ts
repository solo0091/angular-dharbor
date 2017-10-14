import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {

  title = 'Test binding';
  inputText = 'I am an input text!';
  messageText;
  values = '';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.inputText = 'I am the same input text!';
    }, 1000);
    setTimeout(() => {
      this.title = 'Test Binding Tested!';
    }, 2000);
  }

  onClickMe() {
    this.messageText = 'The button was clicked!';
  }

  onInputFocus() {
    console.log('Focus');
  }

  onKey(event: any) {
    console.log('event', event);
    this.values += event.target.value + ' | ';
  }

}
