import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searchResult: Hero[];
  hidden: boolean;
  routerId: number;
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.hidden = true;
    this.routerId = 0;
  }

  onSearch(searchValue: string) {
    if (searchValue) {
      this.searchResult = this.heroService.getSearchHeroes(searchValue);
    } else {
      this.searchResult = [];
    }
  }
  onFocus() {
    document.getElementById('aa').style.animation = 'search-onfocus 0.2s';
    this.hidden = false;
  }
  onBlur() {
    document.getElementById('aa').style.animation = 'search-onblur 0.2s';
    this.hidden = true;
    console.log('search-box: ', this.router.navigated);
    if (this.routerId) {
      // this.router.navigateByUrl(`herodetial/${this.routerId}`);
      this.router.navigate([`/herodetail`, this.routerId]);
    }
  }
  onListMouseOver(id: number) {
    console.log(`get router id: ${id}`);
    this.routerId = +id;
  }
  onListMouseOut() {
    console.log('routerId clean');
    this.routerId = 0;
  }
}
