import { trigger, transition, style, animate } from '@angular/animations';

export const pageTransitionAnimation = trigger('pageTransition', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.8s', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('0.8s', style({ opacity: 0 }))
  ])
]);