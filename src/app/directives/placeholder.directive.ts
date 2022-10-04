import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceHolder]',
})
export class PlaceHolderDirective {
  constructor(public viewContainer: ViewContainerRef) {
    console.log('logged');
  }
}
