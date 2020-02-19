import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import {NavController} from '@ionic/angular';
import {HomePage} from '../home/home.page';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  badAnswers: number = 0;
  goodAnswers: number = 0;
  constructor(public navController: NavController,  private route: ActivatedRoute,
    private router: Router) { }

  ionViewDidEnter() {
    this.createChart();
  }

  goBack() {
   // this.navController.pop();
   this.router.navigate(['/home']);
  }

  ngOnInit() {
    let bad = this.route.snapshot.paramMap.get('bad');
    let good = this.route.snapshot.paramMap.get('good');
    console.log('Bad answers: ' + bad);
    console.log('Good answers: ' + good);
    this.badAnswers = parseInt(bad);
    this.goodAnswers = parseInt(good);
  }

  createChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Respuestas incorrectas', 'Respuestas correctas'],
        datasets: [{
          label: 'Viewers in millions',
          data: [this.badAnswers, this.goodAnswers],
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
