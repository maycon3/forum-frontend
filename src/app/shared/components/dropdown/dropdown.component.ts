import { Component, EventEmitter, Output, TemplateRef, ViewChild } from "@angular/core";
import { DropdownPanel } from "./dropdown-panel";

@Component({
  selector: 'app-dropdown',
  templateUrl:'./dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements DropdownPanel {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();

  clique(): void {
    console.log('estão clicando...');
    this.closed.emit()
  }
}
