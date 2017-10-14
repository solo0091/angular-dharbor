import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string ='Popular Movies';
  defaultPictureURL: string = 'https://www.w3schools.com/angular/pic_angular.jpg';
  // text: string  ='Description text'
  movies: Movie[]=[
    {
      title: 'Star Wars',
      overview: 'Star Wars description...',
      pictureURL: 'https://media.contentapi.ea.com/content/legacy/starwars-ea-com/es_MX/starwars/battlefront/news-articles/collect-iconic-heroes-and-dominate-the-universe-in-star-wars-gal/_jcr_content/featuredImage/renditions/rendition1.img.jpg'
    },

    {
      title: 'IT',
      overview: 'IT description...',
      pictureURL: 'http://blog.disfraceshalloweenmimo.com/wp-content/uploads/2017/05/itportada.jpg'
    },

    {
      title: 'Justice League',
      overview: 'Justice League description...',
      pictureURL: 'http://media.comicbook.com/2017/02/justice-league-blur-effect-229823.jpg'
    },

    {
      title: 'Justice League',
      overview: 'Justice League description...',
      pictureURL: null
    }
  ];

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

  clickMessage = '';

  onClickMe(){
    this.clickMessage = 'You are me hero';
  }
  // getTitle(): string{
  //   return this.title;
  // }

}
