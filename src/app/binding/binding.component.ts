import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  clickMessage:string='';
  values:string='';
  constructor() { }

  ngOnInit() {
  }
  onClickMe(){
    this.clickMessage="change";
  }
  focusEvent():void{
    this.clickMessage="focus";
  }
  onKey(event){
    this.values+=event.target.value+"|";
    this.clickMessage=this.values;
    console.log(event.target.code);
  }
}
