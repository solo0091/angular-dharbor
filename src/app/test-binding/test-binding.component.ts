import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {


title3 :string = 'welcome';
text1:string  ='rosa';

 values = '';

  
  

  constructor() { }

  ngOnInit() {
  }

onKey(event:any) {
    this.values += event.target.value + ' | ';
  }




}
