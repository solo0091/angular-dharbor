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

  text= {
    title_text : 'Title text',
    description: 'Example description'
  }

  constructor() { }

  ngOnInit() {
    //setTimeout(function() {
    // setTimeout(() => {
    //   this.movie1 ={
    //     title: 'Start Wars II',
    //     overview: 'Part II of the movie...'
    //   }
    // }, 2000);

    // setTimeout(() => {
    //   this.movie2 ={
    //     title: 'Wonder Woman',
    //     overview: 'Wonder Woman description'
    //   }
    // }, 4000);

    // setTimeout(() => {
    //   this.movie3 ={
    //     title: 'BraveHeart',
    //     overview: 'BraveHeart description'
    //   }
    // }, 6000);
    
  }


  
    // getTitle(): string{
    //   return this.title;
    // }
  

  onClickMe(){
    this.message = "Thanks You";
  }

  onkey(event:any){
    this.values += event.target.value + '|';
  }

}
