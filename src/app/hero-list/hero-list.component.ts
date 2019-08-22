import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { DOCUMENT } from '@angular/common';
import { element } from 'protractor';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  height: number;
  Yes = true;
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();

    console.log('HeroList: ', window.innerHeight);
    this.height = window.innerHeight - 160;
    console.log('HeroList: ', this.height);
    console.log('HeroList: ', document.getElementsByClassName('hero-list'));
    // const HERO_LIST = document.getElementById('aa');
    // HERO_LIST.style.height = String(this.height) + 'px';
    // HERO_LIST.setAttribute('style', `height:${this.height}px`);
    // console.log('HeroList: ', HERO_LIST.style.height); // 这条语句说明onInit发生在模板文件中的属性绑定之前
  }

}
