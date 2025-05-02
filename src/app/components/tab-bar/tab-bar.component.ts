import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';
import { Observable, Observer } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';

export interface ExampleTab {
  label: string;
  content: string;
  route?: string;
}

@Component({
  selector: 'app-tab-bar',
  imports: [MatTabsModule, AsyncPipe, RouterOutlet, RouterLink],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.css'
})
export class TabBarComponent {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'ADD', content: 'Content 1', route: '/add' },
          { label: 'SEARCH', content: 'Content 2', route: '/search' },
          { label: 'UPDATE', content: 'Content 3', route: '/update' },
          { label: 'VIEW/DELETE', content: 'Content 3', route: '/view' },
        ]);
      }, 1000);
    });
  }
}
