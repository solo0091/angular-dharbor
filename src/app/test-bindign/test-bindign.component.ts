import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-bindign',
  templateUrl: './test-bindign.component.html',
  styleUrls: ['./test-bindign.component.css']
})
export class TestBindignComponent implements OnInit {
  public myTitle:string = "My Form";
  public default:string = "Ej. example@gmail.com"
  public flag:boolean = false;
  public value:string;
  public values:string='';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.myTitle = "texto";
    }, 2000);  
  }

  clickMe(){
    alert("mensaje de alerta");
    this.flag = true;
    if(this.flag === true){
      setTimeout(() => {
        this.value = "texto";
      }, 2000);      
    }
  }

  onInputFocus(){
    console.log('focus');
  }

  onkey(event:any){
    this.values += event.target.value+' | ';
  }
}
