export class Author {
  id: string = "";
  firstname:string = "";
  lastname:string = "";
  birthdate:string = "";
  isAlive:boolean = false;

  constructor(
    firstname:string,
    lastname:string,
    birthdate:string,
    isAlive:boolean) {
      this.id = Math.random().toString(36).substr(2, 9)
      this.firstname = firstname;
      this.lastname = lastname;
      this.birthdate = birthdate;
      this.isAlive = isAlive;
  }

  update(
    firstname:string,
    lastname:string,
    birthdate:string,
    isAlive:boolean) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.birthdate = birthdate;
      this.isAlive = isAlive;
  }
}