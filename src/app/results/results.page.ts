import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  @ViewChild('answersChart', null) barChart;
  bars: any;
  colorArray: any;
  nameOfTest: string = 'Capitales del mundo';
  answersLabel: string = 'Respuestas';
  titleLabel: string = 'Resultados del test';
  constructor() { }

  ionViewDidEnter() {
    this.createChart();
  }

  ngOnInit() {
  }

  createChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Respuestas incorrectas', 'Respuestas correctas'],
        datasets: [{
          label: 'Viewers in millions',
          data: [5, 4],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        cutoutPercentage: 40,
       responsive: false,
     }
    });
  }

}
