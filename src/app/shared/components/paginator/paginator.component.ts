import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnChanges {

  @Output() paginacao = new EventEmitter<PageChangedEvent>();
  @Input() ativo = true;
  @Input() total = 0;
  totalPagina = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.totalPagina = this.total;
    }
  }
  pageChanged(event: PageChangedEvent): void {
    this.paginacao.emit(event);
  }
}
