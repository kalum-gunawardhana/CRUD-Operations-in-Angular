import { Component } from '@angular/core';
import { TabBarComponent } from "./components/tab-bar/tab-bar.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [TabBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-frontend';
}
