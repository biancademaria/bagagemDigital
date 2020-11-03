import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag4',
  templateUrl: './pag4.page.html',
  styleUrls: ['./pag4.page.scss'],
})
export class Pag4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -14,
  }

}
