import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { MockHeroes } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return MockHeroes.getHEROES();
  }
  getObHero(id: string): Observable<Hero> {
    const hero = MockHeroes.getHERO(+id);
    return of(hero);
  }
  getSearchHeroes(trem: string): Hero[] {
    const heroes = MockHeroes.getHEROES();
    const result: Hero[] = [];
    for (const i of heroes) {
      if (i.name.toLowerCase().indexOf(trem.toLowerCase()) !== -1) {
        result.push(i);
      }
    }
    return result;
  }

  setHero(id: number, name: string) {
    MockHeroes.setHEROES(id, name);
  }
}
