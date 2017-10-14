import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {
  
  title: string = 'text sample'
  text:string = 'hello world'
  clickMessage:string;
  clickMessageObj:string = ''; 
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
    this.text = 'text on ¡nit'
    },2000)
  }

  onClickMe(){
    this.clickMessage = 'Angular developers';
    console.log("button val")
  }

  onInputFocus(){
    console.log('focus');
  }

  onClickMeObject(event:any){
    console.log('event',event)
   this.clickMessageObj += event.target.value + '!'
  }
}

