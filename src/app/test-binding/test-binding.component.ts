import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {

  text = 'initial value';
  title: string = 'Popular Movies';
  clickMessage:string;
  values = '';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.text = 'new value';
    }, 3000);
  }

  onClickMe(): void {
    console.log('button clicked!!!');
    this.clickMessage = 'Angular Dev'
  }

  onInputFocus(): void {
    console.log('focus');
  }

  onKey(event: any) {
    console.log(event.target.value);
    this.values += event.target.value + ' | ';
  }
}
