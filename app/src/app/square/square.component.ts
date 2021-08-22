import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
  {{rando}}
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rando = Math.random();
}
