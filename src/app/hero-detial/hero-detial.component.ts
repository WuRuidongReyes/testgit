import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Route, Router, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detial',
  templateUrl: './hero-detial.component.html',
  styleUrls: ['./hero-detial.component.css']
})
export class HeroDetialComponent implements OnInit {

  hero$: Observable<Hero>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.hero$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.heroService.getObHero(params.get('id')))
    );
  }

  onOKClick(id: number, name: string) {
    this.heroService.setHero(id, name);
    console.log(typeof(id));
  }

  goBack() {
    this.location.back();
  }
}
