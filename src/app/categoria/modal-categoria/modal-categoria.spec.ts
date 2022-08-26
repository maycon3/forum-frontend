import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { ModalModule } from "src/app/shared/components/modal/modal.module";
import { DialogService } from "src/app/shared/components/modal/modalDialog/dialog.service";
import { CategoriaModule } from "../categoria.module";
import { CategoriaService } from "../services/categoria.service";
import { ModalCategoriaComponent } from "./modal-categoria.component";
import { DialogRef } from "src/app/shared/components/modal/modalDialog/dialog-ref";
import { DIALOG_DATA } from "src/app/shared/components/modal/modalDialog/dialog-token";
import { Categoria } from "../interfaces/categoria";

describe(ModalCategoriaComponent.name, () => {
  let fixture: ComponentFixture<ModalCategoriaComponent>;
  let component: ModalCategoriaComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[ModalCategoriaComponent],
      imports: [CategoriaModule,ModalModule,AppModule],
      providers:[
        CategoriaService,
        DialogService,
        {
          provide: DialogRef,
          useValue: {}
        },
        {
          provide: DIALOG_DATA,
          useValue: {id: 1, nome: 'Programação'}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCategoriaComponent);
    component = fixture.componentInstance;
  });

  it('Deve criar o componente ModalCategoria',async () => {
    expect(component).toBeTruthy();
  });


  it(`Deve receber o valor quando passar pelo ciclo de vida`, () => {
    fixture.detectChanges();
    expect(component.categoriaForm.get('nome')?.value).toBe('Programação');
  });


  it(`Deve dar true quando os campos não tiverem todos preenchidos no metodo salvar`, () => {
    fixture.detectChanges();
    component.categoriaForm.get('nome')?.setValue(null);
    component.salvar();
    expect(component.categoriaForm.invalid).toBeTrue();
  });

});
