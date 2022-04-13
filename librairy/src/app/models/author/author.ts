export class Author {
  id: string = "";
  firstname:string = "";
  lastname:string = "";
  isAlive:boolean = false;

  constructor(
    firstname:string,
    lastname:string,
    isAlive:boolean) {
      this.id = Math.random().toString(36).substr(2, 9)
      this.firstname = firstname;
      this.lastname = lastname;
      this.isAlive = isAlive;
  }

  update(
    firstname:string,
    lastname:string,
    isAlive:boolean) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.isAlive = isAlive;
  }
}