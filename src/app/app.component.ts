import { Component, VERSION, ViewChild } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { PlaceHolderDirective } from './directives/placeholder.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(PlaceHolderDirective, { static: true })
  elment: PlaceHolderDirective;
  constructor() {}
  name = 'Angular ' + VERSION.major;

  login() {
    const componentRef =
      this.elment.viewContainer.createComponent(AlertComponent);
    componentRef.instance.msg = 'Loggin Success!.';
    componentRef.instance.type = 'Success';
    componentRef.instance.closeEvt.subscribe((res) => {
      if (res) {
        this.elment.viewContainer.clear();
      }
    });
  }
}
