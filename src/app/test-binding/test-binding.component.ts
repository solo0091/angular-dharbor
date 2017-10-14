import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {
  // foods =[
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizaa-1', viewValue: 'Pizza'},
  //   {value: 'chicken-2', viewValue: 'Chicken'}
  // ];
  title: string = "Ejemplo test";
  values: string = '';
  message: string = '';
  constructor() { }

  ngOnInit() {
    
  }

  onClickMe(){
    this.message = "Thanks You";
  }

  onkey(event:any){
    this.values += event.target.value + '|';
  }

}
