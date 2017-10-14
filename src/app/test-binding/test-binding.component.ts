import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {
  clickMessage:string = '';
  values:any =undefined;
  
    onClickMe() {
      this.clickMessage = 'You are my hero!';
    }


    onKey(event:any) {
      this.values += event.target.value + ' | ';
    }
  constructor() { }

  ngOnInit() {
setTimeout(()=>  {
  this.clickMessage='Hola mundo';
}, 4000);


  }

}
