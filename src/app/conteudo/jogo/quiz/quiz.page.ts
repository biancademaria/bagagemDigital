import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  comecar() {
    this.router.navigate(['/perguntas']);
  }

}
