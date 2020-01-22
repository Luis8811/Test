import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   countries: string[] = ["Federación de Rusia", "Cuba", "India", "Italia", "Suiza", "Noruega", "Venezuela"];
   cities: string[][] = [["Kiev", "Moscú", "Volvogrado"], ["La Habana", "Matanzas", "Santo Domingo"], ["Nueva Delhi",
    "Bengala", "Calcuta"], ["Milán", "Florencia", "Roma"], ["Berna", "Zurich", "Colonia"], ["Oslo", "Estocolmo", "Copenhague"], 
    ["Quito", "Caracas", "Bogotá"]];
    currentIndex: number = 0;
    answers: string[] = ["Moscú", "La Habana", "Nueva Delhi", "Roma", "Berna", "Oslo", "Caracas"];
    selected: string[] = [];
    currentSelection: string = "";
    currentCity = this.cities[0][0];

  constructor() {}

  nextQuestion(optionSelected) {
    console.log(optionSelected + ' was selected!')
    this.selected.push(optionSelected);
    this.currentIndex++;
    this.currentCity = this.cities[this.currentIndex][0];
    this.currentSelection = "";
  }

}
