import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit, TemplateRef, ViewChildren, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @Input('appDropdown') bindValue: string;

  isOpen = false;

  constructor(private elRef: ElementRef, private render: Renderer2) {

  }

  @HostListener('click') onclick() {
    if (this.isOpen) {
      this.isOpen = false;
      this.render.removeClass(this.elRef.nativeElement, this.bindValue);
      this.render.removeClass(this.elRef.nativeElement.lastElementChild, this.bindValue);

    } else {
      this.isOpen = true;
      this.render.addClass(this.elRef.nativeElement, this.bindValue);
      this.render.addClass(this.elRef.nativeElement.lastElementChild, this.bindValue);

    }
  }


  // @HostListener('focusout', ['$event.target'])
  // public onClick(targetElement) {
  //   console.log(targetElement);
  //   this.onclick();
  // }

  ngOnInit() {

  }

}
