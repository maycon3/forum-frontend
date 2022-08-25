import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { CoreModule } from 'src/app/core/core.module';
import { CategoriaTest } from '../test/categoria-test';
import { CategoriaService } from "./categoria.service";

describe(CategoriaService.name, () => {

  let service: CategoriaService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        HttpClientTestingModule
      ],
      providers: [CategoriaService]
    }).compileComponents();

    service = TestBed.inject(CategoriaService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it(`#${CategoriaService.prototype.getAll.name} deve retorna
     lista de categorias`, done => {
      const mock = new CategoriaTest();
      service.getAll().subscribe(cat => {
        expect(cat.length).toBe(2);
        done();
      });
      httpController
        .expectOne(mock.apiLista)
        .flush(mock.getCategoriaLista());
  });

  it(`#${CategoriaService.prototype.get.name} deve retorna uma categoria`, done => {
    const mock = new CategoriaTest();
    const categoria = {id:1, nome: 'Programação'};
    service.get(1).subscribe(cat => {
      expect(cat).toEqual(categoria);
      done();
    });
    httpController
    .expectOne(mock.apiCategoria)
    .flush(mock.getCategoria());
  });
});
