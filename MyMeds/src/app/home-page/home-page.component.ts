import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { pageTransitionAnimation } from '../animations/page-trasition.animation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [pageTransitionAnimation]

})
export class HomePageComponent implements OnInit {
  animationName: string = 'HomePage';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.animationName = this.route.snapshot.data['animation'];
  }

}
