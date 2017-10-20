export class Movie {
  id ?: string;
  title: string;
  description: string;
  path: string;
  updated: Date;
  duration: string;
  genre: string;
  price: number;
  defaulPicturetURL ?: string;
  constructor(
      title: string,
      description: string,
      path: string,
      updated: Date,
      duration: string,
      genre: string,
      price: number,
      defaulPicturetURL = ''
    ) {
    this.title = title;
    this.description = description;
    this.path = path;
    this.updated = updated;
    this.duration = duration;
    this.genre = genre;
    this.price = price;
    this.defaulPicturetURL = defaulPicturetURL;
  }
}
