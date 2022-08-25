import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

@Input() temMais = false;
@Output() clicked: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }

}
