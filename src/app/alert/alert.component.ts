import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() msg: string;
  @Input() type: string;
  @Output() closeEvt: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}
  close() {
    this.closeEvt.emit(true);
  }

  loadType() {
    return {
      danger: this.type === 'Error',
      success: this.type === 'Success',
    };
  }
}
