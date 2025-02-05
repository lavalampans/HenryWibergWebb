import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { fadeAnimation } from '../app/ui/animation/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  constructor() {}
}