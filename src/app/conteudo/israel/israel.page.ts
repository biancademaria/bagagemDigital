import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-israel',
  templateUrl: './israel.page.html',
  styleUrls: ['./israel.page.scss'],
})
export class IsraelPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -14,
  }

}
