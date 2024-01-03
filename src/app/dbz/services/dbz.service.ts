import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interface/character.interface';

@Injectable({ providedIn: 'root' })


export class DbzService {


  public chracters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
  ];


  public onNewCharacteer(character: Character): void {
const newCharacter:Character ={id: uuid(), ...character}

    this.chracters.push(newCharacter);
  }


  // public onDeleteCharacter(index: number): void {
  //   this.chracters.splice(index, 1);
  // }

  deleteCharacterById(id:string){
    this.chracters = this.chracters.filter(character => character.id !== id);
  }


}
