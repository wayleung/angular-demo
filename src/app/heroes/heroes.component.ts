import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes: Hero[];



  constructor(private heroService: HeroService) {
  }

  // 箭头函数
  getHeroes(): void {

    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    // 箭头函数  相当于
    // var _that = this;
    // this.heroService.getHeroes().subscribe(function (heroes) {
    //   _that.heroes = heroes;
    // });
  }

  ngOnInit() {
    this.getHeroes();
  }

}
