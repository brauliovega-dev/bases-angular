import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponentDbz {


  @Input()
  public characterList: Character[]=[{
    name: 'Trunssks',
    power: 10
  }]


  @Output()
  delateRequest: EventEmitter<number> = new EventEmitter();

  onDelete(index:number):void{
this.delateRequest.emit(index);
  }

onDeletedCharacter(index:number):void{
  console.log({index});

}

}
