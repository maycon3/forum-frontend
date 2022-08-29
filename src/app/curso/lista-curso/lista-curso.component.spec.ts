import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { CursoModule } from "../curso.module";
import { CursoService } from "../services/curso.service";
import { CursoTest } from "../test/curso-test";
import { ListaCursoComponent } from "./lista-curso.component";
import { of } from 'rxjs';

describe(`${ListaCursoComponent.name}`, () => {

  let fixture: ComponentFixture<ListaCursoComponent>;
  let component: ListaCursoComponent;
  let service: CursoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[CursoModule,AppModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCursoComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CursoService);
  });

  it('Cria o component Lista Curso', () => {
    expect(component).toBeTruthy();
  });

  it(`(D) Deve exibir mensagem quando a lista curso mobile não tiver dados`, () => {
    spyOn(service,'getPage')
      .and.returnValue(of());
    fixture.detectChanges();
    const listaCursoEl: HTMLElement = fixture
      .nativeElement.querySelector('.curso__lista');
    expect(listaCursoEl).toBeNull();
  });

  it(`#${ListaCursoComponent.prototype.maisCursos.name} deve alterar o valor do
      contador e dar o valor true no temMais curso quando o metodo for chamado`, done => {
    const curso = new CursoTest();
    component.temMais = true;
    fixture.detectChanges();
    let spy = spyOn(service,'getPage')
        .and.returnValue(of(curso.getPageTest()));
    component.maisCursos();
    spy.calls.mostRecent().returnValue.subscribe(resCurso => {
      if(!resCurso.content.length) {
        component.temMais = false;
      }
      fixture.detectChanges();
      expect(component.temMais).toBeTrue();
      expect(component.contador).toBe(1);
      done();
    });
  });

  it(`#${ListaCursoComponent.prototype.maisCursos.name} deve alterar o valor para false
          e exibir mensagem quando o metodo retorna com lista vazia`, done => {
    const curso = new CursoTest();
    component.temMais = true;
    fixture.detectChanges();
    let spy = spyOn(service,'getPage')
        .and.returnValue(of(curso.getCursoPageValizo()));
    component.maisCursos();
    spy.calls.mostRecent().returnValue.subscribe(resCurso => {
      if(!resCurso.content.length) {
        component.temMais = false;
      }
      fixture.detectChanges();
      expect(component.temMais).toBeFalse();
      done();
    });
  });

  it(`#${ListaCursoComponent.prototype.paginate.name} deve alterar a paginação quando
        metodo paginate for chamado`,done => {
     const curso = new CursoTest();
     component.page = 0;
     const event = {page:1};
     fixture.detectChanges();
     let spy = spyOn(service,'getPage')
        .and.returnValue(of(curso.getPageTest()));
    component.paginate(event);
    spy.calls.mostRecent().returnValue.subscribe(res => {
      component.page = event.page;
      expect(component.page).toBe(1);
      fixture.detectChanges();
      done();
    });

  });

});
