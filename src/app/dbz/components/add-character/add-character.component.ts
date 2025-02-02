import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public oneNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter() {

    if ( this.character.name.length === 0) return

    this.oneNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
    // this.character.name = '';
    // this.character.power = 0;
  }
}
