import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
private heroHeading:string;
private heroText:string;
private heroBtnText:string;
private heroBtnUrl:string;
  constructor() {
  this.heroHeading= "blabla"
  this.heroText="asdjhsjkfhjka"
  this.heroBtnText="hjkdhasjk"
  this.heroBtnUrl= "https://codefactory.wien"
   }

  ngOnInit() {
  }

}
