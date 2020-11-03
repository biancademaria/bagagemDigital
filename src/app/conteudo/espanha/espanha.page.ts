import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espanha',
  templateUrl: './espanha.page.html',
  styleUrls: ['./espanha.page.scss'],
})
export class EspanhaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -14,
  }

}
