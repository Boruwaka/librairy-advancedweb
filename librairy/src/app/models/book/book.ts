export class Book {
  id:string = "";
  title:string = "";
  author:string = "";
  releaseDate:number = new Date().getFullYear();
  topic:string = "";
  imageUrl:string = "";
  isAudio:boolean = false;

  constructor(
    title:string,
    author:string,
    releaseDate:number,
    topic:string,
    imageUrl:string,
    isAudio:boolean) {
      this.id = Math.random().toString(36).substr(2, 9)
      this.title = title;
      this.author = author;
      this.releaseDate = releaseDate;
      this.topic = topic;
      this.imageUrl = imageUrl;
      this.isAudio = isAudio;
  }

  update(
    title:string,
    author:string,
    releaseDate:number,
    topic:string,
    imageUrl:string,
    isAudio:boolean) {
      this.title = title;
      this.author = author;
      this.releaseDate = releaseDate;
      this.topic = topic;
      this.imageUrl = imageUrl;
      this.isAudio = isAudio;
  }
}
