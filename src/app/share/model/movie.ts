export class Movie {
  title: string;
  description: string;
  path: string;
  updated: Date;
  constructor(title: string, description: string, path: string, updated: Date) {
    this.title = title;
    this.description = description;
    this.path = path;
    this.updated = updated;
  }
}
