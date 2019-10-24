import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, state, style, animate, transition, query, animateChild, group, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimations', [
      transition('* => herolist', [
        style({opacity: 0}),
        query('herolist', []),
        group([animate('1s', style({opacity: 1}))])
      ]),
      transition('herolist => *', [
        group([animate('1s'), style({ opacity: 0})])
      ]),
      transition('* => dashboard', [
        style({ opacity: 0 }),
        group([animate('0.5s', style({ opacity: 0 }))])
      ]),
      transition('dashboard => *', [
        style({ opacity: 1 }),
        animate('0.5s', style({ opacity: 0 }))
      ]),
      // transition('* => detail', [
      //   style({ opacity: 0 }),
      //   animate('0.5s', style({ opacity: 1, color: 'blue' }))
      // ]),
    ])
  ]
})
export class AppComponent {
  title = 'tour-of-heroes';
  cont = 0;
  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet.activatedRouteData.animation, [++this.cont]);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
