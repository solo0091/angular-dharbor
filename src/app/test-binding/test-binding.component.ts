import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {
  title = 'Popular movies TEEST BINDING';
  text = 'text1';
  clickMessage = '';
  values = '';

  movie1 = {
    title: 'Star Wars',
    overview: 'Starwars description....'
  };
  movie2 = {
    title: 'IT',
    overview: 'It description...'
  };
  movie3 = {
    title: 'Justice League',
    overview: 'Justice League descriptions...'
  };
  constructor() { }
  // se ejecuta cada vez que se ejecuta el componente
  ngOnInit() {
    setTimeout(() => {
      this.movie1 = {
        title: 'Star Wars II',
        overview: 'Part II of the movie..'
      }
    }, 2000);

    setTimeout(() => {
      this.movie2 = {
        title: 'New Movie',
        overview: 'New Movie movie..'
      }
    }, 4000);

    setTimeout(() => {
      this.text = 'new valor';
    }, 4000);
  }///
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  onInputFocus() {
    console.log('focus');
  }

  onKey(event: any) {
    console.log('event', event);
    this.text += event.target.value + '|';
  }
}
