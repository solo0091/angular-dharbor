import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {
  /*@Input()
  id
  : string;*/

  listOfQuantities = [
    { id: 0, quantity: 1},
    { id: 1, quantity: 2},
    { id: 2, quantity: 3},
    { id: 3, quantity: 4},
    { id: 4, quantity: 5}
  ];
  selectedQuantity: Object;
  constructor() {
  }

  ngOnInit() {
    console.log('in ngOnInit')
  }

}
