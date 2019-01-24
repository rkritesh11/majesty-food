import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {

    // tslint:disable-next-line:no-output-rename
    @Output('headerLinkClicked') headerLinkClicked = new EventEmitter<string>();

    constructor() {

    }

    onRecipeClick(linkSelected: string) {
        this.headerLinkClicked.emit(linkSelected);
    }


    onShoppingClick(linkSelected: string) {
        this.headerLinkClicked.emit(linkSelected);
    }
}
