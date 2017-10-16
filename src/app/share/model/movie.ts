export class Movie {
  title: string;
  description: string;
  path: string;
  updated: Date;
  duration: string;
  genre: string;
  price: number
  constructor(title: string, description: string, path: string, updated: Date , duration: string, genre: string, price: number) {
    this.title = title;
    this.description = description;
    this.path = path;
    this.updated = updated;
    this.duration = duration;
    this.genre = genre;
    this.price = price;
  }
}
