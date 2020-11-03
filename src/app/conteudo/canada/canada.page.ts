import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canada',
  templateUrl: './canada.page.html',
  styleUrls: ['./canada.page.scss'],
})
export class CanadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -14,
  }

}
