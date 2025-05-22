import { v4 as uuidv4 } from 'uuid';

export class Role {
  private id?: string;
  public name: string;
  public createdAt: Date;

  constructor(){
    if(!this.id){
      this.id = uuidv4();
    }
  }
}
