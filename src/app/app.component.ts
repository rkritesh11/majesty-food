import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/services/shoppinglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'majesty-food';
  sectionSelected = 'recipe';

  onHeaderLinkClicked(linkSelected: string) {
    this.sectionSelected = linkSelected;
  }

}
