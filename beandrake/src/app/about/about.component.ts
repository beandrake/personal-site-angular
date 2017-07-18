import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  variable;
  constructor() { }

  ngOnInit() {
  }

  onScroll(event: Event) {
    // explicit typecast so that browser knows target is of type...
    this.variable = (<HTMLInputElement>event.target).value;
    // console.log(event);
  }

}
