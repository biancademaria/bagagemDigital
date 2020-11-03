import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-japao',
  templateUrl: './japao.page.html',
  styleUrls: ['./japao.page.scss'],
})
export class JapaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -14,
  }

}
