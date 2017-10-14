import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {

  title:string='popular movies';
  text: string='texto';
  clickMessage:string='toco el boton';

  values = '';
  
  onKey(event:any) {
    console.log('event', event);  
    this.values += event.target.value + ' | ';
   }



  

  
  
  constructor() { }
  getTitle(){
    return this.title;
  }

  ngOnInit() {

    setTimeout(()=>{
      this.text='nuevo valor';
    }, 4000);
  
  }

  onClickMe(){
    this.clickMessage='otra vez tocaste';
  }

  onInputFocus():void{
    console.log('focus');
  }
}
