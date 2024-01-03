import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'app-dbz-agregarpersonaje ',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})


export class AgregarPersonajeComponent {

@Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() {

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit({ ...this.character });

    this.character.name = '';
    this.character.power = 0;
  }
}
