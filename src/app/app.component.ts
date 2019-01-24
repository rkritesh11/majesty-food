import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'majesty-food';
  sectionSelected = 'recipe';

  onHeaderLinkClicked(linkSelected: string) {
    this.sectionSelected = linkSelected;
  }

}
