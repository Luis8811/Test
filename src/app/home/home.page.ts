import { Component } from '@angular/core';
import {Router} from '@angular/router';

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
    badAnswers: number = 0;
    goodAnswers: number = 0;

  constructor(private router: Router) {}

  nextQuestion(optionSelected) {
    console.log(optionSelected + ' was selected!')
    this.selected.push(optionSelected);
    this.updateScore(this.currentIndex, optionSelected);
    this.currentCity = this.cities[this.currentIndex][0];
    this.currentSelection = "";
    this.currentIndex++;
    if (this.currentIndex >= this.countries.length) {
      this.showResults();
    }
  }

  showResults() {
    console.log('navigation to page of results:');
    let currentBadAnswers = this.badAnswers;
    let currentGoodAnswers = this.goodAnswers;
    this.router.navigate(['/results', {bad: currentBadAnswers, good: currentGoodAnswers}]);
  }

  initTest() {
    this.currentIndex = 0;
    this.selected = [];
    this.currentSelection = "";
    this.currentCity = this.cities[0][0];
    this.badAnswers = 0;
    this.goodAnswers = 0;
  }

  updateScore(indexOfQuestion: number, selectedOption: string) {
    if (this.answers[indexOfQuestion] != selectedOption) {
      this.badAnswers++;
    } else {
      this.goodAnswers++;
    }
  }

  

}
