import { Component } from '@angular/core';
import { ControlPage } from '../control/control';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ControlPage;

  constructor() {

  }
}
