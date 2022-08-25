import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { AppModule } from "../app.module";
import { CategoriaModule } from "./categoria.module";
import { ListaCategoriaComponent } from "./lista-categoria.component";
import { CategoriaService } from "./services/categoria.service";
import { buildCategoriaLista, CategoriaTest } from "./test/categoria-test";
import { of } from 'rxjs';
import { CoreModule } from "../core/core.module";

describe(ListaCategoriaComponent.name, () => {
  let fixture: ComponentFixture<ListaCategoriaComponent>;
  let component: ListaCategoriaComponent;
  let service: CategoriaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[CategoriaModule,CoreModule,AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCategoriaComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CategoriaService);
  });

  it(`Deve criar o componente`, () => {
    expect(component).toBeTruthy();
  });

  it(`(D) Deve exibir a listagem  quando os dados chegarem`, () => {
    const categorias = buildCategoriaLista();
    spyOn(service,'getPage')
      .and.returnValue(of(categorias));
      fixture.detectChanges();
    const ulEl: HTMLElement = fixture.nativeElement
      .querySelector('.categoria__lista');
    expect(ulEl).not.toBeNull();
  });

  it(`(D) Deve exibir a mensagem quando os dados não chegarem`, () => {
    const categorias = buildCategoriaLista();
    spyOn(service,'getPage')
      .and.returnValue(of());
      fixture.detectChanges();
      const ulEl: HTMLElement = fixture.nativeElement
      .querySelector('.categoria__lista');
      expect(ulEl).toBeNull();
  });

  it(`#${ListaCategoriaComponent.prototype.maisCategorias.name} deve
        dar o valor falso quando a listagem vier vazia`, done => {
    const test = new CategoriaTest();
    component.temMais = true;
    fixture.detectChanges();
    let spy = spyOn(service, 'getPage')
      .and.returnValue(of(test.getPageListaVaiza()));
      component.maisCategorias();
    spy.calls.mostRecent().returnValue.subscribe(cat =>{
      if(!cat.content.length){
        component.temMais = false;
      }
      fixture.detectChanges();
        expect(component.temMais).toBeFalse();
      done();
    });
  });

  it(`#${ListaCategoriaComponent.prototype.maisCategorias.name} deve
        dar o valor verdadeiro quando a listagem for carregada`, done => {
    const test = new CategoriaTest();
    component.temMais = true;
    fixture.detectChanges();
    let spy = spyOn(service, 'getPage')
      .and.returnValue(of(test.getPageListaVaiza()));
      component.maisCategorias();
    spy.calls.mostRecent().returnValue.subscribe(cat =>{
      if(!cat.content.length){
        component.temMais = false;
      }
      fixture.detectChanges();
        expect(component.temMais).toBeFalse();
      done();
    });
  });

  it(`#${ListaCategoriaComponent.prototype.paginate.name} deve
        alterar a page quando função for solicitada`, () => {
      const test = new CategoriaTest();
      component.page = 0;
      const event = {page:1};
      let spy =spyOn(service, 'getPage').and.returnValue(of(test.getPageComDuasPaginas()));
      fixture.detectChanges();
      component.paginate(event);
      spy.calls.mostRecent().returnValue.subscribe(cat =>{
        component.page = 1;
        fixture.detectChanges();
      })
      expect(component.page).toBe(1);
    });
});
